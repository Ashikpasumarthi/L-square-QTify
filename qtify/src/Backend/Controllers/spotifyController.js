const express = require('express');
const { SpotifyService } = require('../ServiceLayer/spotifyService');

async function getToken(req, res) {

    try {
        let tokenData = await SpotifyService.getAccessToken();
        res.json(tokenData);
    } catch (error) {
        console.error("Error fetching token:", error);
        res.status(500).json({ error: "Failed to fetch token" });
    }
}

async function searchSongs(req, res) {
    const { query, type} = req.query;

    const token = req.headers['authorization']?.split(' ')[1];

    try {
        console.log("Calling service with:", { query, type, token });
        const searchResults = await SpotifyService.searchQuery(query,type,token);
        res.json(searchResults);
    } catch(error){
        console.error("Error fetching search results:", error);
        res.status(500).json({ error: "Failed to fetch search results" });
    }

}

module.exports = { getToken, searchSongs };



// 1. Why POST if we are not sending much (or anything)?

// In many APIs (like Spotify), the specification says:
// “To get an access token, you must call POST /token.”

// Even if you aren’t sending much in the body, the standard requires POST, not GET.

// Why? Because:

// POST allows sending client credentials (like client_id and client_secret) safely in the request body or headers.

// GET would expose them in the URL (visible in browser history, logs, etc.).

// So → even if you’re not sending user data, you’re still technically sending credentials/grant_type in body or headers → which is why it must be POST.




// 2. Does POST mean “it doesn’t return anything”?

// Nope 🙂

// POST can return a response just like GET.

// Example: Spotify’s POST /token returns JSON like:

// {
//   "access_token": "BQAA...",
//   "token_type": "Bearer",
//   "expires_in": 3600
// }


// So even though you used POST, you still get data back (the token).




/* MOST IMPORTANT - WHY frontend and backend both uses the same POST method though it doesnt send anything as body */ 

// 🔹 1. Why Spotify requires POST for token

// To get an access token, you must send client_id, client_secret, and some params (like grant_type=client_credentials) in the request body.

// HTTP convention: when you’re sending sensitive data (not just reading), you use POST.

// Spotify’s /api/token endpoint is defined by them as a POST endpoint → so you have no choice but to call it using POST.

// 🔹 2. Why backend uses POST

// In your backend, you expose something like:

// app.post("/api/spotify/token", async (req, res) => {
//   // backend sends client_id and secret to Spotify
//   // gets the access_token
//   // returns it to frontend
// });


// Here, the backend does the heavy lifting (safely keeps client_id and secret).

// You (frontend) should never expose credentials.

// 🔹 3. Why frontend also uses POST to call backend

// When frontend wants a token, it does:

// fetch("/api/spotify/token", { method: "POST" })
//   .then(res => res.json())
//   .then(data => console.log(data.access_token));


// 👉 Even though you’re not sending credentials from frontend, you still use POST because:

// Your backend endpoint is defined as POST (so frontend must match it).

// You may still send something in the body (for example, if later you want different scopes, user ID, etc.).

// POST doesn’t mean it won’t return anything. It can still return a response body (here → access_token).

// ✅ So summary:

// POST to Spotify → to send credentials & get token.

// POST to your backend → because your backend route is defined that way, and it keeps consistency + future flexibility.

// Both POST requests return data (the token), so POST ≠ “no response."