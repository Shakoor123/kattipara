import axios from "axios";
import React, { useEffect, useState } from "react";
import AddForm from "../AddForm/AddForm";
import ProductList from "../ProductList/ProductList";

import "./Add.css";
const Add = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}products`);
      setProducts(res.data);
    };
    getProducts();
  }, []);
  return (
    <div className="add">
      <div className="addleft">
        <h1 className="AddTitle">All products</h1>

        {products.map((pro) => (
          <ProductList {...pro} />
        ))}
      </div>
      <div className="addright">
        <AddForm />
      </div>
    </div>
  );
};

export default Add;
