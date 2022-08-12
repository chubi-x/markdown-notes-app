import React from "react";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header-container">
        <div className="sidebar-header">
          <h1>Notes</h1>
        </div>
        <div className="new-note">
          <button> + </button>
        </div>
      </div>
      <div className="note"></div>
    </div>
  );
}
