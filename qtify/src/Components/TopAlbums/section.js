

import CardTile from "./card";
import React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";


export default function Section({ albums }) {




    return (

        <>

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
                            rowGap: 4, columnGap: 2
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




        </>


    )
}
