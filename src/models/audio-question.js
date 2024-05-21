const mongoose = require('mongoose');

const audioQuestionSchema = mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  question: {
    type: String,
  },
  audio: {
    type: String,
  },
  options: {
    type: Array,
  },
  correctIndex: {
    type: Number,
  },
});

audioQuestionSchema.set('toJSON', {
  virtuals: true,
});

exports.AudioQuestion = mongoose.model('AudioQuestion', audioQuestionSchema);
