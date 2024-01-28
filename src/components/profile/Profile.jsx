import React, { useState } from "react";
import "./profile.scss";
import { useAuth } from "../../utility/auth";

export const Profile = () => {
  const [showPassword, setShowPassword] = useState(false);

  const auth = useAuth();

  return (
    <div className="profile-container">
      <h2>Welcome {auth.user}</h2>
      <div className="profile-info">
        <div className="info-item">
          <span className="label">Username:</span>
          <span className="value">{auth.user}</span>
        </div>
        <div className="info-item">
          <span className="label">Email:</span>
          <span className="value">{auth.email}</span>
        </div>
        <div className="info-item">
          <span className="label">Password:</span>
          <div className="pasword-input">
          <input
            type={showPassword ? "text" : "password"}
            value={auth.password}
            readOnly
          />
          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <ion-icon name="eye-outline"></ion-icon>
            ) : (
              <ion-icon name="eye-off-outline"></ion-icon>
            )}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
