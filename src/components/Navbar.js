import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav>
    <div className="navbar-logo">
      <img src={Logo} alt="" />
    </div>
    <div className="navbar-links">
      <a href="">Services</a>
      <a href="">About Us</a>
      <a href="">Contact Us</a>
      <a href="">Careers</a>
    </div>
    <div className="navbar-menu-icon" onClick={toggleMenu}>
      {openMenu ? <HiX /> : <HiOutlineBars3 />}
    </div>
    {openMenu && (
      <div className="navbar-menu">
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Careers</a>
      </div>
    )}
  </nav>
);
};

export default Navbar;
