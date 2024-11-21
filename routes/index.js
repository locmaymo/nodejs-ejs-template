// routes/index.js
const express = require('express');
const router = express.Router();
const ApiKey = require('../models/ApiKey');

// Trang chủ
router.get('/', async (req, res) => {
  try {
    const apiKeys = await ApiKey.find();
    res.render('index', { title: 'Trang chủ', apiKeys: apiKeys });
  } catch (error) {
    console.error(error);
    res.send('Có lỗi xảy ra.');
  }
});

module.exports = router;