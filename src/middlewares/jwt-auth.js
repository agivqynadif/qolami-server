const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

exports.authJwt = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Token tidak tersedia!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Gagal untuk authentikasi token!' });
    }

    try {
      let user = await User.findById(decoded.id);
      if (!user) {
        res.status(404).json({ error: 'User tidak ditemukan!' });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
};
