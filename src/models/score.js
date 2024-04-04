const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  scoreHijaiyah: {
    scoreImage: {
      type: Number,
      default: null,
    },
    scoreVideo: {
      type: Number,
      default: null,
    },
    scoreAudio: {
      type: Number,
      default: null,
    },
  },
  scoreFathah: {
    scoreImage: {
      type: Number,
      default: null,
    },
    scoreVideo: {
      type: Number,
      default: null,
    },
    scoreAudio: {
      type: Number,
      default: null,
    },
  },
  scoreKasrah: {
    scoreImage: {
      type: Number,
      default: null,
    },
    scoreVideo: {
      type: Number,
      default: null,
    },
    scoreAudio: {
      type: Number,
      default: null,
    },
  },
  scoreDhammah: {
    scoreImage: {
      type: Number,
      default: null,
    },
    scoreVideo: {
      type: Number,
      default: null,
    },
    scoreAudio: {
      type: Number,
      default: null,
    },
  },
});

exports.Score = mongoose.model('Score', scoreSchema);
