import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    const res = await axios.post(`${process.env.REACT_APP_URL}login`, {
      username,
      password,
    });
    if (res.data === "login success") {
      navigate("/addproduct");
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="form">
          <h1 className="loginTitle">Log In</h1>
          <div className="loginset">
            <span className="loginText">UserName :</span>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="loginInput"
            />
          </div>
          <div className="loginset">
            <span className="loginText">Password :</span>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
            />
          </div>
          <button className="submitform" onClick={handleClick}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
