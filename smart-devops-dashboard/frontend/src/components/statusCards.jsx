import React from "react";
import "./styles.css";

const DeploymentStatusCards = () => {
  return (
    <div className="status-container">
      <div className="status-card running">
        <h4>Deployment Status</h4>
        <h1>12</h1>
        <p>Running</p>
      </div>

      <div className="status-card success">
        <h4>Deployment Status</h4>
        <h1>85</h1>
        <p>Success</p>
      </div>

      <div className="status-card failed">
        <h4>Deployment Status</h4>
        <h1>3</h1>
        <p>Failed</p>
      </div>
    </div>
  );
};

export default DeploymentStatusCards;