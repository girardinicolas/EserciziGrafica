import React from "react";
import mealsImage from "../assets/meals.jpg";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <img src={mealsImage} alt="Buffet di piatti del ristorante" className="hero-image" />
    </div>
  );
};

export default Hero;
