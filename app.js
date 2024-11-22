// app.js
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const configViewEngine = require('./configs/viewEngine');
const csrfMiddleware = require('./middlewares/csrfMiddleware');
const attachCsrfToken = require('./middlewares/attachCsrfToken');

const mainRoute = require('./routes/mainRoute');
const apiRouter = require('./routes/apiRoute');

const app = express();

// Kết nối đến MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Kết nối MongoDB thành công'))
  .catch((err) => console.error('Kết nối MongoDB thất bại:', err));

// Middleware phân tích yêu cầu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware phiên làm việc (session)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'your-session-secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 ngày
  })
);

// Middleware flash messages
app.use(flash());

// Middleware CSRF
app.use(csrfMiddleware);

// Middleware thiết lập res.locals.csrfToken
app.use(attachCsrfToken);

// Middleware truyền flash messages vào tất cả các view
app.use(function (req, res, next) {
  res.locals.successMessages = req.flash('success');
  res.locals.errorMessages = req.flash('error');
  next();
});

// Thiết lập EJS làm view engine
configViewEngine(app);

// Thiết lập thư mục chứa tài nguyên tĩnh
app.use(express.static('public'));

// Định tuyến
app.use('/', mainRoute);
app.use('/api', apiRouter);

// Middleware xử lý lỗi chung
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('errorPage', { error: err });
});

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
