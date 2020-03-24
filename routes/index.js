var express = require('express');
var router = express.Router();
//var indexMW = require('../middleware/index-middleware.js');

var schema = require('../db/schema.js');

// var myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next();
// }

// var aboutLogger = function (req, res, next) {
//   console.log('About LOGGED  ' + req.params.userid )
//   //res.send(req.params.userid);
//   res.somevar = req.params.userid;
//   next();
// }
//router.use(myLogger);

// router.use(indexMW.methodOne({ option1: '1', option2: '2' }));

// router.use(indexMW.methodTwo({ option1: '1', option2: '2' }));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

// router.post('/login', function(req, res, next) {
//  // res.render('index', { title: 'Express' });
//  console.log(req.body.username);
// });

// router.get('/about/:userid?', aboutLogger, function(req, res, next) {
//   console.log(res.somevar);
//   res.render('index', { title: 'Express About' });
// });


// var url = require('url');
// // var address = 'http://localhost:3000/index.php?type=page&action=update&id=5221';
// var address = 'http://localhost:3000/index.php';
// var q = url.parse(address, true);
 
// console.log(q.host); //returns 'localhost:3000'
// console.log(q.pathname); //returns '/index.php'
// console.log(q.search); //returns '?type=page&action=update&id=5221'
 
// var qdata = q.query; // returns an object: { type: page, action: 'update',id='5221' }
// console.log(qdata.type); //returns 'page'
// console.log(qdata.action); //returns 'update'
// console.log(qdata.id); //returns '5221'

module.exports = router;
