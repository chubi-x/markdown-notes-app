import React from "react";
import logo from "../assets/logo.png";
export default function Navbar({ windowWidth, sidebar, toggleSidebar }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <div className="logo-image-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-header">
            <h1>Notelify</h1>
          </div>
        </div>
        {windowWidth < 600 && (
          <div className="show-notes-button" onClick={toggleSidebar}>
            Show {`${sidebar ? "editor" : "notes"}`}
          </div>
        )}
      </div>
    </nav>
  );
}
