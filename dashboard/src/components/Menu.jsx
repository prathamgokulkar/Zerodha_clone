import { Dashboard } from "@mui/icons-material";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      {/* Toggle Button for Mobile Menu */}
      <button
        className="dropdown-toggle-mobile d-md-none"
        onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Normal Menu for desktop */}
      <div className="menus d-none d-md-flex">
        <ul>
          <li>
            <Link to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link to="/apps" onClick={() => handleMenuClick(6)}>
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isProfileDropdownOpen && (
        <ul className="dropdown-menu-custom d-md-none">
          <li>
            <Link to="/" className="dropdown-item">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orders" className="dropdown-item">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/holdings" className="dropdown-item">
              Holdings
            </Link>
          </li>
          <li>
            <Link to="/positions" className="dropdown-item">
              Positions
            </Link>
          </li>
          <li>
            <Link to="/funds" className="dropdown-item">
              Funds
            </Link>
          </li>
          <li>
            <Link to="/apps" className="dropdown-item">
              Apps
            </Link>
          </li>
        </ul>
      )}

      {/* Profile remains as it is */}
      <hr />
      <div className="profile" onClick={handleProfileClick}>
        <div className="avatar">ZU</div>
        <p className="username">USERID</p>
      </div>
    </div>
  );
};

export default Menu;
