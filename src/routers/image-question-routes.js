const { insertImageQuestion, getLatihanHijaiyahImage, getLatihanFathahImage, getLatihanKasrahImage, getLatihanDhammahImage } = require('../controllers/image-question-controller');
const express = require('express');
const router = express.Router();

router.post('/images-practice/insert-question', insertImageQuestion);
router.get('/images-practice/hijaiyah', getLatihanHijaiyahImage);
router.get('/images-practice/fathah', getLatihanFathahImage);
router.get('/images-practice/kasrah', getLatihanKasrahImage);
router.get('/images-practice/dhammah', getLatihanDhammahImage);

module.exports = router;
