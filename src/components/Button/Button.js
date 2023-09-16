import React from 'react'
import './Button.css'

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
  return (
    <button  className='btn'>{menuBtn} </button>
  )
}
export function FootButton({footbtn}) {
  return (
    <button  className='btn-foot'>{footbtn} </button>
  )
}







