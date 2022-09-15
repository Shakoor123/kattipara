import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import SingleProduct from "../../components/SingleProduct/SingleProduct";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./Product.css";

const Product = () => {
  const [product, setProduct] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const getproduct = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}products/${id}`);
      setProduct(res.data);
    };
    getproduct();
  }, []);
  return (
    <>
      <div className="products">
        <Sidebar />
        <div className="productsContainer">
          <Navbar />
          <div className="productswrapper">
            <SingleProduct {...product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
