const ApiKey = require('../models/ApiKey');

exports.toggleApiKey = async (req, res) => {
  const keyId = req.body.keyId;

  try {
    // Tìm API key theo ID
    const apiKey = await ApiKey.findById(keyId);
    if (!apiKey) {
      return res.json({ success: false, message: 'API Key không tồn tại.' });
    }

    // Đảo ngược trạng thái kích hoạt
    apiKey.enabled = !apiKey.enabled;
    await apiKey.save();

    // Gửi phản hồi về client
    res.json({
      success: true,
      enabled: apiKey.enabled,
      message: apiKey.enabled ? 'API Key đã được kích hoạt.' : 'API Key đã bị vô hiệu hóa.',
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: 'Có lỗi xảy ra khi cập nhật API Key.' });
  }
};