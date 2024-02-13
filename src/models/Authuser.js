const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String,
    enum: ['admin', 'user'] // Specify allowed values for the role field
  }
});

module.exports = mongoose.model('new', userSchema);
