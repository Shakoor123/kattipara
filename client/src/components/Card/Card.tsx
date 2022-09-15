import React from "react";
import "./Card.css";
import net1 from "../../assets/net1.webp";
import click from "../../assets/click.png";
type cardProps = {
  thikness: number;
  size: number;
  img: string;
  mani: boolean;
  weight: number;
  foreign: boolean;
  price: number;
};
const Card = ({
  thikness,
  size,
  img,
  mani,
  weight,
  foreign,
  price,
}: cardProps) => {
  return (
    <div className="card">
      <div className="cardWrapper">
        <div className="cardTop">
          <img src={img} alt="" className="cardImage" />
        </div>
        <div className="cardBottom">
          <span className="thikNumber">Thikness:.{thikness}mm</span>
          <span className="HoleNumber">Hole size:{size}mm</span>
          <span className="price">Price:{price}</span>
          <span className="arrow">
            <img src={click} alt="" className="click" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
