import React from "react";
import "./styles.css";

const DeploymentHistory = () => {
  return (
    <div className="history-container">
      <h3>Deployment History</h3>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Version</th>
            <th>Environment</th>
            <th>Start Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Frontend</td>
            <td>v1.2</td>
            <td>Production</td>
            <td>2024-07-26 10:30</td>
            <td><span className="success">SUCCESS</span></td>
          </tr>

          <tr>
            <td>Backend</td>
            <td>v0.8</td>
            <td>Staging</td>
            <td>2024-07-26 09:15</td>
            <td><span className="failed">FAILED</span></td>
          </tr>

          <tr>
            <td>Database</td>
            <td>v2.1</td>
            <td>Development</td>
            <td>2024-07-26 08:00</td>
            <td><span className="running">RUNNING</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeploymentHistory;