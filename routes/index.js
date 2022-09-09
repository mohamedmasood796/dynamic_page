var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      name:"Leela kovalam",
      category:"resort",
      description:"It is a good resort",
      Image:"https://tse3.mm.bing.net/th?id=OIP.I_-R1__LO2KfnldkRvBOdgHaFN&pid=Api&P=0"  ,
    },
    {
      name:"Backwater Ripples",
      category:"resort",
      description:"It is a good resort",
      Image:"https://tse1.mm.bing.net/th?id=OIP.xHgsqFB6j4QIPJKaAVQlHwHaEV&pid=Api&P=0"  ,
    },{
      name:"Sterling Wayanad",
      category:"resort",
      description:"It is a good resort",
      Image:"https://tse3.mm.bing.net/th?id=OIP.fioV7S-waTEdsD1qDgqRWAHaEK&pid=Api&P=0"  ,
    },
  ]
  res.render('index', { products });
});

module.exports = router;
