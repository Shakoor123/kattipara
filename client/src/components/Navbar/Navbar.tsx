import React, { useState } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../context/context";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [button, setButton] = useState(false);
  const buttonHandle = () => {
    if (button) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  return (
    <div className="navbar">
      <div className="navbarwrapper">
        <Link to={"/"}>
          <span className="name">Kattippara</span>
        </Link>
        <ThemeContext.Consumer>
          {(value) => (
            <button
              onClick={() => {
                if (value.dark) {
                  value.setDark(false);
                } else {
                  value.setDark(true);
                }
              }}
              className={button ? "light" : "dark"}
            >
              {button ? "Light" : "Dark"}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </div>
  );
};

export default Navbar;
