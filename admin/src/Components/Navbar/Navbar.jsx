import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/fashion.jpg";
import navprofile from "../../assets/Ayo picture.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" alt="" />
      <img src={navprofile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
