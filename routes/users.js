var express = require('express');
var router = express.Router();

/* main users constructer */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'main user',  userId: '0', bookId: '0'  });
});


/* main users controller method */
router.get('/usersMain', function(req, res, next) 
{
  res.render('users', { title: 'Express', message: 'User function', userId: '0', bookId: '0' });
});

/* main users controller method with parameter */
router.get('/userdetail/:userId?', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: req.params.userId, bookId: '1' });
});

/* main users controller method with multiple parameter */
router.get('/usersDetailBook/:userId?/books/:bookId', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: req.params.userId, bookId: req.params.bookId });
});

/* main users controller method with range parameter  */
router.get('/usersRange/:From?-:To?', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: '0', bookId: '0', From: req.params.From, To: req.params.To });
});

/* This route path will match acd and abcd.  */
router.get('/usersMainExtra/ab?cd', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: '0', bookId: '0' });
});

/* This route path will match abcd, abbcd, abbbcd, and so on.  */
router.get('/usersMainExtra/ab+cd', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: '0', bookId: '0' });
});

/* This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.  */
router.get('/usersMainExtra/ab*cd', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: '0', bookId: '0' });
});

/* This route path will match /abe and /abcde.  */
router.get('/usersMainExtra/ab(cd)?e', function(req, res, next) {
  res.render('users', { title: 'Express', message: 'User function', userId: '0', bookId: '0' });
});

// router.post('/login', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   console.log(req.body.username);
  
//  });

module.exports = router;
