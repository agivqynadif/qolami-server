const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  scoreHijaiyah: {
    scoreImage: {
      type: Number,
      default: 0,
    },
    scoreVideo: {
      type: Number,
      default: 0,
    },
    scoreAudio: {
      type: Number,
      default: 0,
    },
  },
  scoreFathah: {
    scoreImage: {
      type: Number,
      default: 0,
    },
    scoreVideo: {
      type: Number,
      default: 0,
    },
    scoreAudio: {
      type: Number,
      default: 0,
    },
  },
  scoreKasrah: {
    scoreImage: {
      type: Number,
      default: 0,
    },
    scoreVideo: {
      type: Number,
      default: 0,
    },
    scoreAudio: {
      type: Number,
      default: 0,
    },
  },
  scoreDhammah: {
    scoreImage: {
      type: Number,
      default: 0,
    },
    scoreVideo: {
      type: Number,
      default: 0,
    },
    scoreAudio: {
      type: Number,
      default: 0,
    },
  },
});

scoreSchema.set('toJSON', {
  virtuals: true,
});

exports.Score = mongoose.model('Score', scoreSchema);
