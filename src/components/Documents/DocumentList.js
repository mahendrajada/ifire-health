import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import ViewImage from "../../assets/images/view.png";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "./sidebar";

const DocumentList = () => {
  const navigate = useNavigate();
  const [newDocumentData, setDocumentData] = useState([]);
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

  useEffect(() => {
    const initialGData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getdocumentlist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setDocumentData(response.data.data);
      } catch (error) {
        console.error("Error fetching Document data:", error);
      }
    };

    initialGData();
  }, []);
  const handleViewDocument = async (documentId) => {
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
      navigate("/view-document", {
        state: { ViewDocumentData: response.data },
      });
    } catch (error) {
      console.error("Error fetching document data for view:", error);
    }
  };
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
  const handleEditDocument = async (documentId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editdocument/${documentId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-document", {
        state: { EditDocumentData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching document data for editing:", error);
    }
  };
  const handleDeleteDocument = async (documentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Document?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletedocument/${documentId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setDocumentData((prevDocumentData) =>
          prevDocumentData.filter((document) => document.id !== documentId)
        );
      } catch (error) {
        console.error("Error deleting document:", error);
      }
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
            <Sidebar handleViewScope={handleViewScope} />
            <div className="col-md-9">
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">All Document</span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-document">
                      <i className="fa fa-plus"></i> New Document
                    </Link>
                  </div>
                </div>
                <div className="responsive">
                  <div className="table-data-box table-responsive ">
                    <table className="table-content borderd-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newDocumentData.length > 0 &&
                          newDocumentData.map((item, index) => (
                            <tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td className="prl-7">
                                <span
                                  className="edit-row cursor"
                                  onClick={() => handleViewDocument(item.id)}
                                >
                                  <img src={ViewImage} alt="Edit" />
                                </span>
                                <span
                                  className="edit-row cursor"
                                  onClick={() => handleEditDocument(item.id)}
                                >
                                  <img src={EditImage} alt="Edit" />
                                </span>{" "}
                                <span
                                  className="delete-row cursor"
                                  onClick={() => handleDeleteDocument(item.id)}
                                >
                                  <img src={DeleteImage} alt="Delete" />
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentList;
