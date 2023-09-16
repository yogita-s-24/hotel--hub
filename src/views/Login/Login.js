import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import {Link} from 'react-router-dom';
import './Login.css';

export default function Menu() {
  return (
    <>
    <Navbar/>
    <div className="login-main-container">
        <div className="login-card">
            <p className="heading-1">Login now!
            </p>
            <p className="heading-2">
                You can Login here
            </p>
          <input type="text" className="name-container" placeholder="Enter your name"> 
          </input>
           <input type="email" className="name-container" placeholder="Enter your email">
           </input>
           <input type="password" className="name-container" placeholder="Enter your password">
           </input>
           <input type=" conform" className="name-container" placeholder="Confirm your password">
           </input>
           <button type="submit" className="login-btn"><b>Submit</b></button>
           < p className="heading-2">Creat a new account ॽ </p>
           <Link className="login-sign" to="../../views/Sign/Sign.js">Sign Up</Link>
        </div>
    </div>
    </>
  )
}

