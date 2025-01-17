import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slider1 from '../Slidder/Slider1';
import Slider2 from '../Slidder/Slider2';
import Slider4 from '../Slidder/Slider4';

const Banner = () => {
    return (
        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        className='h-screen'
      >
        <SwiperSlide>
            <Slider2 />
        </SwiperSlide>
        <SwiperSlide>
            <Slider4 />
        </SwiperSlide>
        <SwiperSlide>
            <Slider1 />
        </SwiperSlide>
      </Swiper>


    );
};

export default Banner;