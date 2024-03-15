import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

const EditAssign = () => {
  const location = useLocation();
  const EditassignData = location.state?.EditassignData || {};
  const EditassignId = EditassignData.id;
  const navigate = useNavigate();
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

  const [formData, setFormData] = useState({
    customer_id: EditassignData.customer_id || "",
    project_id: EditassignData.project_id || "",
  });
  const [errors, setErrors] = useState({});
  const [customerAll, setCustomerAll] = useState([]);
  const [loadingCustomersAll, setLoadingCustomersAll] = useState(true);
  const [projectAll, setProjectAll] = useState([]);
  const [loadingProjectsAll, setLoadingProjectsAll] = useState(true);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getcustomerselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setCustomerAll(response.data.data);
        setLoadingCustomersAll(false);
      } catch (error) {
        console.error("Error fetching customer list:", error);
      }
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
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

    fetchProjects();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const handleCreateAssign = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getprojectassign",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate("/assign-list", { state: { AssignData: response.data.data } });
    } catch (error) {
      console.error("Error occurred while fetching assign data:", error);
    }
  };

  const userSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `https://ifhirehealth.clindcast.com/api/updateassignproject/${EditassignId}`,
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
          customer_id: "",
          project_id: "",
        });
        navigate("/assign-list", {
          state: { assignFormData: response.data.message },
        });
        setTimeout(() => {
          handleCreateAssign();
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
    if (!formData.customer_id) {
      errors.customer_id = "Customer is required";
    }
    if (!formData.project_id) {
      errors.role = "Role is required";
    }
    return errors;
  };
  const handleCancel = () => {
    setFormData({
      customer_id: "",
      project_id: "",
    });
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
            <div className="col-md-12">
              <div className="box mb-2 form-box">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">Add User </span>
                </div>
                <div className="ig-forms">
                  {loadingProjectsAll && loadingCustomersAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={userSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="customer_id" className="form-label">
                              Customer
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.customer_id && "is-invalid"
                              }`}
                              id="customer_id"
                              name="customer_id"
                              value={formData.customer_id}
                              onChange={handleInputChange}
                            >
                              {errors.customer_id && (
                                <div className="invalid-feedback">
                                  {errors.customer_id}
                                </div>
                              )}
                              <option value="">Select</option>
                              {customerAll.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                  {customer.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="project" className="form-label">
                              Project
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.project_id && "is-invalid"
                              }`}
                              id="project_id"
                              name="project_id"
                              value={formData.project_id}
                              onChange={handleInputChange}
                              aria-describedby="text"
                            >
                              {errors.project_id && (
                                <div className="invalid-feedback">
                                  {errors.project_id}
                                </div>
                              )}
                              <option value="">Select</option>
                              {projectAll.map((project) => (
                                <option key={project.id} value={project.id}>
                                  {project.name}
                                </option>
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

export default EditAssign;
