import express from 'express';
import jwt from 'jsonwebtoken';
import Meal from '../models/Meal.js';
import Water from '../models/Water.js';
import Workout from '../models/Workout.js';
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

// GET /api/reports/monthly-summary - Get monthly summary statistics
router.get('/monthly-summary', authenticateToken, async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const daysAgo = parseInt(days);
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysAgo);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    console.log(`\n=== FETCHING MONTHLY SUMMARY (${daysAgo} days) ===`);
    console.log('Date range:', { startDate, endDate });

    // Get meals data
    const meals = await Meal.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    // Calculate average daily calories
    const dailyCalories = {};
    meals.forEach(meal => {
      const dateKey = new Date(meal.date).toISOString().split('T')[0];
      if (!dailyCalories[dateKey]) {
        dailyCalories[dateKey] = 0;
      }
      dailyCalories[dateKey] += meal.calories || 0;
    });

    const totalCalories = Object.values(dailyCalories).reduce((sum, cal) => sum + cal, 0);
    const avgDailyCalories = Object.keys(dailyCalories).length > 0 
      ? Math.round(totalCalories / Object.keys(dailyCalories).length) 
      : 0;

    // Get workout data
    const workouts = await Workout.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    const workoutSessions = workouts.length;

    // Get water data
    const waterLogs = await Water.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    // Calculate water consistency (days met goal / total days)
    const dailyWater = {};
    waterLogs.forEach(log => {
      const dateKey = new Date(log.date).toISOString().split('T')[0];
      if (!dailyWater[dateKey]) {
        dailyWater[dateKey] = 0;
      }
      dailyWater[dateKey] += log.amount || 0;
    });

    const daysMetWaterGoal = Object.values(dailyWater).filter(amount => amount >= 2000).length;
    const waterConsistency = Object.keys(dailyWater).length > 0
      ? Math.round((daysMetWaterGoal / Object.keys(dailyWater).length) * 100)
      : 0;

    // Get user for weight data
    const user = await User.findById(req.userId);
    
    // Calculate weight change - if we have historical weight data, use it
    // For now, we'll show the difference between current and goal (negative = weight loss progress)
    let weightChange = 0;
    if (user.weight && user.goalWeight) {
      weightChange = (user.weight - user.goalWeight); // Current minus goal
      // Negative means lost weight towards goal, positive means need to lose more
    }

    console.log('Monthly summary results:', {
      avgDailyCalories,
      weightChange,
      workoutSessions,
      waterConsistency,
      daysWithMeals: Object.keys(dailyCalories).length,
      daysWithWater: Object.keys(dailyWater).length
    });

    res.json({
      success: true,
      summary: {
        avgCalories: avgDailyCalories,
        weightChange: parseFloat(weightChange.toFixed(1)),
        workoutSessions,
        waterConsistency
      }
    });
  } catch (error) {
    console.error('Error fetching monthly summary:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/reports/calorie-trend - Get daily calorie data for chart
router.get('/calorie-trend', authenticateToken, async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const daysAgo = parseInt(days);
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysAgo);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    const meals = await Meal.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    // Group by date
    const dailyData = {};
    meals.forEach(meal => {
      const dateKey = new Date(meal.date).toISOString().split('T')[0];
      if (!dailyData[dateKey]) {
        dailyData[dateKey] = { calories: 0, protein: 0, carbs: 0, fat: 0 };
      }
      dailyData[dateKey].calories += meal.calories || 0;
      dailyData[dateKey].protein += meal.protein || 0;
      dailyData[dateKey].carbs += meal.carbs || 0;
      dailyData[dateKey].fat += meal.fat || 0;
    });

    // Convert to array and sort by date
    const trendData = Object.entries(dailyData)
      .map(([date, data]) => ({
        date,
        ...data
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    res.json({ success: true, trendData });
  } catch (error) {
    console.error('Error fetching calorie trend:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/reports/macro-split - Get average macro percentages
router.get('/macro-split', authenticateToken, async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const daysAgo = parseInt(days);
    
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysAgo);
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    const meals = await Meal.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;

    meals.forEach(meal => {
      totalProtein += meal.protein || 0;
      totalCarbs += meal.carbs || 0;
      totalFat += meal.fat || 0;
    });

    const total = totalProtein + totalCarbs + totalFat;
    
    const macroSplit = total > 0 ? {
      protein: Math.round((totalProtein / total) * 100),
      carbs: Math.round((totalCarbs / total) * 100),
      fat: Math.round((totalFat / total) * 100)
    } : { protein: 30, carbs: 45, fat: 25 }; // Default values

    res.json({ success: true, macroSplit });
  } catch (error) {
    console.error('Error fetching macro split:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/reports/water-trend - Get daily water intake for the week
router.get('/water-trend', authenticateToken, async (req, res) => {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 6); // Last 7 days
    startDate.setHours(0, 0, 0, 0);
    
    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    const waterLogs = await Water.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    // Group by day of week
    const dailyWater = {};
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    waterLogs.forEach(log => {
      const date = new Date(log.date);
      const dayName = days[date.getDay()];
      if (!dailyWater[dayName]) {
        dailyWater[dayName] = 0;
      }
      dailyWater[dayName] += log.amount || 0;
    });

    // Create array for last 7 days
    const waterTrend = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayName = days[date.getDay()];
      waterTrend.push({
        day: dayName.substring(0, 1), // M, T, W, etc.
        fullDay: dayName,
        amount: dailyWater[dayName] || 0,
        percentage: Math.min(Math.round(((dailyWater[dayName] || 0) / 2000) * 100), 100)
      });
    }

    res.json({ success: true, waterTrend });
  } catch (error) {
    console.error('Error fetching water trend:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
