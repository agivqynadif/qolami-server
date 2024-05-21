const { insertAudioQuestion, getLatihanFathahAudio } = require('../controllers/audio-question-controller');
const express = require('express');
const router = express.Router();

router.post('/audios-practice/insert-question', insertAudioQuestion);
router.get('/audios-practice/fathah', getLatihanFathahAudio);

module.exports = router;
