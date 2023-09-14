import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Navbar/>
 <Home/>
 </>
);


