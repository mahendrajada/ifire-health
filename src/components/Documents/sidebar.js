import React from "react";
import { Link, useLocation } from "react-router-dom";
import FhirImage from "../../assets/images/fhir.png";

const Sidebar = ({ handleViewScope }) => {
  const location = useLocation();

  return (
    <div className="col-md-3 side-ox-row">
      <div className="sidebar-box mb-2">
        <div className="side-bar-bx">
          <ul>
            <li className="sidebar-heading">
              <img src={FhirImage} alt="FHIR configuration" /> Document
            </li>
            <li>
              <Link
                to="/document-list"
                className={location.pathname === "/document-list" || location.pathname === "/create-document" || location.pathname === "/edit-document" || location.pathname === "/view-document"  ? "active-link" : ""}
              >
                <i className="fa fa-angle-right"></i> Document Index
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === "/view-scope" ? "active-link" : ""}
                onClick={() => handleViewScope(14)}
              >
                <i className="fa fa-angle-right"></i> Scope
              </Link>
            </li>
            <li>
              <Link
                to="#"
              >
                <i className="fa fa-angle-right"></i> Plan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
