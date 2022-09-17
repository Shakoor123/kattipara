import React, { useState } from "react";
import "./SingleProduct.css";
import net1 from "../../assets/net1.webp";
import kadiyal from "../../assets/kadiyal.jpeg";
import manis from "../../assets/mani.jpeg";
import phone from "../../assets/phone.png";
import whatsapp from "../../assets/whatsapp.png";
import { Link } from "react-router-dom";
type productProps = {
  thikness: number;
  size: number;
  img: string;
  mani: boolean;
  weight: number;
  foreign: boolean;
  price: number;
};
const SingleProduct = ({
  thikness,
  size,
  img,
  mani,
  weight,
  foreign,
  price,
}: productProps) => {
  const [iyyam, setIyyam] = useState(true);
  return (
    <div className="product">
      <div className="productLeft">
        <img src={img} alt="" className="productImage" />
      </div>
      <div className="productRight">
        <div className="productInfo">
          <h1 className="productTitle">Product Details</h1>
          <span className="productThikness">Thickness : {thikness}mm </span>
          <span className="productSize">Size : {size}mm </span>
          <div className="weght">
            <span className="wheightType">Weight Type : </span>
            {mani ? (
              <img src={manis} alt="" className="weightImage" />
            ) : (
              <img src={kadiyal} alt="" className="weightImage" />
            )}
          </div>
          <span className="totalweight">Weight : {weight}kg</span>
          <span className="totalweight">Foreign :{foreign ? "YES" : "NO"}</span>

          <span className="price">
            RS : {price}/- <s className="offer">{price + 500}</s>
          </span>
          <span className="anauncement">
            If You want Item Contact Whatsapp Or Phone.
          </span>
          <div className="contacts">
            <a href="https://wa.me/+918156806998">
              <img src={whatsapp} alt="" className="contact" />
            </a>
            <a href="tel:+918714860998">
              <img src={phone} alt="" className="contact" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
