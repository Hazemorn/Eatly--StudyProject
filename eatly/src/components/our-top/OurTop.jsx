import React from 'react'
import s from './OurTop.module.scss'
import { ReactComponent as Arrow } from './arrow/arrow.svg';

const OurTop = ({title , children}) => {
  return (
    <section className={s.ourTop}>
        <div className="container">
          <div className={s.ourTop__content}>
                <h1 className={s.ourTop__title}>Our Top <span>{title}</span></h1>
              <div className={s.ourTop__cards}>
                {children}
              </div>
              <a className={s.ourTop__viewAll} href='#!'>
                <p>View all</p><Arrow className='arrow' width='20px'/>
              </a>
          </div> 
          <hr/>
        </div>
    </section>
  )
}

export default OurTop;
