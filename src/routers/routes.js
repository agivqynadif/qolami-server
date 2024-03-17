const usersController = require('../controllers/users-controller');
const verifyRegister = require('../middlewares/check-duplicate-username');

module.exports = function (app) {
  app.post(`${process.env.API_URL}/auth/register`, verifyRegister.checkDuplicateUsername, usersController.registerUser);
  app.post(`${process.env.API_URL}/auth/login`, usersController.loginUser);
};
