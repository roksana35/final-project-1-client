import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../../src/assets/home/slide1.jpg'
import slide2 from  '../../../src/assets/home/slide2.jpg'
import slide3 from  '../../../src/assets/home/slide3.jpg'
import slide4 from  '../../../src/assets/home/slide4.jpg'
import slide5 from  '../../../src/assets/home/slide5.jpg'
import ShareSection from './ShareSection';



const Swipper = () => {
    return (
        <div>
            <ShareSection
            subheading={"From 11.00am to 10.00pm"}
            heading={"order online"}
            ></ShareSection>
            <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24 "
      >
        <SwiperSlide>
             <img src={slide1} alt="" />
             <h3 className='text-3xl text-center text-white -mt-16'>Salads</h3>
             </SwiperSlide>
        <SwiperSlide> 
            <img src={slide2} alt="" />
            <h3 className='text-3xl text-center text-white -mt-16'>Pizza</h3>
            </SwiperSlide>
        <SwiperSlide>
             <img src={slide3} alt="" />
             <h3 className='text-3xl text-center text-white -mt-16'>Soups</h3>
             </SwiperSlide>
        <SwiperSlide> 
            <img src={slide4} alt="" />
            <h3 className='text-3xl text-center text-white -mt-16'>Desserts</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src= {slide5} alt="" />
            <h3 className='text-3xl text-center text-white -mt-16'>Salads</h3>
             </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Swipper;