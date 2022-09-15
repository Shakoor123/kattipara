import React, { useState } from "react";
import "./App.css";
import "./DarkMode.scss";

import AddProduct from "./pages/AddProduct/AddProduct";
import Home from "./pages/home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import Product from "./pages/product/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import { ThemeContext } from "./context/context";
function App() {
  const [cuser, setCuser] = useState(false);
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "darkMode" : "App"}>
      <ThemeContext.Provider value={{ dark, setDark }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={cuser ? <Home /> : <LoginPage />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
