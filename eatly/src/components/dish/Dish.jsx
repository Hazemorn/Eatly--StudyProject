import React from 'react'
import s from './Dish.module.scss'

const Dish = ({img, highlight, title, time, rate, price}) => {

  const highlight_status = highlight === 'Healthy' ? 'yellow' : ( highlight === 'Trending' ? 'red' : 'green')
  const partsPrice = price.toString().split('.');

  return (
    <div>
        <div className={s.dish}>
            <img className={s.dish__img} src={img} alt='dishes'/>
            <img className={s.heart__img} src='../../../homepage-image/our-top-dishes/heart.svg' alt='heart' style={{width:'16px', height:'auto'}}/>
            <div className={s.dishCard__content}>
              <div className={s.dishCard__highlight} data-status={highlight_status}>
                      <p>{highlight}</p>
                  </div>
              <div className={s.dishCard__title}>
                <h1>{title}</h1>
              </div>
              <div className={s.dishCard__info}>
                  <p>{time}</p>
                  <img src='../../../homepage-image/our-top-restaurants/star.svg' alt='star' style={{width:'19px', height:'auto'}}/>
                  <p>{rate}</p>
              </div>
              <div className={s.dishCard__cost}>
                  <p><span className={s.dishCard__integer}>${partsPrice[0]}</span><span className={s.dishCard__fraction}>.{partsPrice[1]}</span></p>
                  {/* is not implemented */}
                  <button>+</button>
                  {/* is not implemented */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dish;
