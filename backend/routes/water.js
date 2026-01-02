import express from 'express';
import Water from '../models/Water.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Create a water log entry
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { amount, date } = req.body;

    const water = new Water({
      userId: req.user.id,
      amount,
      date: date || new Date()
    });

    await water.save();
    res.status(201).json({ message: 'Water logged successfully', water });
  } catch (error) {
    console.error('Error logging water:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get water logs for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    // Calculate today's date range in local timezone
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    
    let query = { userId: req.user.id };
    
    // If specific date range is provided, use it; otherwise default to today
    if (startDate || endDate) {
      query.date = {};
      if (startDate) {
        const start = new Date(startDate);
        start.setHours(0, 0, 0, 0);
        query.date.$gte = start;
      }
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        query.date.$lte = end;
      }
    }

    const waterLogs = await Water.find(query).sort({ date: -1 });
    
    // Always calculate today's total and count separately
    const todayWaterLogs = await Water.find({
      userId: req.user.id,
      date: { $gte: todayStart, $lte: todayEnd }
    });

    const todayTotal = todayWaterLogs.reduce((sum, log) => sum + log.amount, 0);
    const todayCount = todayWaterLogs.length;

    console.log('Today total:', todayTotal);
    console.log('User ID:', req.user.id);
    console.log('Date range:', { todayStart, todayEnd });
    console.log('Today water logs count:', todayCount);

    res.json({ 
      waterLogs,
      todayTotal,
      todayCount
    });
  } catch (error) {
    console.error('Error fetching water logs:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a single water log entry
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const water = await Water.findOne({ 
      _id: req.params.id, 
      userId: req.user.id 
    });

    if (!water) {
      return res.status(404).json({ message: 'Water log not found' });
    }

    res.json(water);
  } catch (error) {
    console.error('Error fetching water log:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a water log entry
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { amount, date } = req.body;

    const water = await Water.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { amount, date },
      { new: true, runValidators: true }
    );

    if (!water) {
      return res.status(404).json({ message: 'Water log not found' });
    }

    res.json({ message: 'Water log updated successfully', water });
  } catch (error) {
    console.error('Error updating water log:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a water log entry
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const water = await Water.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.user.id 
    });

    if (!water) {
      return res.status(404).json({ message: 'Water log not found' });
    }

    res.json({ message: 'Water log deleted successfully' });
  } catch (error) {
    console.error('Error deleting water log:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
