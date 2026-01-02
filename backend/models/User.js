import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address (e.g., name@example.com)']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  age: {
    type: Number,
    min: [1, 'Age must be positive'],
    max: [150, 'Age must be valid']
  },
  height: {
    type: Number,
    min: [50, 'Height must be at least 50cm'],
    max: [300, 'Height must be valid']
  },
  weight: {
    type: Number,
    min: [20, 'Weight must be at least 20kg'],
    max: [500, 'Weight must be valid']
  },
  goalWeight: {
    type: Number,
    min: [20, 'Goal weight must be at least 20kg'],
    max: [500, 'Goal weight must be valid']
  },
  primaryGoal: {
    type: String,
    enum: ['Lose Weight', 'Gain Muscle', 'Maintain Weight'],
    default: 'Maintain Weight'
  },
  dietType: {
    type: [String],
    default: []
  },
  allergies: {
    type: [String],
    default: []
  },
  dailyCalorieGoal: {
    type: Number,
    default: 2000
  },
  membershipType: {
    type: String,
    enum: ['Free', 'Pro', 'Premium'],
    default: 'Free'
  },
  profileImage: {
    type: String,
    default: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFWkznehDJ1Ou3JdO0zGezKQW44ErAzKUmtowaPLp1ot_-U6STNfAkln30UVyzOx2FdKK56vxaQbpWybx8cr7zcplwKfVuaOCGwwAEE0Ua-nocTuRhLXRsJKw88p9U6dsUyYXPqehapZk4VNgd4M1P4lrzcf_s-uyFedkyrFkzIhuAzYUYihw0e1TFUqGBbxvik9g-QKcnAVmZ_jWJSfD6MHZrHXLz8g5Ts57v7nia7sreWi9IftV0Yg_DjegCfNffMg22ci_uNz3h'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw error;
  }
};

export default mongoose.model('User', userSchema);
