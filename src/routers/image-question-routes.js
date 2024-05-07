const { insertImageQuestion } = require('../controllers/image-question-controller');
const express = require('express');
const router = express.Router();

router.post('/images/insert-question', insertImageQuestion);

module.exports = router;
