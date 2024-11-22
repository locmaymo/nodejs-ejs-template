const mongoose = require('mongoose');

const apiKeySchema = new mongoose.Schema({
  name: String,
  key: String,
  enabled: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ApiKey', apiKeySchema);
