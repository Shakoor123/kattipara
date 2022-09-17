import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/context";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  return (
    <ThemeContext.Consumer>
      {(value) => (
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
              <button
                className="submitform"
                onClick={async () => {
                  {
                    const res = await axios.post(
                      `${process.env.REACT_APP_URL}login`,
                      {
                        username,
                        password,
                      }
                    );
                    if (res.data === "login success") {
                      value.setAdmin(true);
                      localStorage.setItem("admin", "true");
                      navigate("/addproduct");
                    }
                  }
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Login;
