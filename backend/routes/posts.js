const express = require("express");

const PostController = require("../controllers/posts");

const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post("", checkAuth, extractFile, PostController.createPost);

router.put("/:id", checkAuth, extractFile, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/getGenres", PostController.getGenres);

router.get("/getGenresFiction", PostController.getGenresFiction);

router.get("/getGenreschildren", PostController.getGenreschildren);

router.get("/getGenresscience", PostController.getGenresscience);

router.get("/getGenresaction", PostController.getGenresaction);

router.get("/getGenrebiography", PostController.getGenrebiography);

router.get("/getGenremystery", PostController.getGenremystery);

router.get("/getGenreliterary", PostController.getGenreliterary);

router.get("/getLanguageTamil", PostController.getLanguageTamil);

router.get("/getLanguageEnglish", PostController.getLanguageEnglish);
router.get("/getLanguageMalayalam", PostController.getLanguageMalayalam);
router.get("/getLanguageTelugu", PostController.getLanguageTelugu);
router.get("/:id", PostController.getPost);

router.delete("/:id", checkAuth, PostController.deletePost);

router.put("/bookpath/:id", checkAuth, extractFile, PostController.updateBookpath);

module.exports = router;


