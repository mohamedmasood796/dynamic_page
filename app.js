var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const bodyParser = require("body-parser");
//npm install --save body.parser
var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var homeRouter = require('./routes/home');
const logoutRouter = require( './routes/logout' );
var hbs = require('express-handlebars')
var app = express();
var session = require('express-session')
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layout/' }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "Key",
    saveUninitialized : true,
    cookie: {maxAge: 100000,},
    resave : false,
  }
))
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/home', homeRouter);
app.use( '/logout', logoutRouter );


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {  
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
