import React from 'react'
import "./ScrolloingCard.css"


export default function ScrolloingCard({discription ,title,image})
{
   return (
    <>
      <div className="card-wrapper">
  <div className="card-top">
    <img src={image}  className="image" alt="" />
  </div>
   
  <div className="card-bottom">
    <span class="top-text">{title}</span><br/>
   <span class="bottom-text"> {discription} </span>
    <br/>
    <button class="button">Join Us</button>
  </div>
</div>
    </>
   )
}