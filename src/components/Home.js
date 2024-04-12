import React from 'react'
import Navbar from "./Navbar";
import BannerBackground from "../Assets/andy-kelly-0E_vhMVqL9g-unsplash 2.png";

const Home = () => {
    return (
        <div className="home-container">
          <Navbar />
    
          <div className="home-banner-container">
            <img src={BannerBackground} alt="" />
    
            <div className="home-text-section">
              <h1 className="primary-heading">
                we crush your competitors, goals, and sales records - without the
                b.s
              </h1>
              <button className="button">Get free consultation</button>
            </div>
          </div>
        </div>
      );
    };

export default Home