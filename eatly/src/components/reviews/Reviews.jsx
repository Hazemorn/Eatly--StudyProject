import React, {useContext} from "react";
import s from "./Reviews.module.scss";
import Review from '../review/Review'
import { AppContext } from '../../pages/Homepage/Homepage.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

const Reviews = () => {

  const {customers} = useContext(AppContext);

  return (
    <section className={s.review}>
      <div className="container">
        <div className={s.review__content}>
          <h1 className={s.review__title}>
            <span>Customer</span> Say
          </h1>
        
          <div className={s.review__sliderWrapper}> 
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={0}
              // slidesPerView={1.5}
              slidesPerView="auto"
              slidesOffsetAfter={800} 
              scrollbar={{ 
                el: '.custom-scrollbar', 
                draggable: true, 
              }}
              className={s.review__my_swiper}
            >
              {customers.map((customer) => (
                <SwiperSlide key={customer.id}> 
                    {({ isActive }) => (
                        isActive ? (
                             <Review {...customer} isActive={true} />
                              ) : (
                             <Review {...customer} isActive={false} />
                        )
                      )}
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="custom-scrollbar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
