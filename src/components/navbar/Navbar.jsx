import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/023/495/230/small_2x/real-estate-logo-1-free-png.png"
            alt="logo"
          />
          <span>AB-Estate </span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agents">Agents</a>
      </div>
      <div className="right">
        <a href="/login">Login</a>
        <a href="/" className="register">
          Register
        </a>

        <div href="" className="menuIcon" onClick={() => setOpen(!open)}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/660/660376.png"
            alt=""
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agents">Agents</a>
          <a href="/Login">Login</a>
          <a href="/Register">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
