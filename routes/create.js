//  create //

var express = require('express');
var router = express.Router();
var Posts = require('../db.json');
var request = require(request);

// Get create page

router.get('/', function (req, res, next) {
    res.render('create', {
        title: 'create',
    });
});

//  post a create request

router.post('/', function (req, res, nect) {
    var posts = Posts.posts;
    // get the id of the last post
    var id = Posts[Posts.length - 1].id;

    // GEt id  from the last post
    id = Number(id) + 1;

    // Getting the date
    var newDate = new Date();

    // declearing date formate
    var date = '${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear}';

    // get content/description
    var content = req.body.content;

    // text is used for description
    // turns the object to a string
    var text = JSON.stringify(content);

    // description variable
    var description;
    description = text.charAt(1);

    // Gets the character or char from the string
    for (var i = 2; i < 200; i++) {
        description += text.charAt(i);
    }

    //  post request
    request({
        url: 'localhost:3000',
        method: Posts,
        form: {
            id: id,
            date: date,
            title: req.body.title,
            image: req.body.image,
            description: description + '...</p>',
            content: content,
            author: req.app.locals.user,
        },
        function(error, response, body) {
            res.render('index', {
                message: 'successfully added'
            });
        }
    })
    //  redirect to homepage after your create post
    res.redirect('..');
    module.exports = router;
})