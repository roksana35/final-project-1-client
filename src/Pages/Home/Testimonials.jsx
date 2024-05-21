import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ShareSection from './ShareSection';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [tasimonials,setTestimonials]=useState([]);
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[])
    return (
        <div>
            <ShareSection
            heading={'testimonials'}
            subheading={'What Our Client Say'}
            ></ShareSection>
             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
        {
            tasimonials.map(review=><SwiperSlide key={review._id}>
                <div className='m-24 flex flex-col items-center'>
                <Rating style={{ maxWidth: 200 }} value={review.rating} readOnly />
                    <p className='py-10'>{review.details}</p>
                    <p className='text-3xl text-orange-400'>{review.name}</p>

                </div>
                </SwiperSlide>)
        }
       
      </Swiper>
        </div>
    );
};

export default Testimonials;