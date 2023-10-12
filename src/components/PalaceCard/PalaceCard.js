import React from 'react';
import "./PalaceCard.css";

export default function PalaceCard({image, title, year,}) {
    return (
        <div className='palacecard-container'>
            <div>
                <img className="palaceimage" src ={image} alt="palaceimages"/>
            </div>
            
        <p className='titlepalace'> {title} </p>
        <p className='priceyear'> {year} </p>


        </div>

    )
    }