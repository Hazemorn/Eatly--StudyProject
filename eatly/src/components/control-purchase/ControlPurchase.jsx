import React from 'react'
import s from './ControlPurchase.module.css'
import ControlCard from '../control-card/ControlCard'

const ControlPurchase = () => {
  return (
    <section>
        <div className="container">
            <div className={s.controlPurchase}>
              <div className={s.purchase__content}>
                  <div className={s.purchase__header}>
                      <h1>Control <span>Purchases</span> Via Dashboard</h1>
                      <ControlCard/>
                  </div>
                  <div></div>
                </div>
                <div className={s.purchase_illustration__card}>
                  <div className={s.purchase_illust__header}>
                    <h1>Purchases</h1>
                    <div className={s.limit__selector}>
                          <p>This month</p><img src='../../../homepage-image/control-purchase/chevron-down.svg'/>
                      </div>
                  </div>
                  <div className={s.card__item}>
                    <div className={s.card__content}>
                        <div className={s.card__name}>
                          <img src='../../../homepage-image/control-purchase/icon.svg'/>
                            <div className={s.card__text}>
                              <h1>Expense</h1>
                              <p>Increased By 10%</p>
                            </div>
                        </div>
                        <h1>$409.00</h1>
                    </div>
                    <div className={s.line__one} />
                  </div>
                  <div className={s.card__item}>
                    <div className={s.card__content}>
                      <div className={s.card__name}>
                        <img src='../../../homepage-image/control-purchase/icon2.svg'/>
                        <div className={s.card__text}>
                          <h1>Vocher Usage</h1>
                          <p>Increased By 5%</p>
                        </div>
                      </div>
                        <h1>$45.78</h1> 
                    </div>
                    <div className={s.line__two} />
                  </div>
                </div>
            </div>
            <hr/>
        </div>
    </section>
  )
}

export default ControlPurchase;