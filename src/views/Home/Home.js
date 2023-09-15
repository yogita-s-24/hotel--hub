import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import "./Home.css"

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
                    
                 </div>
                 <div className="card-2">
                    
                 </div>
           </div>
        </>
     )
}