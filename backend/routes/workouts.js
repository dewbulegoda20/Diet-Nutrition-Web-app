import express from 'express';
import Workout from '../models/Workout.js';
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

// Create a workout entry
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { workoutType, duration, caloriesBurned, notes, date } = req.body;

    const workout = new Workout({
      userId: req.user.id,
      workoutType,
      duration,
      caloriesBurned,
      notes,
      date: date || new Date()
    });

    await workout.save();
    res.status(201).json({ message: 'Workout logged successfully', workout });
  } catch (error) {
    console.error('Error logging workout:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get workouts for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { startDate, endDate, workoutType } = req.query;
    
    // Calculate today's date range in local timezone
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
    const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    
    let query = { userId: req.user.id };
    
    // If specific date range is provided, use it
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

    if (workoutType) {
      query.workoutType = workoutType;
    }

    const workouts = await Workout.find(query).sort({ date: -1 });
    
    // Always calculate today's stats separately
    const todayWorkouts = await Workout.find({
      userId: req.user.id,
      date: { $gte: todayStart, $lte: todayEnd }
    });

    const todayStats = {
      totalDuration: todayWorkouts.reduce((sum, workout) => sum + workout.duration, 0),
      totalCalories: todayWorkouts.reduce((sum, workout) => sum + workout.caloriesBurned, 0),
      count: todayWorkouts.length
    };

    res.json({ 
      workouts,
      todayStats
    });
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get a single workout entry
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const workout = await Workout.findOne({ 
      _id: req.params.id, 
      userId: req.user.id 
    });

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json(workout);
  } catch (error) {
    console.error('Error fetching workout:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update a workout entry
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { workoutType, duration, caloriesBurned, notes, date } = req.body;

    const workout = await Workout.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { workoutType, duration, caloriesBurned, notes, date },
      { new: true, runValidators: true }
    );

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json({ message: 'Workout updated successfully', workout });
  } catch (error) {
    console.error('Error updating workout:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete a workout entry
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.user.id 
    });

    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }

    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Error deleting workout:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
