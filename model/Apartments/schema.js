const mongoose = require('mongoose');
const { Schema } = mongoose;

module.exports = new Schema({
  rooms: {
    type: Number,
    min: 0,
    required: true,
  },
  name: {
    type: String,
    minLength: 1,
    maxLength: 99,
    required: true,
  },
  price: {
    type: Number,
    min: 0,
    required: true
  },
  description: {
    type: String,
    minLength: 1,
    maxLength: 999,
    required: true,
  }
}, { timestamps: true });