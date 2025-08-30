import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSpotifySongs } from "../../Slices/spotifyRealSongs"; // fetchNewAlbums  from "../../Slices/newAlbumSlice";
import { fetchToken } from "../../Slices/token";
import Swiper from '../TopAlbums/topAlbumsSwiper';


export default function SpotifySongs() {
    const dispatch = useDispatch();
    const newSpotify = useSelector((state) => state.spotifySongs.songs);
    const token = useSelector((state) => state.token.value);
    // console.log("New Spotify Songs in Section", newSpotify);

    useEffect(() => {
        dispatch(fetchToken());
    }, [dispatch]);

    useEffect(() => {
        if (!token || newSpotify.length > 0) return; // wait for token

        async function fetchSongs() {
            console.log("Fetching new albums...");
            const result = await dispatch(fetchSpotifySongs({ query: "Telugu", type: "album", token }));
            console.log("Result of fetchSpotifySongs:", result);
        }

        fetchSongs();
    }, [dispatch, token, newSpotify]); // run when token changes

    return (
        <>
            <Swiper albums={ newSpotify } type="newSpotify" />
        </>
    )
}
