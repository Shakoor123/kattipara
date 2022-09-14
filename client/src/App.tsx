import React, { useState } from "react";
import "./App.css";
import "./DarkMode.scss";

import AddProduct from "./pages/AddProduct/AddProduct";
import Home from "./pages/home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Product from "./pages/product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";

function App() {
  const [cuser, setCuser] = useState(false);
  const [dark, setDark] = useState(true);
  return (
    <div className={dark ? "darkMode" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={cuser ? <Home /> : <LoginPage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/addproduct"
            element={cuser ? <AddProduct /> : <Home />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
