const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
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

const User = new mongoose.model('User', userSchema);

module.exports = User;