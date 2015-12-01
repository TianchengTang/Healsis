var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var mongoose = require('mongoose');

var app = express();

// a convenient variable to refer to the HTML directory
var html_dir = './html/';
// routes to serve the static HTML files
//route names need not match the file name
app.get('/index', function(req, res) {
    res.sendfile(html_dir + 'index.html');
});
app.get('/dashboard', function(req, res) {
    res.sendfile(html_dir + 'dashboard.html');
});


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'html')));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
  //mongoose.connect('mongodb://??.??.??.?/serverName');
}

//mongoose.model('users', {name: String});

/* app.get('/users', function(req, res) {
  mongoose.model('users').find(function(err, users) {
    res.send(users);
  });
}); */

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
