import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  workoutType: {
    type: String,
    required: true,
    enum: ['Cardio', 'Strength', 'Yoga', 'Sports', 'Other']
  },
  duration: {
    type: Number,
    required: true,
    min: 0
  },
  caloriesBurned: {
    type: Number,
    required: true,
    min: 0
  },
  notes: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Index for efficient querying
workoutSchema.index({ userId: 1, date: -1 });

export default mongoose.model('Workout', workoutSchema);
