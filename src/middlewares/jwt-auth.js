const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

exports.authJwt = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'Akses ditolak!' });
  }

  try {
    const verify = jwt.verify(token, process.env.SECRET);
    req.user = verify;

    if (req.params.userId && req.params.userId !== req.user.userId) {
      return res.status(403).json({ error: 'Token tidak valid!' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ error: 'Terjadi error pada server' });
  }
};
