// controllers/authController.js
const dotenv = require('dotenv');
dotenv.config();

exports.getLogin = (req, res) => {
  res.render('login', {
    showSidebar: false,
    showNavbar: false,
    showFooter: true,
    showUtilities: false,
    containerFluid: false,
    title: 'Đăng nhập',
    csrfToken: req.csrfToken(),
    error: null,
  });
};

exports.postLogin = (req, res) => {
  const password = req.body.password;

  if (password === process.env.APP_PASSWORD) {
    req.session.loggedIn = true;
    req.flash('success', 'Đăng nhập thành công');
    res.redirect('/');
  } else {
    req.flash('error', 'Mật khẩu không đúng');
    res.redirect('/login');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
