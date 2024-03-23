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
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'Username tidak ditemukan!' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ error: 'Password salah!' });
    }

    const payload = {
      _id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.SECRET);

    res.status(200).json({
      message: 'Login berhasil!',
      data: {
        id: user._id,
        username: user.username,
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};

exports.resetPassword = async (req, res) => {
  const { username, newPassword } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'Username tidak ditemukan!' });
    }

    user = await User.updateOne({ username }, { $set: { password: bcrypt.hashSync(newPassword, 8) } });

    res.status(200).json({ message: 'Password berhasil diubah!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};

exports.updateProfileName = async (req, res) => {
  const id = req.params.id;
  const profileName = req.body;
  const options = { new: true };
  try {
    const user = await User.findByIdAndUpdate(id, profileName, options);
    res.status(200).json({
      message: 'Profie name berhasil diupdate!',
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};

exports.getUserData = async (req, res) => {
  try {
    const user = await User.find({});
    res.json({
      message: 'Berhasil mendapatkan data user!',
      data: {
        user,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
};
