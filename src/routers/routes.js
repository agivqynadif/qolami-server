const userController = require('../controllers/user-controller');
const verifyRegister = require('../middlewares/check-duplicate-username');
const verifyToken = require('../middlewares/jwt-auth');

module.exports = function (app) {
  app.post(`${process.env.API_URL}/auth/register`, verifyRegister.checkDuplicateUsername, userController.registerUser);
  app.post(`${process.env.API_URL}/auth/login`, userController.loginUser);
  app.post(`${process.env.API_URL}/auth/reset-password`, userController.resetPassword);
};
