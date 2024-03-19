const { User } = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const verifyToken = require('../middlewares/jwt-auth');

exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (username.includes(' ')) {
    return res.status(400).json({ error: 'Username tidak boleh menggunakan spasi!' });
  }

  let user = new User({
    username: username,
    password: bcrypt.hashSync(password, 8),
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

exports.resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'User tidak ditemukan!' });
    }

    user = await User.updateOne({ username }, { $set: { password: bcrypt.hashSync(newPassword, 8) } });

    res.json({ message: 'Password berhasil diubah!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
