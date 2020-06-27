import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div>
        <h2 className="logIn">Welcome to Les Quizerables</h2>
      </div>
      <input
        type="text"
        placeholder="Enter your Name"
        className="inputBox"
      ></input>
      <input
        type="password"
        placeholder="Enter your Password"
        className="passwordBox"
      ></input>
      <button className="enterButton">Enter</button>
    </div>
  );
}

export default Login;
