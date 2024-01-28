import React, { useState } from "react";
import "./navbar.scss";
import { useAuth } from "../../utility/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleProfile = () => {
    // Redirect to the profile page
    navigate("/profile");
  };

    const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://seeklogo.com/images/F/Finsec-logo-024A6F4F8F-seeklogo.com.gif"
          alt=""
        />
        <div className="companyCredentials">
          <span className="companyName">PS Finsec Private Limited</span>
          <span className="companyCin">CIN: U69120DL1996PTC08096</span>
          <span className="companyDomain">www.psfinsec.com</span>
        </div>
      </div>
      <div className="icons">
        {auth.user && (
          <div
            className="user"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <img
              src="https://www.rattanhospital.in/wp-content/uploads/2020/03/user-dummy-pic.png"
              alt="{user}"
            />
            {showDropdown && (
              <div className="dropdown">
                <ul>
                  <li onClick={handleProfile}>Profile</li>
                  <li onClick={handleLogout}>Logout</li>
                </ul>
              </div>
            )}
            <ion-icon name="star"></ion-icon>
            <span>Add to Dashboard</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
