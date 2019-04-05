var express = require('express');
var router = express.Router();
var users = require('../db.json').users;
var request = require('request');

// Getting the register page

router.get('/', function (req, res, next) {
    res.render('register', {
        title: 'register',
        thisError: req.app.locals.regError,
    });
});

// Create a new user
router.post('/', function(req, res, nest) {
    // Used username
    var usernameUsed;

    // Sets id to last id in users +1
    var id = users[users.length-1].id;
        id= Number(id)+1;

    // To check if the user name has been already used
    var logUser = req.body.username;

    // Checking through the users for used names
    for(var i = 0; i<users.length; i++) {
        // Check if username already exists
        if (logUser == users[i].username) {
            usernameUsed = true;
            console.log(usernameUsed);
        }
    }

    // if user name is not available, create new membership account
    if (usernameUsed != true) {
        request({
            url: 'http://localhost:8080/users',
            method: 'posts',
            form: {
                id: id,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            },
            function(error, response, body) {
                res.render('register', {message: 'Account created!'});
            }
        });
        req.app.locals.regError = 'Registration successful!'

        // Goes to sign in page after register
        res.redirect('/sign-in');
    }
    // if user is already used (user name taken)
    else if (usernameUsed == true) {
        req.app.locals.regError = 'Username already exists';
    }
    // Redirect to sign in page
    res.redirect('/sign-in');
})

module.exports = router;