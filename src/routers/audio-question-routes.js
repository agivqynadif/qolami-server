const { insertAudioQuestion, getLatihanHijaiyahAudio, getLatihanFathahAudio, getLatihanKasrahAudio, getLatihanDhammahAudio } = require('../controllers/audio-question-controller');
const express = require('express');
const router = express.Router();

router.post('/audios-practice/insert-question', insertAudioQuestion);
router.get('/audios-practice/hijaiyah', getLatihanHijaiyahAudio);
router.get('/audios-practice/fathah', getLatihanFathahAudio);
router.get('/audios-practice/kasrah', getLatihanKasrahAudio);
router.get('/audios-practice/dhammah', getLatihanDhammahAudio);

module.exports = router;
