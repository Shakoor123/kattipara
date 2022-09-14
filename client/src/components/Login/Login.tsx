import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="form">
          <h1 className="loginTitle">Log In</h1>
          <div className="loginset">
            <span className="loginText">UserName :</span>
            <input type="text" className="loginInput" />
          </div>
          <div className="loginset">
            <span className="loginText">Password :</span>
            <input type="password" className="loginInput" />
          </div>
          <button className="submitform">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
