import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchSpotifySongs } from "../../Slices/spotifyRealSongs"; // fetchNewAlbums  from "../../Slices/newAlbumSlice";
// import { fetchToken } from '../../Slices/token';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper/modules';
import styles from './../TopAlbums/topAlbums.module.css';
//Card import
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaPlayCircle } from 'react-icons/fa';
import { Box } from "@mui/material";
const theme = createTheme();

export default function SpotifySongs() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const newSpotify = useSelector((state) => state.spotifySongs.songs);
  // const token = useSelector((state) => state.token.value);
  // const tokenStatus = useSelector((state) => state.token.status);
  const isLoading = useSelector((state) => state.spotifySongs.isLoading);
  const spotifyTokenSDK = useSelector((state) => state.spotifyAccessToken.spotifyAccessToken);
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


  console.log("NewSpotify value", newSpotify);


  console.log("Testing the token output", spotifyTokenSDK);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // useEffect(() => {
  //   if (tokenStatus === 'idle') {
  //     console.log("Fetching token...");
  //     dispatch(fetchToken());
  //   }
  // }, [dispatch, tokenStatus]);

  useEffect(() => {
    if (spotifyTokenSDK) {
      console.log("Token available, fetching songs...");
      console.log("Using token:", spotifyTokenSDK);
      dispatch(fetchSpotifySongs({ query: "Hot Hits Telugu", type: "album,playlist,track", token: spotifyTokenSDK }));
    }
  }, [spotifyTokenSDK, dispatch]);




  if (!spotifyTokenSDK) return <div sx={ { color: 'white' } }>Loading token...</div>;
  if (isLoading) return <div sx={ { color: 'white' } }>Loading albums...</div>;

  return (
    <>
      <div className={ styles.carouselContainer }>

        <Swiper
          slidesPerView={ 7 }
          slidesPerGroup={ 7 }
          spaceBetween={ 0 }
          speed={ 1000 }

          breakpoints={ {
            769: {
              slidesPerView: 7,
              slidesPerGroup: 7,

            },
          } }
          loop={ false }

          keyboard={ {
            enabled: true, // Allows navigation with the keyboard
            onlyInViewport: true, // Works only if Swiper is in the viewport
          } }
          navigation={ true } // Enables next/prev buttons
          preventClicks={ false }
          preventClicksPropagation={ false }
          modules={ [Autoplay, Pagination, Keyboard, Navigation] }
          className={ styles.mySwiper }
        >
          { newSpotify.map((album, index) => (


            <SwiperSlide key={ index }>
              <Card id={ album.id } sx={ { maxWidth: 200, width: '100%', backgroundColor: 'black' } } onClick={ () => (album.type !== 'album') && navigate(`/card/:${album.id}?type=${album.type}`) }>
                <CardActionArea sx={ { borderRadius: '0.6rem' } }>
                  <CardMedia
                    component="img"
                    height='100%'
                    sx={ {
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      borderRadius: '0.6rem',
                      width: '100%'
                    } }

                    image={ album.images[0].url }
                    alt="green iguana"
                  />



                  <ThemeProvider theme={ theme }>
                    <Stack
                      sx={ {
                        backgroundColor: 'white',
                        [theme.breakpoints.up('md')]: {
                          position: 'relative',
                          bottom: '2.5rem',
                          height: '2.5rem',
                          borderRadius: '0rem 0rem 0.6rem 0.6rem'
                        }
                      } }
                      direction="row"
                      spacing={ 1 }
                    >
                      {/* <Chip
                        sx={ {
                          backgroundColor: 'black',
                          color: 'white',
                          [theme.breakpoints.up('md')]: {
                            position: 'absolute',
                            top: '0.3rem',
                            left: '0.3rem',

                          }
                        } }
                        label={ (type === "topAlbums" || type === "newAlbums") ? `${follows} Follows` : `${follows} Likes` }
                        variant="outlined"
                      /> */}
                      <Box sx={ {
                        fontSize: '1.5rem',
                        [theme.breakpoints.up('md')]: {
                          position: 'absolute',
                          right: '1rem',
                          top: '0rem',

                        }

                      } }>
                        <FaPlayCircle />
                      </Box>
                    </Stack>
                  </ThemeProvider>

                  <CardContent sx={ {
                    position: 'relative',
                    bottom: '2rem',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '0.1rem',
                    height: 'auto'
                  } }>
                    <Typography gutterBottom variant="h3" component="div" sx={ { fontSize: '0.8rem', textAlign: 'start' } }>
                      { album.name }
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card >
            </SwiperSlide>

          )) }
        </Swiper>
      </div >
    </>
  )
}



// ikkada 2 different ways of fetching the token anedhi manamu rasamu : 1) using the backend token daniki token useEffect call cheyali to the token first then this will be passed as query which is commented right now and 2) using the spotify SDK token which is working perfectly fine now