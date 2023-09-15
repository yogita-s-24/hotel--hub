import React from 'react'
import "./FoodCard.css";


export default function FoodCard({imageurl, titlt, description, price}) {

  return (
    <a href='' onClick={console.log("Do You Want To Conform this Order")} className='open-next'>
     <div className="food-container">
     <img src={imageurl} alt='food image' className='img-food'/>
     <p className='heding-food'>{titlt}</p>
     <p className='text-food' >{description}</p>
     <p className='price-food'><b>{price}</b></p>
    </div>/
    </a>
    
  )
}
