import React from 'react'
import Button from '../Button/Button'

import { MenuButton } from '../Button/Button'
import { FootButton } from '../Button/Button'



import './Footer.css'



export default function Footer() {
  return (
    <>
   
   <div className='dis-flex'>
   <div className='foot-sub'>
   <h1>USEFULL LINKS</h1>
    <a className='foot-text'  href='#'>Accommodation </a> <br></br>
    <a className='foot-text' href='#'> Dining</a> <br></br>
    <a className='foot-text' href='#'>Experience </a><br></br>
    <a className='foot-text' href='#'>Occasions</a><br></br>
    <a className='foot-text' href='#'>Events</a><br></br>
   </div>

   <div className='foot-sub'>
    <h1> LINKS </h1>
    <a className='foot-text' href='#'>About Hotel </a><br></br>
    <a className='foot-text' href='#'> Location</a><br></br>
    <a className='foot-text' href='#'>Jobs & Career </a><br></br>
    <a className='foot-text' href='#'>Get in Touch</a><br></br>
    <a className='foot-text' href='#'>FAQ</a><br></br>
   </div>

   <div className='foot-sub'>
    <h1>G E T  I N  T O U C H </h1>
   <a className='foot-text' href="tel:9373700515"> <i class="fa-solid fa-phone fa-xl"></i> Toll Free-9373700515</a><br />
   <a className='foot-text' href="mailto:abhijeetbk154@gmail.com"> <i class="fa-solid fa-envelope fa-xl"></i>  Email -roomonrent@gmail.com </a> <br></br>
   <a className='foot-text' href='' > <i class="fa-solid fa-location-dot fa-xl"></i>  Address: Passeig de Gracia 21 </a>  <br></br><br></br>
   <div >
   <FootButton className='btn-reserve' footbtn={"RESERVE NOW "} />
   </div>
  <FootButton className='btn-reserve' footbtn={"RESERVE NOW "} />
   </div>
 
   <div className='foot-sub'>
    <h1>S U B S C R I B E  N E W S L E T T E R </h1>
    <div className='sub-new'>
      <input className='input-email' type='text' placeholder='Your Email ' />
      <span className='text-sub'> SUBSCRIBE NOW <i class="fa-solid fa-arrow-pointer fa-beat"></i></span>
    </div>
   </div>
   </div>
    </>
    
  )
}

