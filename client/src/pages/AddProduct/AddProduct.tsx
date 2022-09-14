import React from "react";
import Add from "../../components/Add/Add";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AddProduct.css";
const AddProduct = () => {
  return (
    <>
      <div className="products">
        <Sidebar />
        <div className="productsContainer">
          <Navbar />
          <div className="productswrapper">
            <Add />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
