const userController = require('../controllers/user-controller');
const verifyRegister = require('../middlewares/check-duplicate-username');
const verifyToken = require('../middlewares/jwt-auth');

module.exports = function (app) {
  app.post(`${process.env.API_URL}/auth/register`, verifyRegister.checkDuplicateUsername, userController.registerUser);
  app.post(`${process.env.API_URL}/auth/login`, userController.loginUser);
  app.post(`${process.env.API_URL}/auth/reset-password`, userController.resetPassword);

  app.put(`${process.env.API_URL}/user/profile-name/:id`, userController.updateProfileName);
  app.get(`${process.env.API_URL}/users`, verifyToken.authJwt, userController.getUserData);
};
