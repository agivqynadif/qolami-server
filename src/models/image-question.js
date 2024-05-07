const mongoose = require('mongoose');

const imageQuestionSchema = mongoose.Schema({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  question: {
    type: String,
  },
  options: {
    type: Array,
  },
  correctIndex: {
    type: Number,
  },
});

imageQuestionSchema.set('toJSON', {
  virtuals: true,
});

exports.ImageQuestion = mongoose.model('ImageQuestion', imageQuestionSchema);
