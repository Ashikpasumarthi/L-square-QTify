const express = require("express");
const router = express.Router();
const { getToken, searchSongs } = require("../Controllers/spotifyController");

router.post("/token", getToken);
router.get("/search", searchSongs);

module.exports = router;