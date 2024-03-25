import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/fashion.jpg";
//import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/herobanner.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>Check our products</button>
          </Link>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
