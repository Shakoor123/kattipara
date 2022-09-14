import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import "./Product.css";
const Product = () => {
  return (
    <>
      <div className="products">
        <Sidebar />
        <div className="productsContainer">
          <Navbar />
          <div className="productswrapper">
            <SingleProduct />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
