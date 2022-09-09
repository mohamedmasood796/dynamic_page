var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // const email="masood@gmail.com"
  // const password ="123";
  
  // app.post("/login",(req,res)=>{
  //   console.log(req.body)
  // });

  res.render('login');
});

module.exports = router;

