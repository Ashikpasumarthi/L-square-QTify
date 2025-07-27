

import CardTile from "./card";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import TopAlbumsSwiper from "./topAlbumsSwiper";

export default function Section({ albums }) {
    const [expandAlbums, setExpandAlbums] = useState(false);

    
    function expandHandler() {
        setExpandAlbums(!expandAlbums);
        console.log("Expand state changed:", !expandAlbums);
    }
    return (
        <div style={ { backgroundColor: 'black', color: 'white' } }>
            <Box
                sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: { xs: '1rem 2rem', md: '1rem 4rem' },
                } }
            >
                <h6>Top Albums</h6>
                <div onClick={ expandHandler } style={ { cursor: 'pointer', color: '#34C94b' } }>{ expandAlbums ? 'Collapse' : 'Show all' }</div>
            </Box>
            {
                expandAlbums ? (
                    <Container maxWidth={ false }>

                        {


                            <Box
                                sx={ {
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: 'repeat(2, 1fr)',
                                        sm: 'repeat(3, 1fr)',
                                        md: 'repeat(4, 1fr)',
                                        lg: 'repeat(7, 1fr)',
                                        xl: 'repeat(7, 1fr)',
                                    },
                                    justifyItems: 'center',
                                    rowGap: 4,
                                } }
                            >
                                { albums.map((album) => (
                                    <CardTile
                                        key={ album.id }
                                        id={ album.id }
                                        follows={ album.follows }
                                        image={ album.image }
                                        title={ album.title }
                                    />
                                )) }
                            </Box>






                        }

                    </Container>


                ) : (
                    <TopAlbumsSwiper />
                )
            }



        </div>
    )
}
