import React from 'react'
import Logo from "../Assets/Logo.png";

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    <img src={Logo} alt="" />
                    <p>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
                </div>
            </div>
    
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span className='header'>Our Technologies</span>
                    <span>ReactJS</span>
                    <span>Gatsby</span>
                    <span>NextJS</span>
                    <span>NodeJS</span>
                </div>
                <div className="footer-section-columns">
                    <span className='header'>Our Services</span>
                    <span>Social Media Marketing</span>
                    <span>Web % Mobile App Development</span>
                    <span>Data & Analytics</span>
                    <span>NodeJS</span>
                </div>
            </div>
        </div>
      )
    }

export default Footer