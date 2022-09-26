import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
// import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import './Slider.module.scss';

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

export default function Slider() {
    let [background, setBackground] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const url = 'http://localhost:5000/api/v1/backgrounds';
            await axios.get(url).then((response) => {
                setBackground(response.data);
            });
        };
        fetchApi();
    }, []);

    console.log(background);
    return (
        <>
            <Swiper
                effect="coverflow"
                spaceBetween={30}
                centeredSlides={true}
                loop
                speed={1500}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
            >
                {background.map((val: any, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img className="object-fill w-full h-96" src={val.urlimg} alt={val.date} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
