import React, { useState } from "react";
import "./SingleProduct.css";
import net1 from "../../assets/net1.webp";
import kadiyal from "../../assets/kadiyal.jpeg";
import mani from "../../assets/mani.jpeg";
import phone from "../../assets/phone.png";
import whatsapp from "../../assets/whatsapp.png";

const SingleProduct = () => {
  const [iyyam, setIyyam] = useState(true);
  return (
    <div className="product">
      <div className="productLeft">
        <img src={net1} alt="" className="productImage" />
      </div>
      <div className="productRight">
        <div className="productInfo">
          <h1 className="productTitle">Product Details</h1>
          <span className="productThikness">Thickness : .23mm </span>
          <span className="productSize">Size : 32mm </span>
          <div className="weght">
            <span className="wheightType">Weight Type : </span>
            {iyyam ? (
              <img src={mani} alt="" className="weightImage" />
            ) : (
              <img src={kadiyal} alt="" className="weightImage" />
            )}
          </div>
          <span className="totalweight">Weight : 3kg</span>
          <span className="totalweight">Foreign : NO</span>

          <span className="price">
            RS : 3500/- <s className="offer">4000</s>
          </span>
          <span className="anauncement">
            If You want Item Contact Whatsapp Or Phone.
          </span>
          <div className="contacts">
            <img src={whatsapp} alt="" className="contact" />
            <img src={phone} alt="" className="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
