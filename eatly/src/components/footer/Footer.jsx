import React from 'react'
import s from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className={s.footer__top}>
                <div className={s.logo}>
                    <img src='../images/logo.svg' alt='logo'/>
                    <span>eatly</span>
                </div>
                <div className={s.footer__nav}>
                    <nav>
                        <ul>
                            <li><a href='#!'>Blog</a></li>
                            <li><a href='#!'>Pricing</a></li>
                            <li><a href='#!'>About Us</a></li>
                            <li><a href='#!'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr/>
            <div className={s.footer__bottom}>
                <div className={s.footer__license}>
                    © 2026 EATLY All Rights Reserved.
                </div>
                <div className={s.footer__socials}>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src='../homepage-image/socials/instagram.svg' alt='intasgram'/>
                    </a> 
                    <a href="https://linkedIn.com" target="_blank" rel="noopener noreferrer">
                        <img src='../homepage-image/socials/linkedIn.svg' alt='linkedIn'/>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src='../homepage-image/socials/facebook.svg' alt='facebook'/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src='../homepage-image/socials/twitter.svg' alt='twitter'/>
                    </a>
                </div>
            </div>
           
        </div>
    </footer>
  )
}

export default Footer;


