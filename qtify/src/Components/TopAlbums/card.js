
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { FaPlayCircle } from 'react-icons/fa';
import { Box } from "@mui/material";
export default function CardTile({ id, follows, image, title, type }) {
  // const cardDetails = useSelector((state) => state.topAlbums.topAlbums);
  // console.log("CardTile details:", cardDetails);
  // console.log("CardTile props:", { id, follows, image, title });
  const theme = createTheme();
  let navigate = useNavigate();
  return (
    // <Card id={ id } sx={ { width: { md: 'min-content' }, backgroundColor: 'black',height:'16rem' } }>
    <Card id={ id } sx={ { maxWidth: 200, width: '100%', backgroundColor: 'black' } } onClick={ () => type !== 'song' && navigate(`/card/:${id}?type=${type}`) }>
      <CardActionArea sx={ { borderRadius: '0.6rem' } }>
        <CardMedia
          component="img"
          height='100%'
          sx={ {
            // Centers the background image
            backgroundPosition: 'center',
            // Sets the width to fill the available space
            // width: '-webkit-fill-available',
            // Sets the height of the image height: '21rem',
            // Ensures the image is contained within its container
            // objectFit: 'contain',
            // Prevents the background image from repeating
            backgroundRepeat: 'no-repeat',
            // Scales the background image to cover the element
            backgroundSize: 'cover',
            borderRadius: '0.6rem',
            width: '100%'
          } }
          image={ image }
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
            <Chip
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
            />
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
            { title }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  );
}
