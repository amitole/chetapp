import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    navigate("/rooms");
  };
  return (
    <form className="login__container" onSubmit={handleSubmit}>
      <h2 className="login__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={4}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="login__cta">SIGN IN</button>
    </form>
  );
};

export default Login;
