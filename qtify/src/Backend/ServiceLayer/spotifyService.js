const axios = require("axios");
class SpotifyService {

    static async getAccessToken() {
        const clientId = "5ebf027c9d65420fb9abd7021df1c055";
        const clientSecret = "51e305de70a949a08deff7dbfddd0455";

        const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
        try {
            const response = await axios.post(
                "https://accounts.spotify.com/api/token",
                "grant_type=client_credentials",
                {
                    headers: {
                        Authorization: `Basic ${auth}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    }
                }
            );
            return response.data;

        } catch (error) {
            console.error("Error fetching access token:", error);
            throw new Error("Failed to fetch access token");
        }
    }


    static async searchQuery(query, type, token) {
        try {
            const response = await axios.get("https://api.spotify.com/v1/search", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    q: query,
                    type: type,
                    limit: 20
                }
            });
            return response.data;
        }
        catch (error) {
            // FIX: Log the detailed error response from Spotify
            console.error("💥 Spotify API Request Failed:", error.response?.data || error.message);

            // You can still throw the generic error to be caught by the controller
            throw new Error("Failed to fetch search results");
        }
    }
};

module.exports = { SpotifyService };

// 1. Buffer.from(${clientId}:${clientSecret}).toString("base64")

// What is Buffer? In Node.js, Buffer is a built-in object that lets you work with raw binary data (like bytes, characters, files, etc.).
// Spotify API needs your clientId:clientSecret to be encoded in Base64 format before sending.
// Buffer.from(`${clientId}:${clientSecret}`)
// Takes your string (e.g., "abc123:def456") and turns it into binary data.
// .toString("base64")
// → Converts that binary data into a Base64 encoded string (required for the Authorization header).


// 2. body: "grant_type=client_credentials"
// When asking Spotify for a token, you need to tell them which OAuth flow you’re using.
// "grant_type=client_credentials" means:
// “I want a token using the Client Credentials Flow (no user login, just app access).”
// This is part of the POST request body.


// 3. "Content-Type": "application/x-www-form-urlencoded"
// This tells Spotify how you’re sending the body.
// application/x-www-form-urlencoded means the body will look like:
// key1=value1&key2=value2
// instead of JSON.
// Since you’re sending just one field (grant_type=client_credentials), the body is simple:
// grant_type=client_credentials