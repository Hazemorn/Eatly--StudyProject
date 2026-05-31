import React, {useContext} from "react";
import s from "./Reviews.module.css";
import Review from '../review/Review'
import { AppContext } from '../../pages/Homepage.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

const Reviews = () => {

  const {customers} = useContext(AppContext);

  return (
    <section>
      <div className="container">
        <div className={s.review__content}>
          <h1 className={s.review__title}>
            <span>Customer</span> Say
          </h1>
          {/* <div className={s.swiper}>
            <div className={s.swiper__wrapper}>
                <div className={s.swiper__slide}>
                {customers.map((customer) =>
                  <Review img={customer.img} name={customer.name} info={customer.info} text={customer.text}/>
                )}
                </div>
            </div>
            <div className={s.swiper__scrollbar}></div>
          </div> */}
          {/* <div className={s.swiper__slide}>
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={5}
            slidesPerView={1}
            scrollbar={{  el: '.swiper_scrollbar', draggable: true, snapOnRelease: true, dragSize: 50 }}
            loop={true}
            className={s.mySwiper}
          >
            {customers.map((customer) => (
              <SwiperSlide key={customer.id}> 
                <Review 
                  img={customer.img} 
                  name={customer.name} 
                  info={customer.info} 
                  text={customer.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          </div> */}
    
          <div className={s.sliderWrapper}> {/* Замест swiper__slide */}
            <Swiper
              modules={[Scrollbar]}
              spaceBetween={5}
              slidesPerView={1}
              // Выкарыстоўваем радок для класа, які будзе глабальным
              scrollbar={{ 
                el: '.custom-scrollbar', 
                draggable: true, 
                snapOnRelease: true 
              }}
              loop={true}
              className={s.mySwiper}
            >
              {customers.map((customer) => (
                <SwiperSlide key={customer.id}> 
                  <Review {...customer} />
                </SwiperSlide>
              ))}
              {/* Скролбар павінен быць унутры або адразу пасля Swiper */}
              <div className="custom-scrollbar"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
