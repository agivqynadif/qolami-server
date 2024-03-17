const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyToken = require('../middlewares/jwt-auth');

exports.registerUser = async (req, res) => {
  let user = new User({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    profileName: req.body.profileName,
  });
  try {
    user = await user.save();
    res.status(200).json({
      message: 'Registrasi berhasil!',
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan!' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ error: 'Password salah!' });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);

    res.json({
      message: 'Login berhasil!',
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
