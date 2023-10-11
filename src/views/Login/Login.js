import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Menu() {
  const [datastore, setdatastore] = useState([]);
  const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log("name", name);
  console.log("password",password);

const addLoginData = () =>{

  const obj ={
    name:name,
    password:password
  }
  localStorage.setItem('LoginData',JSON.stringify(obj))


}

  

  return (
    <>
      <Navbar />
      <div className="login-main-container">
        <div className="login-card">
          <p className="heading-1">Login now!</p>

          <p className="heading-2">You can Login here</p>

          <input
            type="text"
            className="name-container"
            placeholder="Enter your name"
             value={name}
            onChange={(e)=>{
              setName(e.target.value);
            }}
            />

          <input
            type="email"
            className="name-container"
            placeholder="Enter your email"/>

          <input
            type="password"
            className="name-container"
            placeholder="Enter your password"
            value={password}
            onChange={(e)=>{

              setPassword(e.target.value);
            }}/>

         <input
            type=" conform"
            className="name-container"
            placeholder="Confirm your password"/> 
          <button type="submit" className="login-btn" onClick={addLoginData}>
            <b>Submit</b>
          </button>
          <p className="heading-2">Creat a new account ॽ </p>
          <Link className="login-sign" to="../../views/Sign/Sign.js">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
