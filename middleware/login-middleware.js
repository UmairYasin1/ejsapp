
  var loginValidation = function (req, res, next) {
    if (req.body.username == "abc") {
      // user is authenticated
      console.log(req.body.username)
      res.loginvar = 'Logged in';
      next();
    } else {
      // return unauthorized
      res.send(401, "Unauthorized");
    }
  };

  var regValidation = function (req, res, next) {
    if (req.body.username) {
      // user is authenticated
      console.log(req.body.username)
      res.regvar = 'Registered';
      next();
    } else {
      // return unauthorized
      res.send(401, "Unauthorized");
    }
  };

  module.exports = {
    methodLogin: loginValidation,
    methodRegistered : regValidation
  }

  