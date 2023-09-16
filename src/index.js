import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';

import Navbar from './components/Navbar/Navbar'
import Home from './views/Home/Home';
import Menu from './views/Menu/Menu';
import Blog from './views/Blog/Blog';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Login from './views/Login/Login';
import Sign from './views/Sign/Sign';


const router = createBrowserRouter ([
    {
      path:'/',
      element: <Home/>,
    },
    {
      path:'/menu',
      element:<Menu/>,
    },
    {
      path:'/blog',
      element:<Blog/>,
    },
    {
      path:'/about',
      element: <About/>,
    },
    {
      path:'/contact',
      element: <Contact/>,
    },
    {
      path:'/login',
      element: <Login/>,
    },
    {
      path:'/sign',
      element: <Sign/>,
    },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<RouterProvider router={router}/>


</>

);


