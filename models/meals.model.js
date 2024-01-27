const mongoose = require('mongoose');

const mealSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  year: {
    type: Number
  },
  month: {
    type: String
  },
  d1: {
    type: String
  },
  d2: {
    type: String
  },
  d3: {
    type: String
  },
  d4: {
    type: String
  },
  d5: {
    type: String
  },
  d6: {
    type: String
  },
  d7: {
    type: String
  },
  d8: {
    type: String
  },
  d9: {
    type: String
  },
  d10: {
    type: String
  },
  d11: {
    type: String
  },
  d12: {
    type: String
  },
  d13: {
    type: String
  },
  d14: {
    type: String
  },
  d15: {
    type: String
  },
  d16: {
    type: String
  },
  d17: {
    type: String
  },
  d18: {
    type: String
  },
  d19: {
    type: String
  },
  d20: {
    type: String
  },
  d21: {
    type: String
  },
  d22: {
    type: String
  },
  d23: {
    type: String
  },
  d24: {
    type: String
  },
  d25: {
    type: String
  },
  d26: {
    type: String
  },
  d27: {
    type: String
  },
  d28: {
    type: String
  },
  d29: {
    type: String
  },
  d30: {
    type: String
  },
  d31: {
    type: String
  },
  g1: {
    type: String
  },
  g2: {
    type: String
  },
  g3: {
    type: String
  },
  g4: {
    type: String
  },
  g5: {
    type: String
  },
  g6: {
    type: String
  },
  g7: {
    type: String
  },
  g8: {
    type: String
  },
  g9: {
    type: String
  },
  g10: {
    type: String
  },
  g11: {
    type: String
  },
  g12: {
    type: String
  },
  g13: {
    type: String
  },
  g14: {
    type: String
  },
  g15: {
    type: String
  },
  g16: {
    type: String
  },
  g17: {
    type: String
  },
  g18: {
    type: String
  },
  g19: {
    type: String
  },
  g20: {
    type: String
  },
  g21: {
    type: String
  },
  g22: {
    type: String
  },
  g23: {
    type: String
  },
  g24: {
    type: String
  },
  g25: {
    type: String
  },
  g26: {
    type: String
  },
  g27: {
    type: String
  },
  g28: {
    type: String
  },
  g29: {
    type: String
  },
  g30: {
    type: String
  },
  g31: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 1
  },
  role: {
    type: Number,
    default: 3
  },
  created_at: {
    type: Date,
    default: Date.now
  },
});

const Meal = new mongoose.model('User', mealSchema);

module.exports = Meal;