require('dotenv').config();
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const dashboardController = require('../controllers/dashboardController');
const apiController = require('../controllers/apiController');

const csrfMiddleware = require('../middlewares/csrfMiddleware');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Trang chủ
router.get('/', isAuthenticated, dashboardController.getDashboard);

// API
router.get('/api-keys', isAuthenticated, apiController.getApiKeysPage);
router.post('/toggle-api-key', isAuthenticated, apiController.toggleApiKey);

// Trang đăng nhập
router.get('/login', csrfMiddleware, authController.getLogin);
router.post('/login', csrfMiddleware, authController.postLogin);

// Xử lý đăng xuất
router.get('/logout', isAuthenticated, authController.logout);

module.exports = router;
