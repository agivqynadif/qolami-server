const { default: mongoose } = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
    default: 'Ilhamian',
  },
});

exports.User = mongoose.model('User', userSchema);
