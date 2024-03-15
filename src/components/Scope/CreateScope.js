import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const CreateScope = () => {
  const navigate = useNavigate();
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, loadingscopelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList, handleScopeList } = HeaderFunctions();
  const [formData, setFormData] = useState({
    project_id: "",
    ig_id: "",
    profile_id: "",
    resource_id:"",
  });
  const [errors, setErrors] = useState({});
  const [projectAll, setProjectAll ] = useState([]);
  const [loadingProjectsAll, setLoadingProjectsAll] = useState(true);
  const [igAll, setIgAll ] = useState([]);
  const [profileAll, setProfileAll ] = useState([]);
  const [resourceAll, setResourceAll ] = useState([]);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
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

    fetchProjects();
  }, []);
  useEffect(() => {
    const fetchIgs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getigselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setIgAll(response.data.data);
      } catch (error) {
        console.error("Error fetching ig list:", error);
      }
    };

    fetchIgs();
  }, []);
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprofileselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProfileAll(response.data.data);
      } catch (error) {
        console.error("Error fetching profile list:", error);
      }
    };

    fetchProfiles();
  }, []);
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getresourceselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setResourceAll(response.data.data);
      } catch (error) {
        console.error("Error fetching resource list:", error);
      }
    };

    fetchResources();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const handleCreateScope = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getprojectscopelist",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate("/scope-list", { state: { ScopeData: response.data.data } });
    } catch (error) {
      console.error("Error occurred while fetching scope data:", error);
    }
  };
  const scopeSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/storeprojectscope",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setFormData({
          project_id: "",
          ig_id: "",
          profile_id: "",
          resource_id: "",
        });
        navigate("/scope-list", {
          state: { ScopeFormData: response.data.message },
        });
        setTimeout(() => {
          handleCreateScope();
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.project_id.trim()) {
      errors.project_id = "Project is required";
    }
    if (!formData.ig_id.trim()) {
      errors.ig_id = "IG is required";
    }
    if (!formData.profile_id.trim()) {
      errors.profile_id = "Profile is required";
    }
    if (!formData.resource_id.trim()) {
      errors.resource_id = "Resource is required";
    }
    return errors;
  };
  const handleCancel = () => {
    setFormData({
      project_id: "",
      ig_id: "",
      profile_id: "",
      resource_id: "",
    });
  };

  return (
    <>
      <Header loading={loading} loadingoverview={loadingoverview} loadingig={loadingig} loadingusermaser={loadingusermaser} loadingcustomerlist={loadingcustomerlist} loadingprojectlist={loadingprojectlist} loadingrolelist={loadingrolelist} loadingscopelist={loadingscopelist} handleLogout={handleLogout} handleOverviewClick={handleOverviewClick} handleIGClick={handleIGClick} handleUserMaster={handleUserMaster} handleCustomerList={handleCustomerList} handleProjectList={handleProjectList} handleRoleList={handleRoleList} handleScopeList={handleScopeList} />
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
              <div className="box mb-2 form-box">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">Add Project Scope</span>
                </div>
                <div className="ig-forms">
                  {loadingProjectsAll ? (<Loader/>):(
                  <form onSubmit={scopeSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="project" className="form-label">
                          Project
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.project_id && 'is-invalid'}`}
                            id="project_id"
                            name="project_id"
                            value={formData.project}
                            onChange={handleInputChange}
                            aria-describedby="text"
                          >
                            {errors.project_id && <div className="invalid-feedback">{errors.project_id}</div>}
                            <option value="">Select</option>
                            {projectAll.map(project => (
                              <option key={project.id} value={project.id}>{project.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="ig_id" className="form-label">
                          IG
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.ig && 'is-invalid'}`}
                            id="ig_id"
                            name="ig_id"
                            value={formData.ig}
                            onChange={handleInputChange}
                            aria-describedby="text"
                          >
                            {errors.ig_id && <div className="invalid-feedback">{errors.ig_id}</div>}
                            <option value="">Select</option>
                            {igAll.map(ig => (
                              <option key={ig.id} value={ig.id}>{ig.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="profile_id" className="form-label">
                          Profile
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.profile_id && 'is-invalid'}`}
                            id="profile_id"
                            name="profile_id"
                            value={formData.profile}
                            onChange={handleInputChange}
                            aria-describedby="text"
                          >
                            {errors.profile_id && <div className="invalid-feedback">{errors.profile_id}</div>}
                            <option value="">Select</option>
                            {profileAll.map(profile => (
                              <option key={profile.id} value={profile.id}>{profile.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="resource_id" className="form-label">
                          Resource
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.resource_id && 'is-invalid'}`}
                            id="resource_id"
                            name="resource_id"
                            value={formData.resource}
                            onChange={handleInputChange}
                            aria-describedby="text"
                          >
                            {errors.resource_id && <div className="invalid-feedback">{errors.resource_id}</div>}
                            <option value="">Select</option>
                            {resourceAll.map(resource => (
                              <option key={resource.id} value={resource.id}>{resource.name}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-buttons">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        <i className="fa fa-check" /> Submit
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary cancel-btn"
                        onClick={handleCancel}
                      >
                        <i className="fa fa-close" /> Cancel
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

export default CreateScope;
