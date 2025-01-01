
exports.stdGuardMiddleware = (req, res, next)=> {
    // Get Authorization header
    const authHeader = req.headers.authorization;
    console.log(authHeader, 'test');
    if (authHeader === 'student') {
      next();
    } else {
      res.send("Unauthorized");
    }
  }
  
  
  exports.TeaGuardMiddleware = (req, res, next)=> {
    // Get Authorization header
    const authHeader = req.headers.authorization;
    console.log(authHeader, 'test');
    if (authHeader === 'teacher') {
      next();
    } else {
      res.send("Unauthorized");
    }
  }
