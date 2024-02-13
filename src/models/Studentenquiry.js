const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  studentName: {type: String, required: true},
  email: {type: String, required: true},
  message: {type: String, required: true},
  date: {type: Date, default: Date.now},
  status: {type: String, enum: ['pending', 'resolved', 'closed'], default: 'pending'},
  followUp: {type: Boolean, default: false},
},{ timestamps: true });

module.exports = mongoose.model('stuEnquiry', enquirySchema);
