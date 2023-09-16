import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css"
// import Card from "../../components/Card/Card"
// import Button from "../../components/Button/Button"
export default function Home(){
     return(
        <>
        <Navbar/>
           <div className="top-view">
              <p className="text">THE NEW GENERATION OF LUXUARY</p>
              <p className="text-home">
                WELCOME TO THE ROYLE: <br/>
                A HAVEN OF LUXUARY AND SERENITY
              </p>
              <button className="btn">
               Check 
              </button>
           </div>
           <div className="icon-contanier">
            <div className="sub">
                 <img src="https://cdn-icons-png.flaticon.com/128/2962/2962303.png" alt="" className="icon"/>
                  <p className="icon-name">Pickup & Drop</p>
            </div>
            <div className="sub">
                 <img src="https://cdn-icons-png.flaticon.com/128/2830/2830180.png" alt="" className="icon"/>
                 <p className="icon-name">Parking</p>
            </div>
            <div className="sub">
                 <img src="https://cdn-icons-png.flaticon.com/128/985/985505.png"alt="" className="icon"/>
                 <p className="icon-name">Breakfast</p>
            </div>
            <div className="sub">
                 <img src="https://cdn-icons-png.flaticon.com/128/2784/2784593.png"alt="" className="icon"/>
                 <p className="icon-name">Swimming Pool</p>
            </div>
            <div className="sub">
                 <img src="https://cdn-icons-png.flaticon.com/128/2972/2972473.png" alt="" className="icon"/>
                 <p className="icon-name">Fibre Internet</p>
            </div>
            <div className="sub">
                 <img src="https://cdn-icons-png.flaticon.com/128/5229/5229154.png" alt="" className="icon"/>
                 <p className="icon-name">Bar & Bbq</p>
            </div>
           </div>

           <div className="contanier-home">
                 <div className="card-1">
                 <p className='Home-text'> 5 STAR HOTEL IN DUBAI, UAE</p>
                 <p className='card1-text'>
                 Welcome To The <br/>
                  Hotel Royel Palace
                 </p>
                 <p className='Home-text' style={{marginTop:'2rem'}} >
                 The Gage Hotel Offers Unforgettable Food And Drink Options. Enjoy Dinner At The Award-Winning
                 </p>
                 <img src="https://royel-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwelcome.4c788016.jpg&w=640&q=75" className='card1-img'/>
                 </div>
                 <div className="card-2">
                    <div className='sub-card2 bg-color-subcard1 ex-mar'>
                        
                    </div>
                    <div className='sub-card2 bg-color-subcard2'>
                         <a href='tel:7563858453'> Contact:7563858453</a>
                    </div>
                 </div>
           </div>






        </>
     )
}