import React, { useState } from "react";
import "./styles.css";

const GeneralSettings = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className="settings-card">
      <h2 className="settings-title">General Settings</h2>

      <div className="theme-section">
        <p className="section-label">Dashboard Theme</p>

        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
            />
            <span className="custom-radio"></span>
            Light
          </label>

          <label className="radio-option">
            <input
              type="radio"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
            />
            <span className="custom-radio active"></span>
            Dark
          </label>
        </div>
      </div>

      <button className="primary-btn">
        Update Profile <span className="arrow">»</span>
      </button>
    </div>
  );
};

export default GeneralSettings;