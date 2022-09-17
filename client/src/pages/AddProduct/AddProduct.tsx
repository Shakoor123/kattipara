import React from "react";
import { useNavigate } from "react-router-dom";
import Add from "../../components/Add/Add";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./AddProduct.css";
const AddProduct = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  return (
    <>
      <div className="products">
        <Sidebar />
        <div className="productsContainer">
          <Navbar />
          <div className="productswrapper">
            <button className="logOut" onClick={handleLogout}>
              Log Out
            </button>
            <Add />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
