const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
   /*var token1;
   if ('authorization' in req.headers)
        token1 = req.headers['authorization'].split(' ')[1];
          const decodedToken = jwt.verify(token1, "secret_this_should_be_longer");
          console.log(decodedToken);
   console.log("TOKEN1:       " + token1);*/
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log("TOKEN: " + token);
    const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
    console.log(decodedToken);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "You are not authenticated!" });
  }
};
