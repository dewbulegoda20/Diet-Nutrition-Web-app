import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// GET /api/user/profile - Get user profile
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// PUT /api/user/profile - Update user profile
router.put('/profile', authenticateToken, async (req, res) => {
  try {
    const { fullName, age, height, weight, goalWeight, primaryGoal, dietType, allergies, dailyCalorieGoal, profileImage } = req.body;

    const updateData = {};
    if (fullName !== undefined) updateData.fullName = fullName;
    if (age !== undefined) updateData.age = age;
    if (height !== undefined) updateData.height = height;
    if (weight !== undefined) updateData.weight = weight;
    if (goalWeight !== undefined) updateData.goalWeight = goalWeight;
    if (primaryGoal !== undefined) updateData.primaryGoal = primaryGoal;
    if (dietType !== undefined) updateData.dietType = dietType;
    if (allergies !== undefined) updateData.allergies = allergies;
    if (dailyCalorieGoal !== undefined) updateData.dailyCalorieGoal = dailyCalorieGoal;
    if (profileImage !== undefined) updateData.profileImage = profileImage;

    const user = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    console.error('Error updating profile:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join('. ') });
    }

    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
