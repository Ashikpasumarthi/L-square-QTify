
import React from 'react'
import './spotifyRedirectButton.css'
export default function spotifyRedirectButton() {
    return (
        <>
            <a className="spotify-login-button" href="https://accounts.spotify.com/authorize?client_id=5ebf027c9d65420fb9abd7021df1c055&response_type=code&redirect_uri=https://qtify-music-app-backend.el.r.appspot.com/api/spotify/callback&scope=streaming">Login with Spotify</a>
        </>
    )
}