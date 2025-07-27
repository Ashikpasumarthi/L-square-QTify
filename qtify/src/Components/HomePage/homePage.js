// src/Components/HomePage/HomePage.js
import Hero from "../Hero/hero";
import Section from "../TopAlbums/section";
import Tabs from '../Tabs/tabs';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchTopAlbums } from "../../Slices/topAlbums";


export default function HomePage() {

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

  return (
    <div>
      <Hero />
      <Section albums={ topAlbums } />
      <Tabs />
    </div>
  );
}


//https://github.com/madhubala140/L-square-QTify   -  needful resource  -  https://github.com/madhubala140/L-square-QTify/tree/main