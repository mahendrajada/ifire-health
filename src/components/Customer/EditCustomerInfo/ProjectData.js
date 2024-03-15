import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const ProjectData = ({ EditcustomerId }) => {
  const [projectformData, setProjectFormData] = useState({
    customer_id: EditcustomerId,
    project_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newProjectData, setNewProjectData] = useState([]);
  const [loadingProjectsAll, setLoadingProjectsAll] = useState(true);
  const [projectAll, setProjectAll] = useState([]);

  useEffect(() => {
    const fetchprojects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProjectAll(response.data.data);
        setLoadingProjectsAll(false);
      } catch (error) {
        console.error("Error fetching project list:", error);
      }
    };

    fetchprojects();
  }, []);

  useEffect(() => {
    const handleCreateProject = async () => {
      const customer_id = EditcustomerId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getcustomerprojectlist",
          { customer_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewProjectData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching project data:", error);
      }
    };

    handleCreateProject();
  }, [EditcustomerId]);

  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectFormData({
      ...projectformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateProject = async () => {
    const customer_id = EditcustomerId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getcustomerprojectlist",
        { customer_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewProjectData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching project data:", error);
    }
  };

  const projectSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormProject();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storecustomerproject",
          projectformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProjectFormData({
          customer_id: EditcustomerId,
          project_id: "",
        });
        setTimeout(() => {
          handleCreateProject(EditcustomerId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteProject = async (projectId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletecustomerproject/${projectId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewProjectData((prevProjectData) =>
          prevProjectData.filter(
            (project) => project.customerproject_id !== projectId
          )
        );
      } catch (error) {
        console.error("Error deleting project:", error);
      }
    }
  };

  const validateFormProject = () => {
    const errors = {};
    if (!projectformData.project_id.trim()) {
      errors.project_id = "Project is required";
    }
    return errors;
  };

  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Project
          <button
            type="button"
            className="btn btn-primary ml8"
            data-bs-toggle="modal"
            data-bs-target="#projectModel"
          >
            <i className="fa fa-plus text-white"></i>
          </button>
        </h5>
      </div>
      <div className="table-data-box table-responsive ">
        <table className="table-content borderd-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newProjectData.length > 0 &&
              newProjectData.map((item, index) => (
                <tr key={index}>
                  <td>{item.customerproject_id}</td>
                  <td>{item.name}</td>
                  <td className="description">{item.description}</td>
                  <td>
                    <span
                      className="delete-row cursor"
                      onClick={() =>
                        handleDeleteProject(item.customerproject_id)
                      }
                    >
                      <img src={DeleteImage} alt="Delete" />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="projectModel"
        tabIndex="-1"
        aria-labelledby="projectModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="projectModelLabel">
                  Add Project
                </h5>
                <button
                  type="button"
                  className="btn-close white-text"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ig-forms">
                  {loadingProjectsAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={projectSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="project_id" className="form-label">
                              Project
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.project && "is-invalid"
                              }`}
                              id="project_id"
                              name="project_id"
                              value={projectformData.project}
                              onChange={handleProjectChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {projectAll.map((project) => (
                                <option key={project.id} value={project.id}>
                                  {project.name}
                                </option>
                              ))}
                            </select>
                            {errors.project_id && (
                              <span className="invalid-feedback">
                                {errors.project_id}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectData;
