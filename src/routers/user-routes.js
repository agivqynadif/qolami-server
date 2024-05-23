const { registerUser, loginUser, forgotPassword, resetPassword, changeProfileName, getUserById, getUser } = require('../controllers/user-controller');
const verifyRegister = require('../middlewares/check-duplicate-username');
const express = require('express');
const router = express.Router();

router.post('/register', verifyRegister.checkDuplicateUsername, registerUser);
router.post('/login', loginUser);
router.put('/forgot-password', forgotPassword);
router.put('/reset-password/:id', resetPassword);
router.patch('/profile-name/:id', changeProfileName);
router.get('/:id', getUserById);
router.get('/users', getUser);

module.exports = router;
