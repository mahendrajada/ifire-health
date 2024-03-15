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
              <img src={FhirImage} alt="FHIR configuration" /> Testing
            </li>
            <li>
              <Link
                to="/testcase-list"
                className={location.pathname === "/testcase-list" || location.pathname === "/create-testcase" || location.pathname === "/edit-testcase"  ? "active-link" : ""}
              >
                <i className="fa fa-angle-right"></i> Test Case
              </Link>
            </li>
            <li>
              <Link
                to="/testcategory-list"
                className={
                  location.pathname === "/testcategory-list" || location.pathname === "/create-testcategory" || location.pathname === "/edit-testcategory" ? "active-link" : ""
                }
              >
                <i className="fa fa-angle-right"></i> Test Category
              </Link>
            </li>
            <li>
              <Link
                to="/testset-list"
                className={
                  location.pathname === "/testset-list" || location.pathname === "/create-testset" || location.pathname === "/edit-testset" ? "active-link" : ""
                }
              >
                <i className="fa fa-angle-right"></i> Test Set
              </Link>
            </li>
            <li>
              <Link
                to="/create-testexecution"
                className={
                  location.pathname === "/create-testexecution" ? "active-link" : ""
                }
              >
                <i className="fa fa-angle-right"></i> Test Execution
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
