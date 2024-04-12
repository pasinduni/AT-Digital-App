import React from "react";
import Logo from "../Assets/Logo.png"
import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Services",
    },
    {
      text: "About Us",
    },
    {
      text: "Contact Us",
    },
    {
      text: "Careers",
    },
  ];

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
      <div className="navbar-menu">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
