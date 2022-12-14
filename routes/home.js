var express = require('express');
var router = express.Router();

const userData = {
  email: "test@gmail.com",
  password: "123"
};
let products = [
  {
    name: "Leela kovalam",
    category: "resort",
    description: "It is a good resort",
    Image: "https://tse3.mm.bing.net/th?id=OIP.I_-R1__LO2KfnldkRvBOdgHaFN&pid=Api&P=0",
  },
  {
    name: "Backwater Ripples",
    category: "resort",
    description: "It is a good resort",
    Image: "https://tse1.mm.bing.net/th?id=OIP.xHgsqFB6j4QIPJKaAVQlHwHaEV&pid=Api&P=0",
  },
  {
    name: "Sterling Wayanad",
    category: "resort",
    description: "It is a good resort",
    Image: "https://tse3.mm.bing.net/th?id=OIP.fioV7S-waTEdsD1qDgqRWAHaEK&pid=Api&P=0",
  },
]
/* GET home page. */

router.post('/', function (req, res, next) {
  if (req.body.Email === userData.email && req.body.password === userData.password) {
    req.session.loggedIn = true;
    res.redirect('/home');
  } else {
    req.session.loginErr = true;
    res.redirect("/");
  }

});

router.get('/', (req, res, next) => {
  if (req.session.loggedIn) {
    res.render("home", { products });
  } else {
    res.redirect('/');
  }
})

router.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
