import { useDispatch, useSelector } from "react-redux";
import { fetchTopAlbums } from "../../Slices/topAlbums";
import CardTile from "./card";
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";

export default function Section() {

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
        <div style={ { backgroundColor: 'black', color: 'white' } }>
            <Box
                sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: { xs: '1rem 2rem', md: '1rem 4rem' },
                } }
            >
                <h6>Top Albums</h6>
                <div>Collapse</div>
            </Box>


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
                        { topAlbums.map((album) => (
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



        </div>
    )
}
