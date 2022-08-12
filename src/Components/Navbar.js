import React from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  );
}
