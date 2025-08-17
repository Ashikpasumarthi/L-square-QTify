
import { Box } from '@mui/material';
import React from 'react';
import SongsPagination from '../DetailPage/songsPagination';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { playerActions } from '../../Slices/playerSlice';
export default function SongsTable({ songs }) {
    const dispatch = useDispatch();

    function formatDuration(duration) {
        const totalSeconds = Math.floor(duration / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        console.log("Formatted Duration:", `${hours}hr ${minutes}min ${seconds}sec`);

        return ` ${(minutes === 0 ? '' : (minutes < 10 && minutes > 0 ? ('0' + minutes + 'min') : minutes + 'min'))} ${seconds < 10 ? '0' + seconds : seconds}sec`;

    }
    const dataPerPage = 10;
    // const [page, setPage] = React.useState(1);
    const page = useSelector(state => state.pagination.songsPage);
    console.log("Current Page:", page);

    let lastIndex = page * dataPerPage;
    let firstIndex = lastIndex - dataPerPage;
    let currentPageSongs = songs.slice(firstIndex, lastIndex);


    function handlePlaySong(song) {
        dispatch(playerActions.setCurrentSong(song));
        console.log("Playing song:", song.title);
        dispatch(playerActions.setIsPlaying(true));
    }
    return (
        <>
            <Box sx={ { display: 'flex', justifyContent: 'flex-end', mr: 8 } }>
                <SongsPagination songs={ songs } page={ page } dataPerPage={ dataPerPage } />
            </Box>
            <Box
                sx={ {
                    width: '93%',
                    margin: '0rem 4rem',
                    height: 'auto',

                } }
            >

                <Box
                    component="table"
                    sx={ {
                        display: { xs: 'none', md: 'table' },
                        width: '100%',
                        borderCollapse: 'separate',
                        borderSpacing: '0 0.87rem',
                    } }
                >
                    <thead>
                        <tr>
                            <th >Title</th>
                            <th style={ { textAlign: 'left' } }>Artist</th>
                            <th style={ { textAlign: 'right' } }>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        { currentPageSongs.map((song, index) => (
                            <tr
                                key={ index }

                            >
                                <td onClick={ () => handlePlaySong(song) } style={ {
                                    display: 'flex', gap: '0.5rem', alignItems: 'center', borderBottom: index !== currentPageSongs.length - 1 ? '1px solid #ccc' : 'none',
                                    paddingBottom: '0.87rem'
                                } }>
                                    <Box
                                        component="img"
                                        src={ song.image }
                                        alt={ song.title }
                                        sx={ {
                                            width: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                            height: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                                            borderRadius: '0.25rem',
                                            objectFit: 'cover',
                                        } }
                                    />
                                    { song.title }
                                </td>
                                <td style={ { borderBottom: index !== currentPageSongs.length - 1 ? '1px solid #ccc' : 'none', paddingBottom: '0.87rem' } }>{ song.artists.join(', ') }</td>
                                <td style={ { textAlign: 'right', borderBottom: index !== currentPageSongs.length - 1 ? '1px solid #ccc' : 'none', paddingBottom: '0.87rem' } }>{ formatDuration(song.durationInMs) }</td>
                            </tr>
                        )) }
                    </tbody>
                </Box>
            </Box>


        </>
    )
}