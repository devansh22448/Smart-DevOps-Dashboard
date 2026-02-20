import React from "react";
import "./styles.css";

const logsData = [
  {
    level: "INFO",
    timestamp: "2024-04-24 16:10:45",
    service: "backend",
    environment: "development",
    message: 'Deploying "backend" deployed in 123s',
  },
  {
    level: "INFO",
    timestamp: "2024-04-24 16:55:21",
    service: "frontend",
    environment: "production",
    message: 'Deploying "frontend" deployed in 142s',
  },
  {
    level: "WARN",
    timestamp: "2024-04-24 16:55:41",
    service: "service",
    environment: "production",
    message: "Service experienced high latency",
  },
  {
    level: "ERROR",
    timestamp: "2024-04-24 16:10:45",
    service: "database",
    environment: "staging",
    message: "Database migration failed",
  },
  {
    level: "ERROR",
    timestamp: "2024-04-24 16:10:46",
    service: "database",
    environment: "development",
    message: "Database type mismatch encountered",
  },
];

const LogsTable = () => {
  return (
    <div className="logs-container">
      <table className="logs-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Timestamp</th>
            <th>Service</th>
            <th>Environment</th>
            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {logsData.map((log, index) => (
            <tr key={index}>
              <td>
                <span className={`badge ${log.level.toLowerCase()}`}>
                  {log.level}
                </span>
              </td>
              <td>{log.timestamp}</td>
              <td>{log.service}</td>
              <td>{log.environment}</td>
              <td className="message-cell">{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTable;