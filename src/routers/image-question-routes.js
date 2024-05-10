const { insertImageQuestion, getLatihanHijaiyah, getLatihanFathah, getLatihanKasrah, getLatihanDhammah } = require('../controllers/image-question-controller');
const express = require('express');
const router = express.Router();

router.post('/images/insert-question', insertImageQuestion);
router.get('/images-practice/hijaiyah', getLatihanHijaiyah);
router.get('/images-practice/fathah', getLatihanFathah);
router.get('/images-practice/kasrah', getLatihanKasrah);
router.get('/images-practice/dhammah', getLatihanDhammah);

module.exports = router;
