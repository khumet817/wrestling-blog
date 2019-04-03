var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // var data = {
  //   title: 'wrestleblog',
  //   posts: Post,
  //   message: false
  // };

  // res.render('index', data);
});


module.exports = router;
// This is our index