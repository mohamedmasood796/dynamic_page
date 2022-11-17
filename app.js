var createError = require('http-errors');
var express = require('express'); 
var path = require('path'); //modu
var cookieParser = require('cookie-parser');//pack
var logger = require('morgan'); //de

const bodyParser = require("body-parser");
//npm install --save body.parser
const nocache = require("nocache");

var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');

var hbs = require('express-handlebars') //
var session = require('express-session')

var app = express();

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


app.use(nocache());
app.use(session({
    secret: "Key",
    saveUninitialized : true,
    cookie: {maxAge: 100000,},
    resave : false,
  }
))


// app.use(function (req,res,next){
//     res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
//     next();
// })
app.use('/', loginRouter);
app.use('/home', homeRouter);



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
