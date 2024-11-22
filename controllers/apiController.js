// controllers/apiController.js
const ApiKey = require('../models/ApiKey');

exports.getApiKeysPage = async (req, res, next) => {
  try {
    const apiKeys = await ApiKey.find().sort({ createdAt: 'desc' });

    res.render('apiKey', { title: 'Quản lý API Key', apiKeys });
  } catch (error) {
    req.flash('error', 'Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    next(error); // Sử dụng middleware xử lý lỗi chung
  }
};

exports.toggleApiKey = async (req, res, next) => {
  const keyId = req.body.keyId;

  try {
    const apiKey = await ApiKey.findById(keyId);
    if (!apiKey) {
      return res
        .status(404)
        .json({ success: false, message: 'API Key không tồn tại.' });
    }

    apiKey.enabled = !apiKey.enabled;
    await apiKey.save();
    res.json({
      success: true,
      enabled: apiKey.enabled,
      message: apiKey.enabled
        ? 'API Key đã được kích hoạt.'
        : 'API Key đã bị vô hiệu hóa.',
    });
  } catch (error) {
    req.flash('error', 'Đã có lỗi xảy ra. Vui lòng thử lại sau.');
    next(error); // Sử dụng middleware xử lý lỗi chung
  }
};
