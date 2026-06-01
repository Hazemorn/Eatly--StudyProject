import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={'container'}>
          <div className={styles.header__nav}>
            <div className={styles.header__left}>
              <div className={styles.logo}>
                <img src='../images/logo.svg' alt='logo'/>
                <span>eatly</span>
              </div>
              <div className={styles.header__nav}>
                <nav>
                  <ul>
                    <li><a href='#!'>Menu</a></li>
                    <li><a href='#!'>Blog</a></li>
                    <li><a href='#!'>Pricing</a></li>
                    <li><a href='#!'>Contact</a></li>
                  </ul>
                </nav>  
              </div>
            </div>
              <div className={styles.header__btn}>
                  <button className={styles.login__btn}>Login</button>
                  <button className={styles.signUp__btn}>Sign Up</button>
              </div>
          </div>
          <hr className='line-separator'/>
        </div>
    </header>
    
  )
}

export default Header;
