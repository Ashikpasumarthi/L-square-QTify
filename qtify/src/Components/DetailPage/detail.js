import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardDetail = () => {
    const { id } = useParams();
    console.log("Card id:" + id + "CardDetail id:" + id.split('').slice(1).join(''));


    const topAlbums = useSelector((state) => state.topAlbums.topAlbums || []);

    const rehydrated = useSelector((state) => state._persist.rehydrated);


    // if (!rehydrated) return <div>Loading from storage...</div>;
    // if (!topAlbums || topAlbums.length === 0) return <div>Loading albums...</div>;
    let album;
    console.log("Rehydrated:", rehydrated);
    if (rehydrated) {
        album = topAlbums.find((ele) => ele.id === id.slice(1));
        debugger;

    }
    console.log("CardDetail album:", album);

    if (!album) return <div>Album not found</div>;

    return (
        <div style={ { padding: '20px' } }>
            <h2>{ album.title }</h2>
            <p><strong>Artist:</strong> { album.artist }</p>
            <img src={ album.image } alt={ album.title } style={ { width: '300px', borderRadius: '8px' } } />
            <p><strong>Release Year:</strong> { album.year }</p>
            <p><strong>Genre:</strong> { album.genre }</p>
            {/* Add any other album info you want here */ }
        </div>
    );
};

export default CardDetail;
