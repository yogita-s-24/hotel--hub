import React from 'react'
import "./Card.css";


export default function Cards({star, image, title, price, button, night}) {
  return (
    <div className="card-container">
      <p >{star}</p>
      <p className='title-card'>{title} </p>
      <p><b className='price-card'>{price}</b> <span>{night}</span></p>
      <div>
      <img src={image} alt='room image' className='img-room' />
    </div>
    <button className='btn-buynow'>{button} <i class="fa-solid fa-arrow-right fa-xl"></i></button>
    </div>
  )
}