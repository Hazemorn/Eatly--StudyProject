import React, {createContext} from 'react'
import Header from '../components/header/Header';
import s from '../styles/homepage.module.css';
import Feature from '../components/feature/Feature';
import OurTop from '../components/our-top/OurTop';
import Dish from '../components/dish/Dish'
import Restaurant from '../components/restaurant/Restaurant'
import ControlPurchase from '../components/control-purchase/ControlPurchase';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../components/footer/Footer';
import Reviews from '../components/reviews/Reviews'

export const AppContext = createContext([]);

const Homepage = () => {
 

  const feature = [
    {id: 1, title: '10K+', text: 'Satisfied Costumers All Great Over The World'},
    {id: 2, title: '4M', text: 'Healthy Dishes Sold Including Milk Shakes Smooth'},
    {id: 3, title: '99.99%', text: 'Reliable Customer Support We Provide Great Experiences'}
  ];

  const restaurants = [
    {id: 1 ,img:'../../homepage-image/our-top-restaurants/chicken-king.png', highlight: 'Healthy', title: 'The Chicken King', min: '24min •', rate: '4.8'},
    {id: 2, img:'../../homepage-image/our-top-restaurants/burger-king.png', highlight: 'Trending', title: 'The Burger King', min: '24min •', rate: '4.9'},
    {id: 3 ,img:'../../homepage-image/our-top-restaurants/chicken-king.png', highlight: 'Healthy', title: 'The Chicken King', min: '24min •', rate: '4.8'}
  ];

  const dishes = [
    {id: 1 ,img:'../../homepage-image/our-top-dishes/chicken-hell.png', highlight: 'Healthy', title: 'Chicken Hell', min: '24min •', rate: '4.8', price: 12.99},
    {id: 2 ,img:'../../homepage-image/our-top-dishes/swe-dish-01.png', highlight: 'Trending', title: 'Swe Dish', min: '34min •', rate: '4.9', price: 19.99},
    {id: 3 ,img:'../../homepage-image/our-top-dishes/swe-dish-02.png', highlight: 'Supreme', title: 'Swe Dish', min: '24min •', rate: '4.9', price: 19.99},
    {id: 4 ,img:'../../homepage-image/our-top-dishes/chicken-hell.png', highlight: 'Healthy', title: 'Chicken Hell', min: '24min •', rate: '4.8', price: 12.99},
    {id: 5 ,img:'../../homepage-image/our-top-dishes/swe-dish-01.png', highlight: 'Trending', title: 'Swe Dish', min: '24min •', rate: '4.9', price: 19.99}
  ];

  const customers = [
    {id: 1, img:'../../homepage-image/customers/Alexander R.png', name: 'Alexander R.', info: '01 Year With Us ', text: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', rate: '../../homepage-image/hero/stars.svg'},
    {id: 2, img:'../../homepage-image/customers/Alexander R.png', name: 'Ryan X.', info: '03 Year With Us ', text: `“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer...  ”`, rate: '../../homepage-image/hero/stars.svg'},
    {id: 3, img:'../../homepage-image/customers/Alexander R.png', name: 'Jacob P.', info: '02 Year With Us ', text: `“ There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable ”`, rate: '../../homepage-image/hero/stars.svg'}
  ];


  return (
    <>
      <Header/>
      <section className={s.hero}>
      <div className={'container'}>
        <div className={s.hero__content}>
          <div className={s.hero__text}>
            <div className={s.hero__info_addit}>
                <hr/>
                <h2>over 1000 users</h2>
            </div>
            <h1>
              Enjoy Foods All Over The <span>World</span>
            </h1>
            <p>
              EatLy help you set saving goals, earn cash back offers, Go to
              disclaimer for more details and get paychecks up to two days
              early. Get a <span>$20 bonus</span>.
            </p>
            <div className={s.hero__btn}>
              <button className={s.get_started__btn}>Get Started</button>
              <button className={s.go_pro__btn}>Go Pro</button>
            </div>
            <div className={s.trustpilot__text}>
              <div className={s.trustpilot__left}>
                <img src="/homepage-image/hero/star-vector.svg" alt="star_img" />
                <h3>Trustpilot</h3>
              </div>
              <div className={s.trustpilot__right}>
                <img src="/homepage-image/hero/stars.svg" alt="stars_img"/>
                <span>4900+</span>
              </div>
            </div>
          </div>
          <div className={s.hero__image}>
            <img src="/homepage-image/hero/hero.png" alt="hero_img" />
          </div>
        </div>
      </div>
    </section>

    <section className={s.features}>
        <div className='container'>
            <div className={s.features__content}>
                <div><Feature title={feature[0].title} text={feature[0].text}/> <hr/></div>
                <div><Feature title={feature[1].title} text={feature[1].text}/> <hr/></div>              
                <Feature title={feature[2].title} text={feature[2].text}/>
            </div>
        </div>
    </section>

    <section className={s.mobile_app}>
        <div className='container'>
            <div className={s.mobile__content}>
                <div className={s.mobile__img}>
                  <img src='../../../homepage-image/download-app/mobile.png' alt='telephone'/>
                </div>
                <div className={s.mobile__info}>
                    <div className={s.mobile__header}>
                      <h1>Premium <span>Quality</span> For Your Health</h1>
                    </div>
                  
                    <ul className={s.mobile__text}>
                      <li>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                      <li>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                    </ul>
        
                    <button className={s.mobile__btn}>
                      <p>Download</p><img src='../../../homepage-image/download-app/arrow.svg' alt='arrow'/>
                    </button>
                    <img className={s.twisted_arrow} src='../../../homepage-image/download-app/arrow-vector.png' alt='twisted arrow'/>
                </div> 
            </div>
            <hr/>
        </div>
    </section>
    <OurTop title="Restaurants">
    {restaurants.map((restaurant)=>
        <Restaurant img={restaurant.img} highlight={restaurant.highlight} title={restaurant.title} time={restaurant.min} rate={restaurant.rate}/>
    )}
    </OurTop>
    <OurTop title="Dishes">
        {dishes.map ((dish) => 
          <Dish img={dish.img} highlight={dish.highlight} title={dish.title} time={dish.min} rate={dish.rate} price={dish.price}/>
      )}
    </OurTop>
    <ControlPurchase/>
    <AppContext.Provider value={{customers: customers}}>
      <Reviews/>
    </AppContext.Provider>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default Homepage;