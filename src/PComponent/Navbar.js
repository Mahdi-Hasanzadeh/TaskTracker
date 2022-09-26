import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <React.Fragment>
      <div className="navbarContainer">
        <div className="navbar">
          <div className="navbarBrand">
            <h2>Task Tracker</h2>
          </div>
          <div className="navbarList">
            <ul>
              <li>
                <Link className="navItems" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navItems" to="/Dashboard">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className="navItems" to="/Login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="navItems" to="/">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
