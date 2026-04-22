import React from 'react'
import s from './ControlCard.module.css'

const ControlCard = () => {
  return (
    <div className={s.card}>
        <img src='../../../homepage-image/control-purchase/food1.png' alt='food1'/>
        <img src='../../../homepage-image/control-purchase/food2.png' alt='food2'/>
        <img src='../../../homepage-image/control-purchase/food3.png' alt='food3'/>
    </div>
  )
}

export default ControlCard;