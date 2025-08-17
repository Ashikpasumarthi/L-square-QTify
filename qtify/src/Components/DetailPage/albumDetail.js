import { useSelector } from 'react-redux';
import React from 'react';
import { Box, Container } from '@mui/material';
import SongsTable from '../DetailPage/songsTable';


export default function AlbumDetail({ id, type }) {
    const topAlbums = useSelector((state) => state.topAlbums.topAlbums);
    const rehydrated = useSelector((state) => state._persist?.rehydrated);
    const newAlbums = useSelector((state) => state.newAlbums.newAlbums);

    // 1. Show loading while rehydration is in progress
    if (!rehydrated) {
        return <div>Loading...</div>;
    }

    // 2. Once rehydrated, now it's safe to find the album
    const album = type === "topAlbums" ? topAlbums.find((ele) => ele.id === id.split(':')[1]) : newAlbums.find((ele) => ele.id === id.split(':')[1]);
    console.log("Album Detail for ID:", id, "Found Album:", album);

    let { songs } = album;
    console.log("Songs in Album:", songs);

    let totalDuration = 0;
    songs.forEach(song => {
        totalDuration += song.durationInMs;
    })

    console.log("Total Duration of Album:", totalDuration);

    function formatDuration(duration) {
        const totalSeconds = Math.floor(duration / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        console.log("Formatted Duration:", `${hours}hr ${minutes}min ${seconds}sec`);

        return `${(hours === 0 ? '' : (hours < 10 && hours > 0 ? ('0' + hours + 'hr') : hours + 'hr'))} ${minutes < 10 ? '0' + minutes : minutes}min `;

    }
    formatDuration(totalDuration);

    const d = new Date();
    let year = d.getFullYear();

    //If album still not found (e.g., invalid id), show fallback
    if (!album) {
        return <div>Album not found</div>;
    }


    return (
        <Container maxWidth={ false }>


            <Box
                sx={ {
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(2, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: '0.5fr minmax(300px, 900px)',
                    },
                    justifyItems: 'center',
                    rowGap: 4, columnGap: { xs: 0, md: 0.1 },
                    marginTop: 'clamp(1rem, 5vw, 3rem)',

                } }>
                <Box
                    sx={ {
                        width: { xs: '12rem', sm: '14rem', md: '18rem', lg: '22rem' },
                        height: { xs: '14rem', sm: '16rem', md: '20rem', lg: '24rem' },
                        borderRadius: '1rem',
                        overflow: 'hidden',
                    } }
                >
                    <img
                        src={ album.image }
                        alt={ album.title }
                        style={ {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        } }
                    />
                </Box>


                <Box
                    sx={ {
                        textAlign: { xs: 'center', md: 'left' },
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 1,
                        justifySelf: 'flex-start',

                    } }
                >
                    <h2>Best of { album.title } in { year }</h2>
                    <p>{ album.description }</p>
                    <p>{ year }</p>
                    <p>
                        { songs.length } songs &#9679; { formatDuration(totalDuration) } &#9679; { album.follows } Follows
                    </p>
                </Box>
            </Box>

            <Box sx={ { marginTop: '5.5rem',pb:2 } }>
                <SongsTable songs={ songs } />
            </Box>


        </Container >
    );
}
