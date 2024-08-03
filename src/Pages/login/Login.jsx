import React, { useState } from "react";
import "./login.scss";
import apiRequest from "../../lib/apiRequest.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await apiRequest.post("/auth/login", {
        email,
        password,
      });
      // Handle successful login
      setLoading(false);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/");
      }
    } catch (error) {
      setError(
        error.response ? error.response.data.message : "An error occurred"
      );
      setLoading(false);
      console.error(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="wrapper">
          <h1>Login Here</h1>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Enter Your Password"
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>

      <div className="imgContent">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
};

export default Login;
