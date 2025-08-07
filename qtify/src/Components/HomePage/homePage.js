// src/Components/HomePage/HomePage.js
import Hero from "../Hero/hero";
import Section from "../TopAlbums/section";
import Tabs from '../Tabs/tabs';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTopAlbums } from "../../Slices/topAlbums";
import NewAlbum from "../NewAlbums/newAlbumSection";
import { Box } from '@mui/material';
import Swiper from "../TopAlbums/topAlbumsSwiper";

export default function HomePage() {
  const [expandAlbums, setExpandAlbums] = useState(false);
  const dispatch = useDispatch();
  const topAlbums = useSelector((state) => state.topAlbums.topAlbums);
  console.log("Top Albums in Section", topAlbums);
  useEffect(() => {
    async function fetchAlbums() {
      console.log("Fetching top albums...");

      const result = await dispatch(fetchTopAlbums());
      console.log("Result of fetchTopAlbums:", result);

      if (fetchTopAlbums.fulfilled.match(result)) {
        console.log("Albums loaded:", result.payload);
      } else {
        console.error("Error loading albums:", result.error.message);
      }
    }
    fetchAlbums();
  }, [dispatch]);

  function expandHandler() {
    setExpandAlbums(!expandAlbums);
    console.log("Expand state changed:", !expandAlbums);
  }

  return (
    <div>
      <Hero />
      <div style={ { backgroundColor: 'black', color: 'white' } }>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            padding: { xs: '1rem 2rem', md: '1rem 2rem' },
          } }
        >
          <h6>Top Albums</h6>
          <div onClick={ expandHandler } style={ { cursor: 'pointer', color: '#34C94b' } }>{ expandAlbums ? 'Collapse' : 'Show all' }</div>
        </Box>
        {
          expandAlbums ? (<Section albums={ topAlbums } />) : (
            <Swiper albums={ topAlbums } type="topAlbums"/>
          )
        }
      </div>
      <div style={ { backgroundColor: 'black', color: 'white' } }>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            padding: { xs: '1rem 2rem', md: '1rem 2rem' },
          } }><h6>New Albums</h6></Box>
        <NewAlbum />
      </div>
      <div style={ { backgroundColor: 'black', color: 'white' } }>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'space-between',
            padding: { xs: '1rem 2rem', md: '1rem 2rem' },
          } }><h6>Songs</h6></Box>
        <Tabs />
      </div>

    </div>
  );
}


//https://github.com/madhubala140/L-square-QTify   -  needful resource  -  https://github.com/madhubala140/L-square-QTify/tree/main