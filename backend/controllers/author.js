const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Author = require("../models/author");

exports.createAuthor = (req, res, next) => {
  console.log("IM HEre!!!!!!!!!!!!")
  bcrypt.hash(req.body.password, 10).then(hash => {
    const author = new Author({
      email: req.body.email,
      password: hash
    });
    console.log(author.email);
    author
      .save()
      .then(result => {
        res.status(201).json({
          message: "Author created!",
          result: result
          
        });
        console.log("author created!!!");
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          message: "Invalid authentication credentials!"
        });
      });
  });
}

exports.authorLogin = (req, res, next) => {
  let fetchedAuthor;
  Author.findOne({email: req.body.email })
    .then(author => {
      if (!author) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedAuthor = author;
      return bcrypt.compare(req.body.password, author.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedAuthor.email, userId: fetchedAuthor._id },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedAuthor._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid authentication credentials!"
      });
    });
}
