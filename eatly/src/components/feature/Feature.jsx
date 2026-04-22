import React from 'react';
import s from './Feature.module.css';

const Feature = (props) => {
  return (
    <div>
      <div className={s.feature}>  
            <h1>{props.title}</h1>
            <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Feature;
