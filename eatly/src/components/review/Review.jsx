import React from 'react'
import s from './Review.module.scss'

const Review = ({img, name, info, text, isActive}) => {

  return (
    <section>
      <div className={s.review}>
        <div className={s.review__content}>
          {isActive &&
          (<div className={s.review__header}>
              <div className={s.review__customer}>
                  <img src={img} styles={{width: '50px', height: 'auto'}} alt='customer'/>
                  <div className={s.customer__info}>
                    <h1>{name}</h1>
                    <p>{info}</p>
                  </div>
              </div>
              <img src='../../../homepage-image/customers/quotes.svg' styles={{width: '41px'}} alt='quotes'/>
            </div>
            )}
            <p id={s.text}>{text}</p>
            <div className={s.review__stars}>
              <img src="../../../homepage-image/hero/stars.svg" styles={{width: '98px'}} alt="stars"/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Review;
