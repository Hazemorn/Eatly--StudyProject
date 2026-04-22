import React from 'react'
import s from './Restaurant.module.css'

const Restaurant = ({img, highlight, title, time, rate}) => {
   
  const highlight_status = highlight === 'Healthy' ? 'yellow' : ( highlight === 'Trending' ? 'red' : 'green')
  return (
    <div>
        <div className={s.restaurant_card}>
            <img src={img} alt='restaurant'/>
            <div className={s.card__content}>
                <div className={s.highlight} data-status={highlight_status}>
                    <p>{highlight}</p>
                </div>
                <h1 className={s.title}>
                    {title}
                </h1>
                <div className={s.info}>
                    <div className={s.info__main}>
                        <p>{time}</p>
                        <img src='../../../homepage-image/our-top-restaurants/star.svg' alt='star' style={{width:'19px', height: 'auto'}}/>
                        <p>{rate}</p>
                    </div>
                    <div className={s.info__bookmark}>
                        <img src='../../../homepage-image/our-top-restaurants/bookmark.svg' alt='bookmark' style={{width:'29px', height: 'auto'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Restaurant;