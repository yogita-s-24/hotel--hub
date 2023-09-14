import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
    <nav class="cont">
        <div class="logo">
            <header>
                <a href="#" class="logo">Royel-<strong>Hub</strong></a>
                <nav class="navbar">
                    {/* <Link to="#"></Link> */}
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/blog">Blogs</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>
         </div>
    </nav>
    </>
  );
}
