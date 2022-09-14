import React from "react";
import AddForm from "../AddForm/AddForm";
import ProductList from "../ProductList/ProductList";
import "./Add.css";
const Add = () => {
  return (
    <div className="add">
      <div className="addleft">
        <h1 className="AddTitle">All products</h1>
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
      <div className="addright">
        <AddForm />
      </div>
    </div>
  );
};

export default Add;
