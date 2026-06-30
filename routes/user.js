const express = require('express');
const router = express.Router();
const {handlePostUrl,handleGetUrl, handleRedirectUrl, handleAllUrls} = require('../controllers');

router.route('/').post(handlePostUrl).get(handleGetUrl);
router.route('/:shid').get(handleRedirectUrl);

// For Admin & Tesing use Only
router.get('/all', handleAllUrls);
module.exports = router;