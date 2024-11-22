// middlewares/auth.js
exports.isAuthenticated = (req, res, next) => {
  if (req.session && req.session.loggedIn) {
    return next();
  } else {
    res.redirect('/login');
  }
};
