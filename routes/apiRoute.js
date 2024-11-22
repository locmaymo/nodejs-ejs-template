// routes/api.js
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Route để bật/tắt API key
router.post('/toggle-api-key', isAuthenticated, apiController.toggleApiKey);

module.exports = router;
