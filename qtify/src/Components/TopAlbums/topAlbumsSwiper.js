
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardTile from './card';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper/modules';
// import { useSelector } from 'react-redux';
import styles from './topAlbums.module.css';

export default function TopAlbumsSwiper({ albums, type }) {
    // let topAlbums = useSelector((state) => state.topAlbums.topAlbums);


    console.log("Top Albums in Swiper", albums);
    return (
        <div className={ styles.carouselContainer }>

            <Swiper
                slidesPerView={ 7 }  // Show 7 images per slide undali
                slidesPerGroup={ 7 }  // Move 7 slides at a time undali
                spaceBetween={ 0 }   // Adjust spacing between slides
                speed={ 1000 }  // Slower transition (in milliseconds)

                breakpoints={ {
                    769: {
                        slidesPerView: 7,
                        slidesPerGroup: 7,

                    },
                } }
                loop={ false } // loops infinitely
                // autoplay={ {
                //     delay: 3000,
                //     disableOnInteraction: false  // means by default it true - if user interacts with slider by his own then autoplay will stop untill page is reloaded or user interacts with slider again - if set to false then autoplay will continue even if user dont interacts with slider
                // } }
                // pagination={ {
                //     clickable: true,
                //     dynamicBullets: false, // Makes pagination more intuitive
                // } }
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
                { albums.map((album, index) => (
                    // <Link to={ ele.redirect_products_url }>

                    <SwiperSlide key={ index }>
                        <CardTile
                            album={ album }
                            id={ album.id }
                            follows={ (type === "topAlbums" || type === "newAlbums") ? album.follows : album.likes }
                            image={ album.image }
                            title={ album.title }
                            type={ type }

                        />
                    </SwiperSlide>

                )) }
            </Swiper>
        </div >
    )
}