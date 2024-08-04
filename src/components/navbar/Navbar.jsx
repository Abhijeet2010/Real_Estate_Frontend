import React, { useContext, useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // const user = true;

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/list">Properties</Link>
        <Link to="/profile">Agent</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "./no-avatar.png"} alt="" />
            <span>{currentUser.username}</span>
            <Link to={"/profile"} className="profile_Btn">
              <span className="notification">3</span>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Login</a>
            <a href="/" className="register">
              Register
            </a>
          </>
        )}

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
