import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";

const ProjectList = () => {
  const navigate = useNavigate();
  const [newProjectData, setProjectData] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [projectIdToDelete, setProjectIdToDelete] = useState(null);

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
    const initiaProjectData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectlist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProjectData(response.data.data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    initiaProjectData();
  }, []);

  const handleEditProject = async (projectId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editproject/${projectId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-project", {
        state: { EditprojectData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching user data for editing:", error);
    }
  };
  const handleDeleteProject = (projectId) => {
    setProjectIdToDelete(projectId);
    setDeleteModalVisible(true);
  };
  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `https://ifhirehealth.clindcast.com/api/deleteproject/${projectIdToDelete}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      setProjectData((prevProjectData) =>
        prevProjectData.filter((project) => project.id !== projectIdToDelete)
      );
      setDeleteModalVisible(false);
      setProjectIdToDelete(null);
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const role = localStorage.getItem("role");
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
            <div className="col-md-12">
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">All Project </span>
                  {role === "1" ? (
                    <div className="plus-link plus-btn">
                      <Link to="/create-project">
                        <i className="fa fa-plus"></i> New project{" "}
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Project Name</th>
                        {/* <th>Customer</th> */}
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newProjectData.length > 0 &&
                        newProjectData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            {/* <td>{item.customer_id}</td> */}
                            <td>{item.description}</td>
                            <td>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditProject(item.id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              {role === "1" ? (
                                <span
                                  className="delete-row cursor"
                                  onClick={() => handleDeleteProject(item.id)}
                                >
                                  <img src={DeleteImage} alt="Delete" />
                                </span>
                              ) : (
                                ""
                              )}
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
      {deleteModalVisible && (
        <div
          className="modal fade show"
          id="deleteProjectModal"
          tabIndex="-1"
          aria-labelledby="deleteProjectModalLabel"
          aria-hidden="true"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog mt218">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title header-text" id="deleteProjectModalLabel">
                  Are You Sure?
                </h5>
              </div>
              <div className="modal-body">
                Do you really want to delete this record? This process can not be undone
              </div>
              <div className="modal-footer border-0 d-block">
              <button
                  type="button"
                  className="btn btn-danger model-btn"
                  onClick={handleConfirmDelete}
                >
                  Delete
                </button>
                <button type="button" className="btn btn-primary cancle-btn" onClick={() => setDeleteModalVisible(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
