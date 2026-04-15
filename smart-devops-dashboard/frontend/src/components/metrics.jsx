import React from "react";
import "./styles.css";

const DeploymentMetrics = () => {
  return (
    <div className="metrics-container">
      <div className="metric-box">
        <h3>Deployment Frequency</h3>
        <div className="line-graph">
          <div className="line"></div>
        </div>
      </div>

      <div className="metric-box">
        <h3>Success Rate</h3>
        <div className="donut-chart">
          <div className="donut-hole"></div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentMetrics;