
var testMW = function (options) {
    return function (req, res, next) {
      // Implement the middleware function based on the options object
      console.log('hogaya');
      next()
    }
  }

  var testMW2 = function (options) {
    return function (req, res, next) {
      // Implement the middleware function based on the options object
      console.log('hogaya 2');
      next()
    }
  }

  module.exports = {
    methodOne: testMW,
    methodTwo: testMW2
  }