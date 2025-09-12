const express = require("express");
const router = express.Router();
const { getToken, searchSongs } = require("../Controllers/spotifyController");

router.post("/token", getToken);
router.get("/search", searchSongs);
router.get("/callback", async (req, res) => {
    const code = req.query.code;

    try {
        // Exchange code for token
        const response = await axios.post(
            "https://accounts.spotify.com/api/token",
            querystring.stringify({
                grant_type: "authorization_code",
                code,
                redirect_uri: "https://qtify-music-app-backend.el.r.appspot.com/callback",
                client_id: "5ebf027c9d65420fb9abd7021df1c055",
                client_secret: "51e305de70a949a08deff7dbfddd0455",
            }),
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );

        const { access_token, refresh_token } = response.data;

        // ✅ Redirect back to your frontend with tokens
        res.redirect(
            `http://localhost:3000/callback?access_token=${access_token}&refresh_token=${refresh_token}`
        );

    } catch (error) {
        console.error("Error exchanging code for token:", error.response?.data || error.message);
        res.status(500).send("Failed to authenticate with Spotify");
    }
});

module.exports = router;