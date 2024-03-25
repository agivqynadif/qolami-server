const userController = require('../controllers/user-controller');
const scoreController = require('../controllers/score-controller');
const verifyRegister = require('../middlewares/check-duplicate-username');
const verifyToken = require('../middlewares/jwt-auth');

module.exports = function (app) {
  app.post(`${process.env.API_URL}/auth/register`, verifyRegister.checkDuplicateUsername, userController.registerUser);
  app.post(`${process.env.API_URL}/auth/login`, userController.loginUser);
  app.post(`${process.env.API_URL}/auth/forgot-password`, userController.forgotPassword);

  app.put(`${process.env.API_URL}/user/reset-password`, verifyToken.authJwt, userController.resetPassword);
  app.put(`${process.env.API_URL}/user/profile-name/:id`, userController.updateProfileName);
  app.patch(`${process.env.API_URL}/user/score/:userId`, scoreController.updateScore);
  app.get(`${process.env.API_URL}/users`, verifyToken.authJwt, userController.getUserData);
};
