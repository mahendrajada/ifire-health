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
              <img src={FhirImage} alt="FHIR configuration" /> FHIR Architecture
            </li>
            <li>
              <Link
                to="/ig"
                className={
                  location.pathname === "/ig" ||
                  location.pathname === "/create-ig" ||
                  location.pathname === "/edit-ig" ||
                  location.pathname === "/view-ig"
                    ? "active-link"
                    : ""
                }
              >
                <i className="fa fa-angle-right"></i> Upload IG
              </Link>
            </li>
            <li>
              <Link
                to="/profile-list"
                className={
                  location.pathname === "/profile-list" ||
                  location.pathname === "/create-profile" ||
                  location.pathname === "/edit-profile" ||
                  location.pathname === "/view-profile"
                    ? "active-link"
                    : ""
                }
              >
                <i className="fa fa-angle-right"></i> Upload Profile
              </Link>
            </li>
            <li>
              <Link
                to="/resource-list"
                className={
                  location.pathname === "/resource-list" ||
                  location.pathname === "/create-resource" ||
                  location.pathname === "/edit-resource" ||
                  location.pathname === "/view-resource"
                    ? "active-link"
                    : ""
                }
              >
                <i className="fa fa-angle-right"></i> Upload Resource
              </Link>
            </li>
            <li>
              <Link
                to="/create-ig-assign"
                className={
                  location.pathname === "/create-ig-assign" ? "active-link" : ""
                }
              >
                <i className="fa fa-angle-right"></i> IG Assignment to Project
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
