exports.isLoggedIn = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/'));

exports.isNotLoggedIn = (req, res, next) =>
  !req.isAuthenticated() ? next() : res.redirect('/profile');

exports.catchError = controller => (req, res, next) => controller(req, res).catch(next());
