import React from "react";
import Login from "../../components/Login/Login";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <>
      <div className="products">
        <Sidebar />
        <div className="productsContainer">
          <Navbar />
          <div className="productswrapper">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
