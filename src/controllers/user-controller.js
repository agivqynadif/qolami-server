const { User } = require('../models/user');
const { Score } = require('../models/score');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bcryptSalt = process.env.BCRYPT_SALT;
const express = require('express');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, profileName } = req.body;

  if (username.includes(' ')) {
    return res.status(400).json({ message: 'Username tidak boleh menggunakan spasi!' });
  }

  if (!username || !password || !profileName) {
    return res.status(400).json({ message: 'Username, password, dan profile name tidak boleh kosong!' });
  }

  let user = new User({
    username: username,
    password: bcrypt.hashSync(password, Number(bcryptSalt)),
    profileName: profileName,
  });

  try {
    user = await user.save();

    let score = new Score({
      userId: user._id,
      scoreHijaiyah: null,
      scoreFathah: null,
      scoreKasrah: null,
      scoreDhammah: null,
    });
    await Score.create(score);

    res.status(200).json({
      message: 'Registrasi berhasil!',
      data: user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Username tidak ditemukan!' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(401).json({ message: 'Password salah!' });
    }

    const payload = {
      _id: user._id,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.SECRET);

    res.status(200).json({
      message: 'Login berhasil!',
      data: {
        token: token,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
});

router.put('/forgot-password', async (req, res) => {
  const { username, newPassword, repeatNewPassword } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'Username tidak ditemukan!' });
    }

    if (newPassword !== repeatNewPassword) {
      return res.status(401).json({ message: 'Password tidak sama!' });
    }

    user = await User.updateOne({ username }, { $set: { password: bcrypt.hashSync(newPassword, Number(bcryptSalt)) } });

    res.status(200).json({ message: 'Password berhasil diubah!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
});

router.put('/reset-password', async (req, res) => {
  const { username, newPassword, repeatNewPassword } = req.body;

  try {
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'Username tidak ditemukan!' });
    }

    if (newPassword !== repeatNewPassword) {
      return res.status(401).json({ error: 'Password tidak sama!' });
    }

    user = await User.updateOne({ username }, { $set: { password: bcrypt.hashSync(newPassword, Number(bcryptSalt)) } });

    res.status(200).json({ message: 'Password berhasil diubah!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Terjadi error pada server' });
  }
});

router.put('/profile-name/:id', async (req, res) => {
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
});

router.get('/users', async (req, res) => {
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
});

module.exports = router;
