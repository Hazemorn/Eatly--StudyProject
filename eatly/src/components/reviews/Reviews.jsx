import React, {useContext} from "react";
import s from "./Reviews.module.css";
import Review from '../review/Review'
import { AppContext } from '../../pages/Homepage.jsx';

const Reviews = () => {

  const {customers} = useContext(AppContext);

  return (
    <section>
      <div className="container">
        <div className={s.review__content}>
          <h1 className={s.review__title}>
            <span>Customer</span> Say
          </h1>
          <div className={s.cards}>
            {customers.map((customer) =>
              <Review img={customer.img} name={customer.name} info={customer.info} text={customer.text}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
