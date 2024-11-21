require('dotenv').config(); // Để sử dụng các biến môi trường trong .env

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const configViewEngine = require("./configs/viewEngine");

const app = express();

// Kết nối đến MongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Kết nối MongoDB thành công'))
.catch((err) => console.error('Kết nối MongoDB thất bại:', err));

// Middleware
app.use(express.json()); // Để phân tích (parse) các yêu cầu với JSON payload
app.use(express.urlencoded({ extended: true })); // Để phân tích các yêu cầu với URL-encoded payload

// Thiết lập EJS làm view engine
configViewEngine(app);
app.use(express.static('public'));

// Định tuyến
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use('/', indexRouter);
app.use('/api', apiRouter);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});