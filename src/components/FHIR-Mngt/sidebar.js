import React from "react";
import { Link, useLocation } from "react-router-dom";
import FhirImage from "../../assets/images/fhir.png";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="col-md-3 side-ox-row">
      <div className="sidebar-box mb-2">
        <div className="side-bar-bx">
          <ul>
            <li className="sidebar-heading">
              <img src={FhirImage} alt="FHIR configuration" /> FHIR Mngt
            </li>
            <li>
              <Link
                to="http://208.109.213.14:8080"
                className={
                  location.pathname === "http://208.109.213.14:8080"
                    ? "active-link"
                    : ""
                }
                target="_blank"
              >
                <i className="fa fa-angle-right"></i> FHIR Server
              </Link>
            </li>
            <li>
              <Link
                to="/create-summary"
                className={
                  location.pathname === "/create-summary" ? "active-link" : ""
                }
              >
                <i className="fa fa-angle-right"></i> Resource Validator
              </Link>
            </li>
            <li>
              <Link
                to="/iginfo-list"
                className={
                  location.pathname === "/iginfo-list" ||
                  location.pathname === "/create-iginfo" ||
                  location.pathname === "/edit-iginfo"
                    ? "active-link"
                    : ""
                }
              >
                <i className="fa fa-angle-right"></i> IG Management
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-angle-right"></i> Profile Management
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
