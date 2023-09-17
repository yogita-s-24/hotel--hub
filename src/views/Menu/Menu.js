import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import FoodCard from '../../components/FoodCard/FoodCard';
import Footer from '../../components/Footer/Footer';
import Card from './../../components/Card/Card'
import './Menu.css';

export default function Menu() {
  return (
    <>
    <Navbar/>
    
       <div className='img-first'>
        
       </div>
        <div className='poster-food'>
            <p className='text-poster col-golden'>Pushing The Work <br/>
            And The World Forward</p>

            <img src='https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.ec6369bb.jpg&w=1920&q=75' className='img-poster' alt='image'/>
            <p className='normal-text '>We partner with content-driven tech startups to make them independent of their IT and empower them <br/> with a future-proof and scalable website. agenzia is the leading 3PL operator of the entire Central Asia, <br/> and the largest operator of the network of industrial logistic parks.</p>

        </div> 
        <p className='text-center font-20'>Food Menu</p>
        <p className='text-poster text-center col-golden'>Delicious Food Forever</p>
        <h1 className='text-center'>Salads</h1>
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-1.8cbb0f81.png&w=256&q=75"} titlt={"Greek Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹299"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-2.df9ec1a2.png&w=256&q=75"} titlt={"Cobb Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹149"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-3.6e070adf.png&w=256&q=75"} titlt={"Caprese Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹199"} />
        </div>
        
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-4.bac28e7a.png&w=256&q=75"} titlt={"Waldorf Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹249"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsalads-1.8cbb0f81.png&w=256&q=75"} titlt={"Caesar Salad"} description={"Romaine lettuce, croutons, parmigia"} price={"₹269"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-2.9fbc6432.png&w=256&q=75"} titlt={"Chocolate Lava Cake"} description={"Romaine lettuce, croutons, parmigia"} price={"₹399"} />
        </div>

        <h1 className='text-center'>Main Dish</h1>
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-2.2afd888e.png&w=256&q=75"} titlt={"Beef Bourguignon"} description={"Romaine lettuce, croutons, parmigia"} price={"₹299"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-3.839b00be.png&w=256&q=75"} titlt={"Spaghetti Bolognese"} description={"Romaine lettuce, croutons, parmigia"} price={"₹149"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-4.6be39cb6.png&w=256&q=75"} titlt={"Butter Chicken"} description={"Romaine lettuce, croutons, parmigia"} price={"₹199"} />
        </div>
        
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-5.f3e54cbd.png&w=256&q=75"} titlt={"Grilled Salmon"} description={"Romaine lettuce, croutons, parmigia"} price={"₹249"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-3.839b00be.png&w=256&q=75"} titlt={"Vegetable Pad Thai"} description={"Romaine lettuce, croutons, parmigia"} price={"₹269"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-1.695a47a6.png&w=256&q=75"} titlt={"Beef Tenderloin"} description={"Romaine lettuce, croutons, parmigia"} price={"₹399"} />
        </div>

        <h1 className='text-center'>Dassert</h1>
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-2.9fbc6432.png&w=256&q=75"} titlt={"Chocolate Lava Cake"} description={"Romaine lettuce, croutons, parmigia"} price={"₹299"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-3.8c1962ce.png&w=256&q=75"} titlt={"Apple Pie"} description={"Romaine lettuce, croutons, parmigia"} price={"₹149"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-4.784d637e.png&w=256&q=75"} titlt={"Creme Burlee"} description={"Romaine lettuce, croutons, parmigia"} price={"₹199"} />
        </div>
        
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-5.bfeb4d51.png&w=256&q=75"} titlt={"Tiramiu"} description={"Romaine lettuce, croutons, parmigia"} price={"₹249"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstatars-1.4dbf0993.png&w=256&q=75"} titlt={"Fruit Tart"} description={"Romaine lettuce, croutons, parmigia"} price={"₹269"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdessert-2.9fbc6432.png&w=256&q=75"} titlt={"Lemon Meringue Taet"} description={"Romaine lettuce, croutons, parmigia"} price={"₹399"} />
        </div>

        <h1 className='text-center'>Main Dish</h1>
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstatars-2.6635959a.png&w=256&q=75"} titlt={"Bruschetta"} description={"Romaine lettuce, croutons, parmigia"} price={"₹299"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstatars-2.6635959a.png&w=256&q=75"} titlt={"Spaghetti Bolognese"} description={"Romaine lettuce, croutons, parmigia"} price={"₹149"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-4.6be39cb6.png&w=256&q=75"} titlt={"Chicken Satay"} description={"Romaine lettuce, croutons, parmigia"} price={"₹199"} />
        </div>
        
        <div className='box-1'>
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstatars-4.94ebc302.png&w=256&q=75"} titlt={"Spinach And Artichoke"} description={"Romaine lettuce, croutons, parmigia"} price={"₹249"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstatars-5.051572f6.png&w=256&q=75"} titlt={"Vegetable Spring Roll"} description={"Romaine lettuce, croutons, parmigia"} price={"₹269"} />
        <FoodCard imageurl={"https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-dish-1.73c056e0.png&w=256&q=75"} titlt={"Shrimp Cocktail"} description={"Romaine lettuce, croutons, parmigia"} price={"₹399"} />
        </div>
        <Card title={"hgdjhgjfdjshfjh" } image={"https://tse4.mm.bing.net/th?id=OIP.F1RqVfr_iq8GmEeb0T6A4QHaJu&pid=Api&P=0&h=180" } star={"bjhdfhasfh" } price={ "₹ 544"} night={"OFF 50%"} button={"buy now"}/>
        <Footer/>
    </>
  )
}

