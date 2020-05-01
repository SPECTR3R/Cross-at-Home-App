exports.isLoggedIn = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/#beginHere'));

exports.isNotLoggedIn = (req, res, next) => !req.isAuthenticated() ? next() : res.redirect('/profile');

