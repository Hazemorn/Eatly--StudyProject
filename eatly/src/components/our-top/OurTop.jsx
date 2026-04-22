import React from 'react'
import s from './OurTop.module.css'
import { ReactComponent as Arrow } from './arrow/arrow.svg';

const OurTop = ({title , children}) => {
  return (
    <section className={s.ourTop}>
        <div className="container">
          <div className={s.top__content}>
                <h1 className={s.top__title}>Our Top <span>{title}</span></h1>
              <div className={s.cards}>
                {children}
              </div>
              <a className={s.view_all} href='#!'>
                <p>View all</p><Arrow className='arrow' width='20px'/>
              </a>
          </div> 
          <hr/>
        </div>
    </section>
  )
}

export default OurTop;