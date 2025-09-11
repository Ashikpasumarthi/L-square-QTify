import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSpotifySongs } from "../../Slices/spotifyRealSongs"; // fetchNewAlbums  from "../../Slices/newAlbumSlice";
import { fetchToken } from '../../Slices/token';

import Swiper from '../TopAlbums/topAlbumsSwiper';


export default function SpotifySongs() {
  const dispatch = useDispatch();
  const newSpotify = useSelector((state) => state.spotifySongs.songs);
  const token = useSelector((state) => state.token.value);
  const tokenStatus = useSelector((state) => state.token.status);
  const isLoading = useSelector((state) => state.spotifySongs.isLoading);
  // console.log("New Spotify Songs in Section", newSpotify);



  // useEffect(() => {
  //   if (!token) {
  //     dispatch(fetchToken());
  //   }

  // }, [dispatch, token]);

  // useEffect(() => {
  //   if (!token) return; // wait for token
  //   if (newSpotify.length > 0) return; // prevent refetching

  //   console.log("Token is ready:", token);

  //   async function fetchSongs() {
  //     const result = await dispatch(fetchSpotifySongs({ query: "Telugu", type: "album", token }));
  //     console.log("Songs fetched:", result);
  //   }

  //   fetchSongs();
  // }, [token, dispatch, newSpotify]);





  console.log("Testing the token output", token);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (tokenStatus === 'idle') {
      console.log("Fetching token...");
      dispatch(fetchToken());
    }
  }, [dispatch, tokenStatus]);

  useEffect(() => {
    if (token) {
      console.log("Token available, fetching songs...");
      console.log("Using token:", token);
      dispatch(fetchSpotifySongs({ query: "New Telugu songs 2025", type: "album", token }));
    }
  }, [token, dispatch]);


  if (!token) return <div sx={ { color: 'white' } }>Loading token...</div>;
  if (isLoading) return <div sx={ { color: 'white' } }>Loading albums...</div>;

  return (
    <>
      <Swiper albums={ newSpotify } type={ newSpotify } />
    </>
  )
}
