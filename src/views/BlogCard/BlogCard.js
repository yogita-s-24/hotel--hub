import React from 'react'
import './BlogCard.css';
export default function BlogCard( {images ,title }) {
  return (
    <>
    
    <div className="blogCart-container">
      <div className="blogcart-imges">
        <img className='blogcard-img' src={images} />
      </div>
      <div >
        <p className="card-text">
          {title}
        </p>
      </div>
     
    </div>
    </>
  )
}
export  function BlogLogo ({Images}){
  return(
    <>
    <div className="Blog-Logo">
      <img className="Blog-Logo-img" src={Images} />
    </div>
    </>
  )
}

