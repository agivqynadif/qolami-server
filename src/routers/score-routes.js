const { updateScore, getScore } = require('../controllers/score-controller');
const express = require('express');
const router = express.Router();

router.patch('/score/:userId', updateScore);
router.get('/score/:userId', getScore);

module.exports = router;
