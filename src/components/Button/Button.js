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
    <button onClick='("Do you want to confirm this order?")' className='btn'>{menuBtn} </button>
  )
}







