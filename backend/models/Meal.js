import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  mealType: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
    required: [true, 'Meal type is required']
  },
  foodName: {
    type: String,
    required: [true, 'Food name is required'],
    trim: true
  },
  servingSize: {
    type: String,
    default: '1 serving'
  },
  calories: {
    type: Number,
    required: [true, 'Calories are required'],
    min: [0, 'Calories must be positive']
  },
  protein: {
    type: Number,
    default: 0,
    min: [0, 'Protein must be positive']
  },
  carbs: {
    type: Number,
    default: 0,
    min: [0, 'Carbs must be positive']
  },
  fat: {
    type: Number,
    default: 0,
    min: [0, 'Fat must be positive']
  },
  imageUrl: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient querying by user and date
mealSchema.index({ userId: 1, date: -1 });

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;
