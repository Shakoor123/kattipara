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
  const [admin, setAdmin] = useState(false);
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "darkMode" : "App"}>
      <ThemeContext.Provider value={{ dark, setDark, admin, setAdmin }}>
        <BrowserRouter>
          <ThemeContext.Consumer>
            {(value) => (
              <Routes>
                <Route path="/" element={<Home />} />

                <Route
                  path="/login"
                  element={admin ? <Home /> : <LoginPage />}
                />

                <Route path="/product/:id" element={<Product />} />
                <Route
                  path="/addproduct"
                  element={admin ? <AddProduct /> : <NoPage />}
                />
                <Route path="*" element={<NoPage />} />
              </Routes>
            )}
          </ThemeContext.Consumer>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
