const mongoose = require('mongoose');

const videoQuestionSchema = mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  question: {
    type: String,
  },
  videoId: {
    type: String,
  },
  options: {
    type: Array,
  },
  correctIndex: {
    type: Number,
  },
});

videoQuestionSchema.set('toJSON', {
  virtuals: true,
});

exports.VideoQuestion = mongoose.model('VideoQuestion', videoQuestionSchema);
