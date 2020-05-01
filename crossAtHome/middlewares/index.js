exports.isLoggedIn = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/'));

exports.isNotLoggedIn = (req, res, next) => !req.isAuthenticated() ? next() : res.redirect('/profile');

