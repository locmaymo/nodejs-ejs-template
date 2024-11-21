// routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Route để bật/tắt API key
router.post('/toggle-api-key', apiController.toggleApiKey);

module.exports = router;