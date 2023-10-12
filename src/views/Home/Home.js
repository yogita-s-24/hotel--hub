import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css"
import Footer from "../../components/Footer/Footer"
import Card from "../../components/Card/Card"
import ScrolloingCard from "../../components/ScrolloingCard/ScrolloingCard"
import Swmming from './Images/Swimming.jpg'
import Sauna from './Images/Sauna.jpg'
import Gym from './Images/gym.jpeg'
import Steam from './Images/steam-room.jpg'
import Golf from './Images/Golf-Course.jpg'
import Tennis from './Images/Tennis.jpg'
import FoodCard from '../../components/FoodCard/FoodCard'
export default function Home() {
     return (
          <>
               <Navbar />
               <div className="top-view">
                    <p className="text">THE NEW GENERATION OF LUXUARY</p>
                    <p className="text-home">
                         WELCOME TO THE ROYLE: <br />
                         A HAVEN OF LUXUARY AND SERENITY
                    </p>
                    <button className="btn">
                         Check
                    </button>
               </div>
               <div className="icon-contanier">
                    <div className="sub">
                         <img src="https://cdn-icons-png.flaticon.com/128/2962/2962303.png" alt="" className="icon" />
                         <p className="icon-name">Pickup & Drop</p>
                    </div>
                    <div className="sub">
                         <img src="https://cdn-icons-png.flaticon.com/128/2830/2830180.png" alt="" className="icon" />
                         <p className="icon-name">Parking</p>
                    </div>
                    <div className="sub">
                         <img src="https://cdn-icons-png.flaticon.com/128/985/985505.png" alt="" className="icon" />
                         <p className="icon-name">Breakfast</p>
                    </div>
                    <div className="sub">
                         <img src="https://cdn-icons-png.flaticon.com/128/2784/2784593.png" alt="" className="icon" />
                         <p className="icon-name">Swimming Pool</p>
                    </div>
                    <div className="sub">
                         <img src="https://cdn-icons-png.flaticon.com/128/2972/2972473.png" alt="" className="icon" />
                         <p className="icon-name">Fibre Internet</p>
                    </div>
                    <div className="sub">
                         <img src="https://cdn-icons-png.flaticon.com/128/5229/5229154.png" alt="" className="icon" />
                         <p className="icon-name">Bar & Bbq</p>
                    </div>
               </div>

               <div className="contanier-home">
                    <div className="card-1">
                         <p className='Home-text'> 5 STAR HOTEL IN DUBAI, UAE</p>
                         <p className='card1-text'>
                              Welcome To The <br />
                              Hotel Royel Palace
                         </p>
                         <p className='Home-text' style={{ marginTop: '2rem' }} >
                              The Gage Hotel Offers Unforgettable Food And Drink Options. Enjoy Dinner At The Award-Winning
                         </p>
                         <img src="https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwelcome.4c788016.jpg&w=640&q=75" className='card1-img' />
                    </div>
                    <div className="card-2">
                         <div className='sub-card2 bg-color-subcard1 ex-mar'>
                              <p>
                              Explore Workspace Planners's board "bed rooms", followed by 463 people on Pinterest. See more ideas about bedroom design, bedroom interior, ..
                              </p>
                         </div>
                         <div className='sub-card2 bg-color-subcard2'>
                              <a href='tel:7563858453'> Contact:7563858453</a>
                         </div>
                    </div>
               </div>

               <div className='home-details'>
                   <div className='home-contanier'>
                    <Card title="Queen Deluxe Room" image="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" button="Book Now" star="Rating:-4.5" price="₹ 5000" night={"off 50%"}/>
                    <Card title="Couple Sea View Room" image="https://www.bhg.com/thmb/hG7_GX5I0I-8i-ZgvCOCosObvE8=/1244x0/filters:no_upscale():strip_icc()/bedroom-wooden-accent-wall-9KdgK5zqKcz9ukcu6xy1Hx-c1217ee14b1b43e0ae82ec2046743af5.jpg" button="Book Now" star="Rating:-4.5" price="₹ 7000" night={"off 20%"}/>
                    <Card title="Junior Suites Room" image="https://assets.architecturaldigest.in/photos/63dcd0d043759bc4edc842c1/master/pass/11%20minimalist%20bedroom%20design%20tricks%20to%20create%20a%20calming%20space.jpg" button="Book Now" star="Rating:-4.5" price="₹ 3000" night={"off 30%"}/>
                    </div>
                   <div className='home-contanier'>
                    <Card title="Master Suite Room" image="https://media.designcafe.com/wp-content/uploads/2021/04/28110847/middle-class-indian-bedroom-design.jpg" button="Book Now" star="Rating:-4.5" price="₹ 10000" night={"off 10%"}/>
                    <Card title="Superior Site Room" image="https://www.thespruce.com/thmb/RqIfxrr0S39uL_MvDSBDVLglOKg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/stunning-master-bedroom-design-ideas-4125545-hero-5782adcdc758407b884d92da7dbcbcbd.jpg" button="Book Now" star="Rating:-4.5" price="₹ 8000" night={"off 40%"}/>
                    <Card title="Premiere Deluxe Room" image="https://foyr.com/learn/wp-content/uploads/2019/01/master-bedroom.png" button="Book Now" star="Rating:-4.5" price="₹ 1000" night={"off 70%"}/>
                    </div>
                  
               </div>
               <div className='home-mid-text-container'>
                     <p className='home-mid-text-container-text'>
                      <p className='Home-text-mid'>Book Now</p>
                      <p className='text-home-mid'>
                      Welcome To Royel Palace Hotel <br/>
                         Book Your Stay Today.
                      </p>
                      </p>
               </div>



               <section>
  <div class="cards-wrapper">
    <div class="card"> <ScrolloingCard  title={"Swimming Pool"} discription={"A swimming pool, swimming bath, wading pool, paddling pool, or simply pool, is a structure designed to hold water to enable swimming or other leisure ..."} image={Swmming} /></div>
    <div class="card"> <ScrolloingCard  title={"Fitness Center"} discription={"A gym, short for gymnasium ( PL : gymnasiums or gymnasia), is an indoor venue for exercise and sports. The word is derived from the ancient Greek term ..."} image={Gym} /></div>
    <div class="card"> <ScrolloingCard  title={"Sauna"} discription={"The first Finnish saunas were always of a type now called savusauna; smoke sauna. These differed from present-day saunas in that they were operated by heating ..."} image={Sauna} /></div>
    <div class="card"> <ScrolloingCard  title={"Steam Room"} discription={"Skin health. Both steam rooms and saunas will make a person sweat due to the heat. The sweating opens up the pores and helps cleanse the outer skin."} image={Steam} /></div>
    <div class="card"> <ScrolloingCard  title={"Golf Course"} discription={"A golf course is the grounds on which the sport of golf is played. It consists of a series of holes, each consisting of a tee box, a fairway, the rough and ..."} image={Golf} /></div>
    <div class="card"> <ScrolloingCard  title={"Tennis Court"} discription={"A tennis court is the venue where the sport of tennis is played. It is a firm rectangular surface with a low net stretched across the centre."} image={Tennis} /></div>
    
   
  </div>
</section>

   
    <div className='Home-cardMenu'>
        <p className='home-foodMenu-text'>Food Menus</p>  
        <p className='home-foodMenu-text-1'>
          Delicious Food Forever
        </p>
        <div className='cards-wrapper'>
        <div className='card'> <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-1.8cbb0f81.png&w=256&q=75"} titlt={"Greek Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹299"} />
        </div>
        <div className='card'>  <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-2.df9ec1a2.png&w=256&q=75"} titlt={"Cobb Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹149"} />
        </div>
        <div className='card'>   <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-3.6e070adf.png&w=256&q=75"} titlt={"Caprese Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹199"} />
        </div>
        <div className='card'>  <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-4.bac28e7a.png&w=256&q=75"} titlt={"Waldorf Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹249"} />
        </div>
        <div className='card'>  <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-1.8cbb0f81.png&w=256&q=75"} titlt={"Caesar Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹269"} />
        </div>
        <div className='card'>  <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-2.9fbc6432.png&w=256&q=75"} titlt={"Chocolate Lava Cake"} description={"Romaine lettuce, croutons, parmigia"} price={"₹399"} />
        </div>
        <div className='card'>   <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-2.2afd888e.png&w=256&q=75"} titlt={"Beef Bourguignon"} description={"Romaine lettuce, croutons, parmigia"} price={"₹299"} />
        </div>
        <div className='card'>   <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-3.839b00be.png&w=256&q=75"} titlt={"Spaghetti Bolognese"} description={"Romaine lettuce, croutons, parmigia"} price={"₹149"} />
        </div>
        <div className='card'>  <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-4.6be39cb6.png&w=256&q=75"} titlt={"Butter Chicken"} description={"Romaine lettuce, croutons, parmigia"} price={"₹199"} />
        </div>
        <div className='card'> <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-5.f3e54cbd.png&w=256&q=75"} titlt={"Grilled Salmon"} description={"Romaine lettuce, croutons, parmigia"} price={"₹249"} />
        </div>
        </div>
    
     </div>    



<Footer/>
          </>
     )
}