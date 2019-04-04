var express = require('express');
var router = express.Router();
var Posts = require('../db.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { 
  //   title: 'WrestleBlog',
  //   name: "Tabile",
  //   blogs: bd
  // });

  var data = {
    title: 'WrestleBlog',
    blog: Posts,
    message: false
  };

  res.render('index', data);
});


module.exports = router;
// This is our index