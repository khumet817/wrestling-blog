// Create required variables
var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require(request);

// Getting the sign-in page

router.get('/', function (req, res, next) {
    res.render('sign-in', {
        title: 'sign-in',
        signInError: req.app.locals.signError,
    });
});

// Need to sign in
router.post('/', function (req, res, nest) {
    // Get info from body
    var logUser = req.body.username;
    var logPassword = req.body.password;
    
    // To check
    for(var i = 0; i < users.length; i++) {
        // If user and password are correct
        if((users[i].username == logUser || users[i].email == logUser)
        && users[i].password == logPassword) {
            // Create a cookie
            res.cookie('userId', users[i].id);
            
            // Sets logUser into correct username
            logUser = users[i].username;
            console.log(req.cookies);

            // Sets correct sign-in variables
            req.app.locals.user = logUser;
            req.app.locals.userIndex = i;
            req.app.locals.signError = 'Log In successful!';

            // It must redirect to the home page after sign in
            res.redirect('/');
        }
    };
    // Check if user signed in correctly

    if (req.app.locals.user != logUser) {
        // If the password is incorrect
        req.app.locals.signError = 'Username or Password is Incorrect'
    };

    // Redirect to sign-in page
    res.redirect('/sign-in');
});

module.exports = router;