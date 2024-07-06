import React from "react";
import "./layout.scss";
import "./Pages/content.scss";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./Pages/homepage/HomePage";

const App = () => {
  return (
    <div className="layout">
      <div>
        <Navbar />
      </div>

      <div className="content">
        <HomePage />
      </div>
    </div>
  );
};

export default App;
