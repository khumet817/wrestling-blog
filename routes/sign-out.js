// Create required variables
var express = require('express');
var router = express.Router();
var request = require(request);

// GET the sign-out page

router.get('/', function (req, res, next) {
    // Set default
    req.app.locals.login = false;
    req.app.locals.user = '';
    req.app.locals.signIn = '';
    req.app.locals.regError = '';

    // Create cookie
    res.clearCookie('userId');
    console.log(req.users.cookies.userId);

    // redirect to home page
    res.redirect('/');
});

module.exports = router;