// middlewares/attachCsrfToken.js
function attachCsrfToken(req, res, next) {
  res.locals.csrfToken = req.csrfToken();
  next();
}

module.exports = attachCsrfToken;
