const { insertVideoQuestion, getLatihanHijaiyahVideo, getLatihanFathahVideo, getLatihanKasrahVideo, getLatihanDhammahVideo } = require('../controllers/video-question-controller');
const express = require('express');
const router = express.Router();

router.post('/videos-practice/insert-question', insertVideoQuestion);
router.get('/videos-practice/hijaiyah', getLatihanHijaiyahVideo);
router.get('/videos-practice/fathah', getLatihanFathahVideo);
router.get('/videos-practice/kasrah', getLatihanKasrahVideo);
router.get('/videos-practice/dhammah', getLatihanDhammahVideo);

module.exports = router;
