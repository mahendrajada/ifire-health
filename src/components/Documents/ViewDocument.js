import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "./sidebar";

const ViewDocument = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ViewDocumentData = location.state?.ViewDocumentData || {};
  const documentData = ViewDocumentData.data.requirement;

  const {
    loading,
    loadingoverview,
    loadingig,
    loadingusermaser,
    loadingcustomerlist,
    loadingprojectlist,
    loadingrolelist,
    loadingscopelist,
    handleLogout,
    handleOverviewClick,
    handleIGClick,
    handleUserMaster,
    handleCustomerList,
    handleProjectList,
    handleRoleList,
    handleScopeList,
  } = HeaderFunctions();

  const handleViewScope = async (documentId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/viewdocument/${documentId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/view-scope", {
        state: { ViewDocumentData: response.data },
      });
    } catch (error) {
      console.error("Error fetching document data for view:", error);
    } 
  };
  

  return (
    <>
      <Header
        loading={loading}
        loadingoverview={loadingoverview}
        loadingig={loadingig}
        loadingusermaser={loadingusermaser}
        loadingcustomerlist={loadingcustomerlist}
        loadingprojectlist={loadingprojectlist}
        loadingrolelist={loadingrolelist}
        loadingscopelist={loadingscopelist}
        handleLogout={handleLogout}
        handleOverviewClick={handleOverviewClick}
        handleIGClick={handleIGClick}
        handleUserMaster={handleUserMaster}
        handleCustomerList={handleCustomerList}
        handleProjectList={handleProjectList}
        handleRoleList={handleRoleList}
        handleScopeList={handleScopeList}
      />
      <div className="container">
        <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="#"></Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#"></Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page"></li>
          </ol>
        </nav>
      </div>
      <div className="container pb-4">
        <div className="box-bdr-dash">
          <div className="row">
            <Sidebar handleViewScope={handleViewScope} />{" "}
            <div className="col-md-9">
              <div className="box mb-2">
                <iframe
                  title="Document Preview"
                  srcDoc={documentData}
                  style={{ width: "100%", height: "800px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDocument;
