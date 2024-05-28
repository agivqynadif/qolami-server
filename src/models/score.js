const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  scoreHijaiyahImage: {
    type: Number,
    default: null,
  },
  scoreHijaiyahVideo: {
    type: Number,
    default: null,
  },
  scoreHijaiyahAudio: {
    type: Number,
    default: null,
  },
  scoreFathahImage: {
    type: Number,
    default: null,
  },
  scoreFathahVideo: {
    type: Number,
    default: null,
  },
  scoreFathahAudio: {
    type: Number,
    default: null,
  },
  scoreKasrahImage: {
    type: Number,
    default: null,
  },
  scoreKasrahVideo: {
    type: Number,
    default: null,
  },
  scoreKasrahAudio: {
    type: Number,
    default: null,
  },
  scoreDhammahImage: {
    type: Number,
    default: null,
  },
  scoreDhammahVideo: {
    type: Number,
    default: null,
  },
  scoreDhammahAudio: {
    type: Number,
    default: null,
  },
});

scoreSchema.set('toJSON', {
  virtuals: true,
});

exports.Score = mongoose.model('Score', scoreSchema);
