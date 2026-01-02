import express from 'express';
import jwt from 'jsonwebtoken';
import Meal from '../models/Meal.js';

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

// POST /api/meals - Add a new meal
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { date, mealType, foodName, servingSize, calories, protein, carbs, fat, imageUrl } = req.body;

    console.log('\n=== ADDING NEW MEAL ===');
    console.log('User ID:', req.userId);
    console.log('Meal Type:', mealType);
    console.log('Food Name:', foodName);
    console.log('Received date:', date);

    // Parse the date - use the date as-is from the frontend
    let mealDate = date ? new Date(date) : new Date();
    console.log('Parsed meal date:', mealDate);

    const meal = new Meal({
      userId: req.userId,
      date: mealDate,
      mealType,
      foodName,
      servingSize,
      calories: Math.round(calories || 0),
      protein: Math.round(protein || 0),
      carbs: Math.round(carbs || 0),
      fat: Math.round(fat || 0),
      imageUrl: imageUrl || ''
    });

    await meal.save();
    console.log('Meal saved successfully with ID:', meal._id);
    console.log('Saved meal date:', meal.date);

    res.status(201).json({ 
      success: true, 
      message: 'Meal added successfully', 
      meal 
    });
  } catch (error) {
    console.error('Error adding meal:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join('. ') });
    }

    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/meals - Get all meals for the authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const { date, mealType } = req.query;
    
    console.log('\n=== FETCHING MEALS ===');
    console.log('User ID:', req.userId);
    console.log('Query date:', date);
    console.log('Query mealType:', mealType);
    
    const query = { userId: req.userId };
    
    // Filter by date if provided
    if (date) {
      const targetDate = new Date(date);
      // Set to start and end of day to capture all meals
      const startDate = new Date(targetDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(targetDate);
      endDate.setHours(23, 59, 59, 999);
      query.date = { $gte: startDate, $lte: endDate };
      console.log('Date range:', { startDate, endDate });
    }
    
    // Filter by meal type if provided
    if (mealType) {
      query.mealType = mealType;
    }

    console.log('Final query:', JSON.stringify(query));
    const meals = await Meal.find(query).sort({ date: -1 });
    console.log(`Found ${meals.length} meals`);
    
    res.json({ success: true, meals });
  } catch (error) {
    console.error('Error fetching meals:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/meals/daily-summary - Get daily nutrition summary
// NOTE: This must be BEFORE /:id route to avoid matching "daily-summary" as an ID
router.get('/daily-summary', authenticateToken, async (req, res) => {
  try {
    const { date } = req.query;
    
    console.log('\n=== FETCHING DAILY SUMMARY ===');
    console.log('User ID:', req.userId);
    console.log('Query date:', date);
    
    const targetDate = date ? new Date(date) : new Date();
    // Set to start and end of day
    const startDate = new Date(targetDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(targetDate);
    endDate.setHours(23, 59, 59, 999);

    console.log('Date range:', { startDate, endDate });

    const meals = await Meal.find({
      userId: req.userId,
      date: { $gte: startDate, $lte: endDate }
    });

    console.log(`Found ${meals.length} meals for summary`);
    if (meals.length > 0) {
      console.log('Meal types:', meals.map(m => `${m.mealType} (${m.calories} kcal)`).join(', '));
    }

    // Calculate totals
    const summary = {
      totalCalories: 0,
      totalProtein: 0,
      totalCarbs: 0,
      totalFat: 0,
      mealBreakdown: {
        Breakfast: { calories: 0, count: 0 },
        Lunch: { calories: 0, count: 0 },
        Dinner: { calories: 0, count: 0 },
        Snack: { calories: 0, count: 0 }
      }
    };

    meals.forEach(meal => {
      summary.totalCalories += meal.calories || 0;
      summary.totalProtein += meal.protein || 0;
      summary.totalCarbs += meal.carbs || 0;
      summary.totalFat += meal.fat || 0;
      
      if (summary.mealBreakdown[meal.mealType]) {
        summary.mealBreakdown[meal.mealType].calories += meal.calories || 0;
        summary.mealBreakdown[meal.mealType].count += 1;
      }
    });

    console.log('Summary totals:', {
      calories: summary.totalCalories,
      protein: summary.totalProtein,
      carbs: summary.totalCarbs,
      fat: summary.totalFat
    });

    res.json({ success: true, summary });
  } catch (error) {
    console.error('Error fetching daily summary:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/meals/search/:query - Search for foods
// NOTE: This must be BEFORE /:id route to avoid matching "search" as an ID
router.get('/search/:query', authenticateToken, async (req, res) => {
  try {
    const query = req.params.query.toLowerCase();
    
    // Hardcoded food database for demo
    const foodDatabase = [
      {
        name: 'Oatmeal with Berries',
        servingSize: '1 bowl (250g)',
        calories: 320,
        protein: 10,
        carbs: 55,
        fat: 8,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIcOCgrfLJuYEgcAe6MfeaXD3jv9J-Oy9WRiTiyQdgaZ2I3IkJWxVfXDDTcm4rEALqxkBwv_JFbw7YDDXwGsqzmGzFcch5zoDEXZw4Jb5oSRJjHrDrBqPHkmHRCiPLeSVoCHxzOPumngfJ0mtLw1FGnVHBDVi2Fo1OqWfRXiOdd4_df1P490ymhL7iC-mI__C24_veuc9rZRNjWHZK8WUCvD9hArRbezn0EjhLRlmGaaVlOc30isJRZ_pXS97VpoZR4I19qa4AaW8_'
      },
      {
        name: 'Black Coffee',
        servingSize: '1 cup (200ml)',
        calories: 2,
        protein: 0,
        carbs: 0,
        fat: 0,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnUF93ak_UIjqTz7yFeMg7LIAG8M2MRQaaqLABgIw_7Zfr8F4Bnr_YAlwtHRYuHDrG7db6egTd3ayD6HvKvQvfSwHhGJ6F09Xpxk3e0Nia7LwAgKiaxrdER6C9a1dsUUbZ7pb-ej1CxelcmMGCiggeRD6PvpaDJVlaXUqV-iP8HrhiRdYqVgX3h906VRm390GgZdksXAKag2gzIK1Edw_A41Na-6yONvtm53W19fCLVkZH-t4q1kWHDUWGC-DMjKYPhupBJvNvAApT'
      },
      {
        name: 'Boiled Egg',
        servingSize: '1 large',
        calories: 78,
        protein: 6,
        carbs: 1,
        fat: 5,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPA_EcOOF0-eq3gNjEks-zppuCXPOrr9BxFACfbp9T_noTnKHaS4uIUUzrK42c7hTq_3TSTCVHcZYJemF5nIjOiuOY3bgwVY1iTslmxkchIGt0w8-0Pdm-c6U9n2HUu4lHNxKsRrCi-3LCum0fYzeQzUEChYJM2tU4Wcp8sPK_ji5napo7VDKIOoBGii4od_7QN6fD6ocFdFUuVY0O_6SUkhdqSXycxQjplYQDv5SA_ayLsxLkplCW7D8TeWWN6E4OiENLCK43_w1O'
      },
      {
        name: 'Chicken Caesar Salad',
        servingSize: '1 serving',
        calories: 550,
        protein: 38,
        carbs: 20,
        fat: 35,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArMdSljeXhJJVW0buu0_6cfLixUdrFYHW0DHtSYThnX7YzQjNVpxlClrAUR91XWMx53AGOBBM2gX1MGaIaklQ0vipIAR8Fmp-PDRBJ0IwHSJWyO5eCQtAU6D8tHJ6p5WnX5581XW0KN6GZO6RwSMhIeH6-fEQv4zfV2s774UT8PpGI87E7l8Al9jDBU4cDjgGeeqwu9J-oZyXGaPFeFLV5XWSCGBJ-v7jDEBXysOY7oGEMum3lnrqUNeaqSNw5bpEIV-C_a63WqnyK'
      },
      {
        name: 'Green Apple',
        servingSize: '1 medium',
        calories: 95,
        protein: 0,
        carbs: 25,
        fat: 0,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbxN5Rf2DxFa8kYfx2a93TC7p7iJ5XmunI3wIVmQJBB0FylMWGqlalUfkCZyC4p3idnlCpxRg1T4TI78Fowt-_tu34ymsR0mQ5OpXj7LjkLON9pAeD8HaYpUU9icDK1-FreAhDR_zOnGEiEOxhCA3PEVTmdrkn-jwhItmaEVBzsAH4o-KTuiNgMGSTSCmKtEnKgAQmqKFvevrOHTpa5PX4pnkXX-YKE-aSSxhbKj4JDDnn3HwPAFL_q-5ntBZE7ar_FX5uPw5mNJeS'
      },
      {
        name: 'Almonds',
        servingSize: '1 handful (30g)',
        calories: 150,
        protein: 6,
        carbs: 6,
        fat: 13,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEPJLDOStQBfNuhA5mK45uyU3MXbeKNCSsW2KTYLqeOtoAzfnC1DR6jb9hiHIgfesEVrBkN4qL0SEsBsLFpYdysSWTFf_lXd6qGzfFG7xGMrSnx81m0wfmQgNvM4y89pIJwsnsCWMow3HWLfLd0pfiKIPhWKQMXLIV0S4nax2gYGF8jstKGuaOzejX3O4UDWxF2Ofn2OtrVv6FQ5XX5OHL2i1opRMVgF4hSrXHUb5lGaNtAPXzY3KlFHIMsU9EddtEv9ozl4k0GYZg'
      },
      {
        name: 'Quinoa Salad Bowl',
        servingSize: '1 bowl',
        calories: 420,
        protein: 15,
        carbs: 58,
        fat: 14,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4Os1hfF2sbDjRMVnGkkK1V9z3fCNRBmfMQscAKd5ZDWmjPIGU8RXuUqBhfcPzNj2xY_P0YEZL8I8A_uJbkhUnlfXRW7PXjOAMUKXNqXWFC7LtkWuCj4lM2zewzmLlIOalPhsP1OGeI5ZcWNtdY7YJYbWQpLifoGTRqW8_99e_lICc2pcioeCr7eYAhnp8d14VcBwPqJZKJ95GEdttz-xY5bL03JbzAEqFUaH7SMeMVavUCdIzj2yWpGTvfVe06B91I5Fe3IFXXN5i'
      },
      {
        name: 'Veggie Pizza Slice',
        servingSize: '1 slice',
        calories: 280,
        protein: 12,
        carbs: 36,
        fat: 10,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhBQtPkOwEXonJkANxIeLlhONWErJScbbrq-EpseEyoQKRsyCtANEcbbgE55SiNflx3vVQYYZfOPyfBByFl-936KBuDztXK8ToLUDAS7C5YCu27gyaqUso11GJJgyxSuK4F6l-P_li2pvCErZsRuoB08aIsS4x8YF7BUT_99-8cu7LuF3YxvegfiEPlZx8oVmHESNVXOaldBWCjdohLeF-j3ZHBWtvRZiBvRyuyFgLKicC1pzRk9dsLz2fPcbRehMYK5GW0UU3kbUY'
      },
      {
        name: 'Avocado Toast with Egg',
        servingSize: '1 slice (approx. 120g)',
        calories: 320,
        protein: 12,
        carbs: 24,
        fat: 18,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtFR4KWfwfAPaIgNDha8Rgbm4R9YIaGZ5mYB1FLWDu2-06drJyVq94YAgXGAL39JvpUvnB9p8egp9ONJb3zBJSuS0dWLHQfhnDi4cv_fufATfy8u1IVTqJo7hBFhYztAeinq7HaHONgXo9d2Mh9-GwUwae8LBctAXPBnZf3UHyqBNksYyVdbvXApb5ZRtAkkOwJg_T2G-0obQyx4WD8WoDDLFb76WvhTc_Gg6JkXFVN-4rG9FqlkFwavLPkpmQxdo7o6Oyqi0Bo7sv'
      },
      {
        name: 'Avocado Toast',
        servingSize: '1 slice (approx. 100g)',
        calories: 250,
        protein: 8,
        carbs: 22,
        fat: 15,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtFR4KWfwfAPaIgNDha8Rgbm4R9YIaGZ5mYB1FLWDu2-06drJyVq94YAgXGAL39JvpUvnB9p8egp9ONJb3zBJSuS0dWLHQfhnDi4cv_fufATfy8u1IVTqJo7hBFhYztAeinq7HaHONgXo9d2Mh9-GwUwae8LBctAXPBnZf3UHyqBNksYyVdbvXApb5ZRtAkkOwJg_T2G-0obQyx4WD8WoDDLFb76WvhTc_Gg6JkXFVN-4rG9FqlkFwavLPkpmQxdo7o6Oyqi0Bo7sv'
      },
      {
        name: 'Banana',
        servingSize: '1 medium (118g)',
        calories: 105,
        protein: 1,
        carbs: 27,
        fat: 0,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzpBX9dx1QOKST7s_4swBrrazhEE2hGiKOndhOt3A6pzDFs1ctW3TPeeesLpLa5AZHpcht7-dSBSYfp5wLTYIJscuLSB7LFV2AS9E_fuBo36XgKVooLai5x2nnkqRWH8TSdJg5xvZGON1WRIQyufnI6Qjm1XzgOjoWUPXj9y4lTpawKtQvosAA1hYZo09Cv5z5fqHxQ9YC6OoAOPYDboM_u9o1MdnCfLLMhnTfqWXOJe4kpNdCIvKh8JEcbCnhlqbIB9IGRLEHGoTJ'
      },
      {
        name: 'Grilled Chicken Salad',
        servingSize: '1 bowl (approx. 250g)',
        calories: 450,
        protein: 35,
        carbs: 18,
        fat: 22,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHvgMgRflTl6yIe_K9ZBlhsTmjPcmFhGHyeHdOAfaJwFgH8TIJkeMaDo6X8jBMwgy9ZuSE-RThX2ScMaVw2EK8gL55V6qvkitWoIAb2vHJJxPlva81ejp3X3cRkCB4h4xcCIxy9GbGCxyeBMSlSrsFAtd1em4JYwgzNGGka6aJMKs6Ng8aR1HQJdCEENB2Q9KN1MYS9KDU5q2QIeYdrhJL0D1qMic799w4k8enptkG7xEwEmpV9fYQHtzHGyvVfTWeH5ox5tm2-8Hn'
      },
      {
        name: 'Berry Oatmeal Bowl',
        servingSize: '1 bowl (approx. 200g)',
        calories: 320,
        protein: 10,
        carbs: 55,
        fat: 8,
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQRMAcM3iM17S6B1iSTaEWYmprjfFB0NppRj9M3SHbuPBFKqWseTMlZ-qBgis7psP8ooK20_Eb6gKa9Jx0d2WPZPntrzQY4up36hRZTxqYsdfzRuzSpuCqGOPhv7NM7rRGPrDtlZdEd6C0B-kiSukzXG_SqN-lgUiOFOnK_DabLC9_9hMvBZZyyA9pmRpndtha7m54T7t_ibnRA1y4yOVF4VdPmyGojI60nOEHGOuI79zoHG7Ybcq_1NLU9tjsKpVA5Bi6Haw7jfe1'
      }
    ];
    
    const results = foodDatabase.filter(food => 
      food.name.toLowerCase().includes(query)
    );
    
    res.json({ success: true, foods: results });
  } catch (error) {
    console.error('Error searching foods:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// GET /api/meals/:id - Get a specific meal
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const meal = await Meal.findOne({ 
      _id: req.params.id, 
      userId: req.userId 
    });

    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    res.json({ success: true, meal });
  } catch (error) {
    console.error('Error fetching meal:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// DELETE /api/meals/:id - Delete a meal
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const meal = await Meal.findOneAndDelete({ 
      _id: req.params.id, 
      userId: req.userId 
    });

    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    res.json({ success: true, message: 'Meal deleted successfully' });
  } catch (error) {
    console.error('Error deleting meal:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// PUT /api/meals/:id - Update a meal
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { mealType, foodName, servingSize, calories, protein, carbs, fat, imageUrl } = req.body;

    const meal = await Meal.findOne({ 
      _id: req.params.id, 
      userId: req.userId 
    });

    if (!meal) {
      return res.status(404).json({ message: 'Meal not found' });
    }

    // Update fields
    if (mealType) meal.mealType = mealType;
    if (foodName) meal.foodName = foodName;
    if (servingSize) meal.servingSize = servingSize;
    if (calories !== undefined) meal.calories = calories;
    if (protein !== undefined) meal.protein = protein;
    if (carbs !== undefined) meal.carbs = carbs;
    if (fat !== undefined) meal.fat = fat;
    if (imageUrl !== undefined) meal.imageUrl = imageUrl;

    await meal.save();

    res.json({ success: true, message: 'Meal updated successfully', meal });
  } catch (error) {
    console.error('Error updating meal:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ message: messages.join('. ') });
    }

    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
