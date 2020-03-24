var express = require('express');
var router = express.Router();
var loginMW = require('../middleware/login-middleware.js');

/* main login constructer */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'User Login Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'User register Express' });
});


/* user login controller method */
router.post('/userLogin',loginMW.methodLogin, function(req, res, next) {
    console.log(res.loginvar);
    res.render('index', { title: 'User Login Express' });
});

router.post('/userRegistered',loginMW.methodRegistered, function(req, res, next) {
  console.log(res.regvar);
  res.render('index', { title: 'User Registered Express' });
});

module.exports = router;