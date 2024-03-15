import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import Sidebar from "../sidebar";

const ViewIg = () => {
  const location = useLocation();
  const ViewIgData = location.state?.ViewIGData || {};
  const igData = ViewIgData.data;
  const igProfiles = ViewIgData.igprofiles;

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
            <Sidebar />
            <div className="col-md-9">
              <div className="box mb-2">
                <div className="table-data-box table-responsive ">
                  {igData.name ? (
                    <div className="showDetails">
                      <h5 className="text-white mb-0">{igData.name}</h5>
                    </div>
                  ) : (
                    ""
                  )}
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Profile Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      {igProfiles.length > 0 ? (
                        igProfiles.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.ig_profile_name}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="text-18">
                            No records found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewIg;
