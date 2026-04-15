import React from "react";
import { FaTachometerAlt, FaFileAlt, FaCog } from "react-icons/fa";
import "./styles.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logoContainer">
        <div className="logoIcon">∞</div>
        <h2 className="logoText">Smart DevOps</h2>
      </div>

      <nav className="nav">
        <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
        <SidebarItem icon={<FaFileAlt />} label="Logs" />
        <SidebarItem icon={<FaCog />} label="Settings" />
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => {
  return (
    <div className="navItem">
      <span className="icon">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Sidebar;