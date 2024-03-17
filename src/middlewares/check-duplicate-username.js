const { User } = require('../models/user');

exports.checkDuplicateUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(400).send({ error: 'Username sudah digunakan!' });
    }
    next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
