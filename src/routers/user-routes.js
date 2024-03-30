const { registerUser, loginUser, forgotPassword, resetPassword, changeProfileName, getUser } = require('../controllers/user-controller');
const express = require('express');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/forgot-password', forgotPassword);
router.put('/reset-password', resetPassword);
router.patch('/profile-name/:id', changeProfileName);
router.get('/users', getUser);

module.exports = router;
