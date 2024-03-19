import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="header">
        <header className="position-relative d-flex justify-content-center py-3 text-bg-dark">
          <div className="logo position-absolute  ">
            {/* Logo */}
            <Link to="/" className="nav-link">
              <span className="logo-text">Lizmotor</span>
            </Link>
          </div>
          <ul className="nav nav-pills">
            <li className="nav-item hover-items">
              <Link
                to="/Research"
                className={`nav-link ${
                  location.pathname === "/Research" ? "active" : ""
                }`}
              >
                Research
              </Link>
              <div className="dropdown-menu p-3">
                <ul>
                  <li>
                    External
                    <ul>
                      <li>
                        B2C
                        <ul>
                          <li>Online</li>
                          <li>Interview</li>
                          <li>Public Data</li>
                          <li>Health</li>
                        </ul>
                      </li>
                      <li>B2B</li>
                    </ul>
                  </li>
                  <li>Internal</li>
                </ul>
              </div>
            </li>
            <li className="nav-item hover-items">
              <Link
                to="/Planning"
                className={`nav-link ${
                  location.pathname === "/Planning" ? "active" : ""
                }`}
              >
                Planning
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li>Prd</li>
                  <li>Specs</li>
                </ul>
              </div>
            </li>
            <li className="nav-item hover-items">
              <Link
                to="/Desiging"
                className={`nav-link ${
                  location.pathname === "/Desiging" ? "active" : ""
                }`}
              >
                Designing
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li>Software</li>
                  <li>Hardware</li>
                </ul>
              </div>
            </li>
            <li className="nav-item hover-items">
              <Link
                to="/Manufacturing"
                className={`nav-link ${
                  location.pathname === "/Manufacturing" ? "active" : ""
                }`}
              >
                Manufacturing
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li>Material</li>
                  <li>Production</li>
                </ul>
              </div>
            </li>
            <li className="nav-item hover-items">
              <Link
                to="/Sales"
                className={`nav-link ${
                  location.pathname === "/Sales" ? "active" : ""
                }`}
              >
                Sales
              </Link>
              <div className="dropdown-menu">
                <ul>
                  <li>Online</li>
                  <li>Dealearship</li>
                </ul>
              </div>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
