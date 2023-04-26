const express = require("express");
const {getNewJoke, getNewJokeDetailed} = require("../../controllers/user-controllers");
const router = express.Router();

router.get("/", getNewJoke);
router.get("/details", getNewJokeDetailed);


module.exports = {router}