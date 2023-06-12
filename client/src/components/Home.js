import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../socketContext";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const socket = useContext(SocketContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/rooms");
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
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
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
