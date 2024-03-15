import React from "react";
import Dashboardlogo from "../../assets/images/dashbord-logo.png";
import Notificationlogo from "../../assets/images/icons/notification.png";
import Profile from "../../assets/images/profilepic.png";
import Vector from "../../assets/images/Vector.png";
import Admin from "../../assets/images/admin.png";
import Architecture from "../../assets/images/Architecture.png";
import Mngt from "../../assets/images/Mngt.png";
import Document from "../../assets/images/Document.png";
import Project from "../../assets/images/Project.png";
import Testing from "../../assets/images/Testing.png";
import Customer from "../../assets/images/Customer.png";
import { Link } from "react-router-dom";

const Header = ({
  handleLogout,
  loading,
  // handleOverviewClick,
  handleIGClick,
  handleUserMaster,
  handleCustomerList,
  handleProjectList,
  handleRoleList,
  // handleScopeList,
}) => {
  const logo = localStorage.getItem("logo");
  const customer_name = localStorage.getItem("customer_name");
  const first_name = localStorage.getItem("name");
  const last_name = localStorage.getItem("last_name");
  const image_url = localStorage.getItem("image_url");
  const role = localStorage.getItem("role");
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark top-header-bar">
            <div className="container-fluid">
              <Link className="navbar-brand main-dash-logo">
                {logo ? (
                  <img src={logo} alt="Logo" className="img-fluid w30 h30" />
                ) : (
                  <img src={Dashboardlogo} alt="Logo" />
                )}{" "}
                {customer_name ? customer_name : "iFhir Health"}
              </Link>
              <div className="">
                <ul className="navbar-nav me-auto"></ul>
                <div className="right-side-code">
                  <div className="right-co">
                    <ul>
                      <li>
                        <a href="/">
                          <img src={Notificationlogo} alt="Notification" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="pro-img dropdown">
                    <span
                      className="dropdown-toggle"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {image_url ? (
                        <img src={image_url} alt="Profile" />
                      ) : (
                        <img src={Profile} alt="Profile" />
                      )}
                      <span className="user-name">
                        {first_name} {last_name}
                      </span>
                    </span>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                      style={{ cursor: "pointer" }}
                    >
                      <li>
                        <span className="dropdown-item text-color">
                          Profile
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item text-color">
                          Settings
                        </span>
                      </li>
                      <hr className="dropdown-divider" />
                      <li>
                        <span
                          className="dropdown-item text-color"
                          onClick={handleLogout}
                          disabled={loading}
                        >
                          {loading ? "Logging out..." : "Logout"}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark dashboard-menu">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mynavbar"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      <img src={Vector} alt="Vector" /> <span>Dashboard</span>
                    </Link>
                  </li>
                  {role === "1" ? (
                    <>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src={Admin} alt="Admin" /> <span>Admin</span>{" "}
                          <i className="fa fa-angle-down"></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{ cursor: "pointer" }}
                        >
                          <li>
                            <span
                              className="dropdown-item"
                              onClick={handleRoleList}
                            >
                              User Role
                            </span>
                          </li>
                          <li>
                            <span className="dropdown-item">
                              User Permission
                            </span>
                          </li>
                          <li>
                            <span
                              className="dropdown-item"
                              onClick={handleUserMaster}
                            >
                              User Master
                            </span>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="/"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src={Customer} alt="Customer" />{" "}
                          <span>Customer </span>
                          <i className="fa fa-angle-down"></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          style={{ cursor: "pointer" }}
                        >
                          <li>
                            <span
                              className="dropdown-item"
                              onClick={handleCustomerList}
                            >
                              Customer List
                            </span>
                          </li>
                        </ul>
                      </li>
                    </>
                  ) : (
                    ""
                  )}
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={Project} alt="Project" /> <span>Project</span>{" "}
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu" style={{ cursor: "pointer" }}>
                      <li>
                        <span
                          className="dropdown-item"
                          onClick={handleProjectList}
                        >
                          Project List
                        </span>
                      </li>
                      {/* <li>
                        <span
                          className="dropdown-item"
                          onClick={handleScopeList}
                        >
                          Project Scope
                        </span>
                      </li>
                      <li>
                        <Link to="/assign-list">
                          <span className="dropdown-item text-size-16">
                            Assign Project
                          </span>
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  {role === "1" ? (
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src={Architecture} alt="Architecture" />{" "}
                        <span onClick={handleIGClick}>FHIR Architecture </span>{" "}
                        <i
                          className="fa fa-angle-down"
                          style={{ display: "none" }}
                        ></i>
                      </a>
                      <ul
                        className="dropdown-menu"
                        style={{ cursor: "pointer", display: "none" }}
                      >
                        {/* <li>
                        <span
                          className="dropdown-item"
                          onClick={handleOverviewClick}
                        >
                          Overview
                        </span>
                      </li> */}
                        {/* <li>
                        <span className="dropdown-item" onClick={handleIGClick}>
                          FhIR Architecture
                        </span>
                      </li> */}
                        {/* <li>
                        <span className="dropdown-item">
                          Profiles & Resources
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item">
                          Architecture diagram
                        </span>
                      </li>
                      <li>
                        <span className="dropdown-item">Sample JSONs</span>
                      </li>
                      <li>
                        <span className="dropdown-item">JSON Mapping</span>
                      </li> */}
                      </ul>
                    </li>
                  ) : (
                    ""
                  )}
                  <li className="nav-item">
                    <Link className="nav-link" to="/create-summary">
                      <img src={Mngt} alt="FHIR Mngt" /> <span>FHIR Mngt</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/document-list">
                      <img src={Document} alt="FHIR Document" />
                      <span>Document</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/testcase-list">
                      <img src={Testing} alt="Testing" /> <span>Testing</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
