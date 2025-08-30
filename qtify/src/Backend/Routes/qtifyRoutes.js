const express = require("express");
const router = express.Router();
const { getToken, searchSongs } = require("../Controllers/spotifyController");

router.post("/token", getToken);
router.post("/search", searchSongs);

module.exports = { spotifyRouter: router };