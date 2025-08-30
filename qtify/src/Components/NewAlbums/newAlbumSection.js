import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchNewAlbums } from "../../Slices/newAlbum"; // fetchNewAlbums  from "../../Slices/newAlbumSlice";
import Swiper from '../TopAlbums/topAlbumsSwiper';


export default function NewAlbum() {
    const dispatch = useDispatch();
    const newAlbums = useSelector((state) => state.newAlbums.newAlbums);
    console.log("New Albums in Section", newAlbums);
    useEffect(() => {
        async function fetchAlbums() {
            console.log("Fetching new albums...");

            const result = await dispatch(fetchNewAlbums());
            console.log("Result of fetchNewAlbums:", result);

            // if (fetchNewAlbums.fulfilled.match(result)) {
            //     console.log("New Albums Loaded:", result.payload);
            // } else {
            //     console.error("Error loading albums:", result.error.message);
            // }
        }
        fetchAlbums();
    }, [dispatch]);
    return (
        <>
            <Swiper albums={ newAlbums } type="newAlbums"/>
        </>
    )
}
