import React from "react";
import "./ProductList.css";
import net1 from "../../assets/net1.webp";

const ProductList = () => {
  return (
    <div className="plist">
      <div className="plistwrapper">
        <div className="plistleft">
          <img src={net1} alt="" className="plistImage" />
        </div>
        <div className="plistright">
          <span className="plistthikness">Thikness:.23mm</span>
          <span className="plistHole">Hole size:32mm</span>
          <span className="plistprice">Price:3500</span>
          <span className="plistprice">Foreign:NO</span>

          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
