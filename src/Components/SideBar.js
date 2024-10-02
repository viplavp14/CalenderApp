import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Sidebar.css";
import { Link } from "react-router-dom";

// Dropdown Component for Reusability
const Dropdown = ({ label, isOpen, onToggle, items }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#" onClick={onToggle} role="button">
        <i className={`bi ${items.icon}`}></i> {label}
        <i
          className={`bi ${
            isOpen ? "bi-chevron-up" : "bi-chevron-down"
          } float-end`}
        ></i>
      </a>
      {isOpen && (
        <ul className="nav flex-column ms-4">
          {items.links.map((item, index) => (
            <li key={index}>
              <Link className="nav-link" to={item.path}>
                <i className={`bi ${item.icon}`}></i> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Sidebar = () => {
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isStationsOpen, setIsStationsOpen] = useState(false);
  const [isPerformanceOpen, setIsPerformanceOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Define dropdown items for reusability
  const collectionItems = {
    icon: "bi-folder",
    links: [
      { path: "/playlists", icon: "bi-music-note-list", name: "Playlists" },
      { path: "/tracks", icon: "bi-music-note", name: "Tracks" },
      { path: "/artists", icon: "bi-person", name: "Artists" },
      { path: "/albums", icon: "bi-vinyl", name: "Albums" },
      { path: "/genres", icon: "bi-tag", name: "Genres" },
      { path: "/geos", icon: "bi-geo-alt", name: "Geos" },
    ],
  };

  const stationsItems = {
    icon: "bi-boombox",
    links: [
      {
        path: "/scheduled-listening",
        icon: "bi-calendar",
        name: "Scheduled listening",
      },
      {
        path: "/music-discovery",
        icon: "bi-music-note-list",
        name: "Music discovery",
      },
      { path: "/positive-music", icon: "bi-star", name: "Positive music" },
      {
        path: "/mood-regulation",
        icon: "bi-emoji-smile",
        name: "Mood regulation",
      },
    ],
  };

  const performanceItems = {
    icon: "bi-trophy",
    links: [
      { path: "/calendar", icon: "bi-calendar-event", name: "Calendar" },
      { path: "/groups", icon: "bi-person-plus", name: "Groups" },
      {
        path: "/music-analysis",
        icon: "bi-music-note-list",
        name: "Music analysis",
      },
    ],
  };

  return (
    <div>
      <button
        className="btn btn-primary sidebar-toggle d-md-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <i className="bi bi-list"></i>
      </button>
      <div
        className={`sidebar bg-light vh-100 p-3 ${isSidebarOpen ? "open" : ""}`}
      >
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              <i className="bi bi-house-door"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="bi bi-person"></i> Profile
            </Link>
          </li>

          <Dropdown
            label="Collection"
            isOpen={isCollectionOpen}
            onToggle={() => setIsCollectionOpen(!isCollectionOpen)}
            items={collectionItems}
          />

          <Dropdown
            label="Stations"
            isOpen={isStationsOpen}
            onToggle={() => setIsStationsOpen(!isStationsOpen)}
            items={stationsItems}
          />

          <Dropdown
            label="Performance"
            isOpen={isPerformanceOpen}
            onToggle={() => setIsPerformanceOpen(!isPerformanceOpen)}
            items={performanceItems}
          />

          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="bi bi-people"></i> Community
            </a>
          </li>
        </ul>
        <button className="Pro-Partner-button mt-3">Pro Partner</button>
      </div>
    </div>
  );
};

export default Sidebar;
