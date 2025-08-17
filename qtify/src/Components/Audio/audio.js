import React from 'react';
import { Box } from "@mui/material";
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';
import { useSelector } from 'react-redux';
import { FaRandom } from 'react-icons/fa';
import "./audio.css";

export default function Audio() {
    const currentSong = useSelector(state => state.player.currentSong);

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

    return (
        <Box sx={ { position: 'sticky', width: '100%', display: 'flex', justifyContent: 'center', bottom: 0, zIndex: 1, height: 'auto' } }>
            <AudioPlayer
                autoPlay
                src="audio.mp3"
                onPlay={ e => console.log("onPlay") }
                customAdditionalControls={ [
                    ...(songInfo ? [songInfo] : []),
                    shuffleButton
                ] }
            />
        </Box>
    );
}
