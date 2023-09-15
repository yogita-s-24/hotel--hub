import React from 'react'
import './Button.css'

export default function Button() {
  return (
    <>
      <button className='btn'> Normal Button</button>
    </>
  )
}
export function OutlineButton() {
  return (
    <button className='btn-outline'> OutlineButton</button>
  )

}