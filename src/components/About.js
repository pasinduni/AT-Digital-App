import React from 'react'
import AboutImage1 from "../Assets/image 2.png";
import AboutImage2 from "../Assets/image 1.png";

const About = () => {
  return (
<div className="about-section-container">
      <div className="column-1">
        <div className="image-container">
          <img src={AboutImage1} alt="" />
        </div>
        <div className="text-container"> 
          <h3>Web & Mobile App Development</h3>
          <span>
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </span>
          <button className="button">learn more</button>
        </div>
      </div>
      <div className="column-2">
        <div className="image-container">
          <img src={AboutImage2} alt="" />
        </div>
        <div className="text-container">
        <h3>Digital Strategy Consulting</h3>
          <span>
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </span>
          <button className="button">learn more</button>
        </div>
      </div>
    </div>
  );
};

export default About