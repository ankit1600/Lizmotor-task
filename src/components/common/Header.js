import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark text-bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand fs-2">
            Lizmotor
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 h5 ">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
