var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Instead of repeating myself

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');
// var createRouter = require('./routes/create');
// var viewRouter = require('./routes/view');
// var updateRouter = require('./routes/update');
// var deleteRouter = require('./routes/delete');

// var routes = [
//   require('./routes/index'),
//   require('./routes/users'),
//   require('./routes/create'),
//   require('./routes/view'),
//   require('./routes/update'),
//   require('./routes/delete'),
// ]

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);
// app.use('/', routes[0]);
// app.use('/users', routes[1]);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// app listen on this port
app.listen(8080);
