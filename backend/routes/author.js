const express = require("express");

const AuthorController = require("../controllers/author");

const router = express.Router();

router.post("/register", AuthorController.createAuthor);

router.post("/authorlogin", AuthorController.authorLogin);

module.exports = router;
