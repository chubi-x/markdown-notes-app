import React from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <div className="logo-image-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo-header">
          <h1>Notelify</h1>
        </div>
      </div>
    </nav>
  );
}
