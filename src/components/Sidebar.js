import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar "
      style={{ width: "180px" }}
    >
      <Link
        to="/Research"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Lizmotors</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item hover-items"
          // onClick={() => {
          //   setSelectedTab("Research");
          // }}
        >
          <Link
            to="/Research"
            className={`nav-link text-white `}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Research
          </Link>
          <div className="dropdown-menu">
            <ul>
              <li>External</li>
              <li>Internal</li>
            </ul>
          </div>
        </li>
        <li
          className="hover-items"
          // onClick={() => {
          //   setSelectedTab("Planning");
          // }}
        >
          <Link to="/Planning" className={`nav-link text-white `}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Planning
          </Link>
          <div className="dropdown-menu">
            <ul>
              <li>Prd</li>
              <li>Specs</li>
            </ul>
          </div>
        </li>
        <li
          className="hover-items"
          // onClick={() => {
          //   setSelectedTab("Desiging");
          // }}
        >
          <Link to="/Desiging" className={`nav-link text-white `}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Desiging
          </Link>
        </li>
        {/* <li
          className="hover-items"
          onClick={() => {
            setSelectedTab("Manufacturing");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Manufacturing" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Manufacturing
          </a>
          <div className="dropdown-menu">
            <ul>
              <li>Material</li>
              <li>Production</li>
            </ul>
          </div>
        </li>
        <li
          className="hover-items"
          onClick={() => {
            setSelectedTab("Sales");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Sales" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Sales
          </a>
          <div className="dropdown-menu">
            <ul>
              <li>Online</li>
              <li>Dealearship</li>
            </ul>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
