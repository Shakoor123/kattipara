import React, { useState } from "react";
import "./Navbar.css";
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
        <span className="name">Kattippara</span>
        <button onClick={buttonHandle} className={button ? "light" : "dark"}>
          {button ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
