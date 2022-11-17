var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if( req.session.loggedIn ) {
    res.redirect( "/home" );
  } else {
    res.render( 'login',{"loginErr":req.session.loginErr} );
    req.session.loginErr=false;
  }
});

module.exports = router;

