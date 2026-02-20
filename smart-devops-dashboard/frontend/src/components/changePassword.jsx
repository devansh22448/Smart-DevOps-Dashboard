import React, { useState } from "react";
import "./styles.css";

const ChangePassword = () => {
  const [form, setForm] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <div className="settings-card">
      <h2 className="settings-title">Change Password</h2>

      <div className="input-group">
        <input
          type="password"
          name="current"
          placeholder="Current Password"
          value={form.current}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={form.newPassword}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          name="confirm"
          placeholder="Confirm New Password"
          value={form.confirm}
          onChange={handleChange}
        />
      </div>

     <button
  className="primary-btn"
  onClick={handleSubmit}
>
  Change Password
</button>
    </div>
  );
};

export default ChangePassword;