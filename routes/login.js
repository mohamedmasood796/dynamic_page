var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('login');
  if( req.session.loggedIn ) {
    res.redirect( "/home" );
  } else {
    res.render( 'login',{"loginErr":req.session.loginErr} );
    req.session.loginErr=false;
  }
});



module.exports = router;

