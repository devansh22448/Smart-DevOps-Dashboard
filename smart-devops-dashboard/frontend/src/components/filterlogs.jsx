import React, { useState } from "react";
import "./styles.css";

const FilterLogs = () => {
  const [logLevel, setLogLevel] = useState("All Levels");
  const [service, setService] = useState("All Services");
  const [startDate, setStartDate] = useState("2024-04-24");
  const [endDate, setEndDate] = useState("2024-04-24");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log({
      logLevel,
      service,
      startDate,
      endDate,
      searchQuery,
    });
  };

  const handleReset = () => {
    setLogLevel("All Levels");
    setService("All Services");
    setStartDate("");
    setEndDate("");
    setSearchQuery("");
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h2>Filter Logs</h2>
        <button className="reset-btn" onClick={handleReset}>
          Reset Filters →
        </button>
      </div>

      <div className="filter-row">
        <div className="input-group">
          <label>Log Level</label>
          <select
            value={logLevel}
            onChange={(e) => setLogLevel(e.target.value)}
          >
            <option>All Levels</option>
            <option>INFO</option>
            <option>WARN</option>
            <option>ERROR</option>
          </select>
        </div>

        <div className="input-group">
          <label>Service</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option>All Services</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Database</option>
          </select>
        </div>

        <div className="input-group">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="bottom-row">
        <input
          type="text"
          placeholder="🔍 deployment"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />

        <button className="secondary-btn">Export All</button>
        <button className="secondary-btn">☰</button>
      </div>
    </div>
  );
};

export default FilterLogs;