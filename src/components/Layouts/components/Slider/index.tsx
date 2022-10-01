import { useState, useEffect, Fragment, useRef } from 'react';
import axios from 'axios';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import env from 'react-dotenv';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper';

export default function Slider() {
    let ref = useRef('');
    let [background, setBackground] = useState([]);
    useEffect(() => {
        ref.current = `${env.API_URL}/api/v1/backgrounds`;
        const fetchApi = async () => {
            await axios.get(ref.current).then((response) => {
                setBackground(response.data);
            });
        };
        fetchApi();
    }, []);

    return (
        <Fragment>
            <Swiper
                effect="coverflow"
                spaceBetween={30}
                centeredSlides={true}
                loop
                speed={1500}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
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
                            <img className="object-fill w-full h-full" src={val.urlimg} alt={val.date} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </Fragment>
    );
}
