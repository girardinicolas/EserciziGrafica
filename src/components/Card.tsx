import React from "react";
import "./card.css";

interface CardProps {
  title: string;
  description1: string;
  description2: string;
}

const Card: React.FC<CardProps> = ({ title, description1, description2 }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description1}</p>
      <p>{description2}</p>
    </div>
  );
};

export default Card;
