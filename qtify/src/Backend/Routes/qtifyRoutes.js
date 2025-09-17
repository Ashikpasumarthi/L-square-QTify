const express = require("express");
const router = express.Router();
const { getToken, searchSongs, callback } = require("../Controllers/spotifyController");

router.post("/token", getToken);
router.get("/search", searchSongs);
router.get("/callback", callback);

module.exports = router;