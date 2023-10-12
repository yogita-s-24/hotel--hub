import React from 'react'
import './Button.css'
import { useState } from 'react'

export default function Button(btn) {
  return (
    <>
      <button className='btn'>{btn}</button>
    </>
  )
}

export function OutlineButton(btnOutline) {
  return (
    <button className='btn-outline'>{btnOutline}</button>
  )

}

export function MenuButton({menuBtn}) {
  let [main,setMain]= useState(0)


 
  

function mainfunction(){
  alert('This order is confirm  ')
  
}

  return (
    <button onClick={mainfunction}  className='btn'>{menuBtn}  </button>
  )
}





export function FootButton({footbtn}) {
  return (
    <button  className='btn-foot'>{footbtn}  </button>
  )
}

export function Menu(){
  alert("do you want");
}
 






