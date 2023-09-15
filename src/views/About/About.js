import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import ImageWelcome from "./About-imgs/welcome.png";
import ImageHotelbooking from "./About-imgs/hotelbooking.png"

export default function About() {
  return (
    <>
      <Navbar />
      <div><p className="heading">About us</p></div>

      <div className="container-about-main">
        <div className="container-about">
          <p className="text-about">5 STAR HOTEL IN DUBAI, UAE</p>
          <p className="heading-about">Welcome To The <br/> Hotel Royel
            Palace</p>
          <p className="text1-about">The Gage Hotel Offers Unforgettable Food And Drink Options. Enjoy Dinner At <br/>The Award-Winning</p>
          <img className="img-welcome"  src ={ImageWelcome} alt="welcome" />
        </div>

        <div className="container-about">
                <img  className="img-hotelbooking" src={ImageHotelbooking} alt="hotelbooking"/>
          
            </div>
        </div>
      </>
      );
}
