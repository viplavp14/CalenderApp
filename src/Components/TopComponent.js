import React, { useState } from "react";
import "../styles/TopComponent.css";

const TopComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="top-container">
      <div className="search-container">
        <i className="bi bi-search search-icon"></i>
        <input type="text" placeholder="" className="search-input" />
      </div>
      <button className="premium-button">Premium</button>
      <button className="get-app-button">
        <i className="bi bi-download download-icon"></i> Get App
      </button>
      <i className="bi bi-bell-fill notification-icon"></i>
      <div className="profile-dropdown">
        <i
          className="bi bi-person-circle profile-icon"
          onClick={toggleDropdown}
        ></i>
        {isOpen && (
          <div className="dropdown-menu show">
            <button className="dropdown-item">
              <i className="bi bi-person"></i> Account
            </button>
            <button className="dropdown-item">
              <i className="bi bi-credit-card"></i> Subscription
            </button>
            <button className="dropdown-item">
              <i className="bi bi-gear"></i> Settings
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopComponent;
