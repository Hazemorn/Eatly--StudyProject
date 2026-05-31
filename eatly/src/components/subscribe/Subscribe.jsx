import React from 'react'
import s from './Subscribe.module.scss'

const Subscribe = () => {
  return (
    <section className={s.subscribe}>
        <div className="container">
            <div className={s.subscribe__content}>
                <div className={s.subscribe__text}>
                    <h1>Get 50%</h1>
                    <div className={s.subscribe__email_field}>
                        <input type='email' placeholder=' Enter Your Email Address'></input>
                        <button>subscribe</button>
                    </div>
                </div>
                <img src='../../../homepage-image/our-top-dishes/swe-dish-01.png' style={{width: '190px', height:'auto'}}/>
            </div>
        </div>
    </section>
  )
}

export default Subscribe;
