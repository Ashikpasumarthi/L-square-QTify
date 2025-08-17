import React from 'react';
import { Box } from "@mui/material";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector, useDispatch } from 'react-redux';
import { FaRandom } from 'react-icons/fa';
import "./audio.css";
import { playerActions } from '../../Slices/playerSlice';
export default function Audio() {

    let dispatch = useDispatch();

    const currentSong = useSelector(state => state.player.currentSong);
    // const currentTime = useSelector(state => state.player.currentTime);
    const duration = useSelector(state => state.player.duration);
    // const isPlaying = useSelector(state => state.player.isPlaying);
    // const currentTime = useSelector(state => state.player.currentTime);
    // const volume = useSelector(state => state.player.volume);
    // const repeat = useSelector(state => state.player.repeat);
    // const shuffle = useSelector(state => state.player.shuffle);



    // const numDuration = duration.match(/\d+/)[0];   // "55"
    // const text = str.match(/[a-zA-Z]+/)[0]; // "sec"

    const songInfo = currentSong && (
        <Box
            key={ currentSong.id }
            sx={ {
                width: { xs: '2.5rem', sm: '3rem', md: 'auto' },
                height: { xs: 'auto', sm: 'auto', md: 'auto' },
                display: 'flex',
                gap: '0.5rem',
                padding: '0.5rem',
                border: 'none',
                alignItems: 'center',
                backgroundColor: "white",
                justifyContent: 'center'
            } }
        >
            <Box
                component="img"
                src={ currentSong.image }
                alt={ currentSong.title }
                sx={ {
                    width: { xs: '2.5rem', sm: '3rem', md: '2.5rem' },
                    height: { xs: '2.5rem', sm: '3rem', md: '2.5rem' },
                    borderRadius: '0.25rem',
                    objectFit: 'cover',
                } }
            />
            <Box sx={ { justifyContent: 'center', display: 'flex', flexDirection: 'column' } }>
                <div style={ {
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '12rem'
                } }>
                    { currentSong.title }
                </div>
                <div style={ {
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '12rem'
                } }>
                    { currentSong.artists?.join(', ') || "" }
                </div>
            </Box>
        </Box>
    );

    const shuffleButton = (
        <Box key="shuffle">
            <FaRandom
                style={ {
                    cursor: "pointer",
                    fontSize: "1.2rem",
                    marginRight: "0.5rem",
                    color: 'gray'
                } }
            />
        </Box>
    );

    const showDuration = currentSong && (
        <Box sx={ {
            position: 'absolute',
            right: '27.5%',
            bottom: '9%',
            color: 'white',
            fontSize: '0.8rem'
        } }>
            <span >{ duration.min ? duration.min + " : " + duration.sec : duration.sec }</span>
        </Box >

    );

    // function timer(value) {

    //     let runTimer = setInterval(() => {
    //         if (isPlaying) {
    //             let seconds = currentTime.sec < 60 ? currentTime.sec + 1 : 0;
    //             let minutes = currentTime.sec === 60 ? currentTime.min + 1 : currentTime.min;
    //             dispatch(playerActions.setCurrentTime({ min: minutes, sec: seconds }));
    //         }
    //     }, 1000);
    //     return () => clearInterval(runTimer);
    // }

    // const showTimer = isPlaying && (
    //     <Box>
    //         <span>{ `${currentTime.min}:${currentTime.sec}` }</span>
    //     </Box>
    // )

    return (
        <Box sx={ { position: 'sticky', width: '100%', display: 'flex', justifyContent: 'center', bottom: 0, zIndex: 1, height: 'auto' } }>
            <AudioPlayer
                autoPlay
                src="/songFile/[iSongs.info] 01 - Samajavaragamana.mp3"
                onPlay={ () => dispatch(playerActions.setIsPlaying(true)) }
                onPause={ () => dispatch(playerActions.setIsPlaying(false)) }
                customAdditionalControls={ [
                    ...(songInfo ? [songInfo] : []),
                    shuffleButton,
                    showDuration,
                    
                ] }
                onListen={ (e) =>
                    dispatch(
                        playerActions.setCurrentTime({
                            min: Math.floor(e.target.currentTime / 60),
                            sec: Math.floor(e.target.currentTime % 60),
                        })
                    )
                }
                listenInterval={ 1000 }
                showTimer
            />

        </Box>
    );
}
