const mongoose = require('mongoose');
const { User } = require('./user');

const scoreSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  scoreHijaiyah: {
    type: Number,
    default: null,
  },
  scoreFathah: {
    type: Number,
    default: null,
  },
  scoreKasrah: {
    type: Number,
    default: null,
  },
  scoreDhammah: {
    type: Number,
    default: null,
  },
});

exports.Score = mongoose.model('Score', scoreSchema);
