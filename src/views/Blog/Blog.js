import React from 'react';
import './Blog.css';
import Navbar from '../../components/Navbar/Navbar';
import BlogCard from '../BlogCard/BlogCard';
import { BlogLogo } from '../BlogCard/BlogCard';
import Image1 from '../../views/Blog/Image-1.jpg';
import Image2 from '../../views/Blog/Image-2.jpg';
import Image3 from '../../views/Blog/Image-3.jpg';
import Image4 from '../../views/Blog/Image-4.jpg';
import Image5 from '../../views/Blog/Image-5.jpg';
import Image6 from '../../views/Blog/Image-6.jpg';
import Image7 from '../../views/Blog/Image-7.jpg';
import Image8 from '../../views/Blog/Image-8.jpg';
import ImageA from '../Blog/Images/img-a.png';
import ImageM from '../Blog/Images/img-m.png';
import ImageR from '../Blog/Images/img-r.png';
import ImageS from '../Blog/Images/img-s.png';
import ImageT from '../Blog/Images/img-t.png';
import ImageW from '../Blog/Images/img-w.png';

export default function Blog() {
  return (
    <>
    <Navbar/>
        <p className="heading-1">Blog</p>
        <div className="search-box">
         <label className="search-label">Search by Keyword</label>
         <br></br>
         <input type="text" className="search-container" placeholder="Type here...">
         </input>
        </div>
      <div className="card-content">
      <BlogCard images={Image1} title={"The Ultimate Guide To Choosing The Perfect Hotel For Your Vacation"} />
      <BlogCard images={Image2} title={"Insider Tips For Getting The Best Deals And Upgrades"} />
      <BlogCard images={Image3} title={"We're Changing The Future Of Travel, Watch The Steps"}/>
      <BlogCard images={Image4} title={"They Have Specialized Blogs In Their Different Destinations."} />
      <BlogCard images={Image5} title={"Some Of The Hill Stations Near Ramesh Waram That One"} />
      <BlogCard images={Image6} title={"Unique Boutique Hotels That Capture The Essence"} />
      </div>
      <div className="logos-container">
        <BlogLogo Images={ImageT}/>
        <BlogLogo Images={ImageS}/>
        <BlogLogo Images={ImageM}/>
        <BlogLogo Images={ImageA}/>
        <BlogLogo Images={ImageW}/>
        <BlogLogo Images={ImageR}/>
      </div>
    </>
  )
}

