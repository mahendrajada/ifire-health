import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import SucessIcon from "../../assets/images/success-icon.png";
import CloseIcon from "../../assets/images/close-icon.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import Sidebar from "./sidebar";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const CreateIgAssign = () => {
  const {
    loading,
    loadingoverview,
    loadingig,
    loadingusermaser,
    loadingcustomerlist,
    loadingprojectlist,
    loadingrolelist,
    handleLogout,
    handleOverviewClick,
    handleIGClick,
    handleUserMaster,
    handleCustomerList,
    handleProjectList,
    handleRoleList,
  } = HeaderFunctions();
  const [formData, setFormData] = useState({
    project_name: "",
    ig_name: "",
  });
  const [errors, setErrors] = useState({});
  const [ProjectAll, setProjectAll] = useState([]);
  const [loadingProjectsAll, setLoadingProjectsAll] = useState(true);
  const [IgAll, setIgAll] = useState([]);
  const [loadingIgsAll, setLoadingIgsAll] = useState(true);
  const [message, setMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
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
        setProjectAll(response.data.data);
        setLoadingProjectsAll(false);
      } catch (error) {
        console.error("Error fetching proect list:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchIgs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getiglist",
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
        setLoadingIgsAll(false);
      } catch (error) {
        console.error("Error fetching ig list:", error);
      }
    };

    fetchIgs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/assignigtoproject",
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
        project_name: "",
        ig_name: "",
      });
      setMessage(response.data.message);
      setShowSuccessPopup(true);
    } catch (error) {
      console.error("Failed to store data:", error.message);
    }
  };

  const handleCloseSuccessPopup = () => {
    setShowSuccessPopup(false);
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
        handleLogout={handleLogout}
        handleOverviewClick={handleOverviewClick}
        handleIGClick={handleIGClick}
        handleUserMaster={handleUserMaster}
        handleCustomerList={handleCustomerList}
        handleProjectList={handleProjectList}
        handleRoleList={handleRoleList}
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
              <div className="box mb-2 form-box">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">
                    Ig Assignment to Project{" "}
                  </span>
                </div>
                <div className="ig-forms">
                  {loadingProjectsAll || loadingIgsAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label
                              htmlFor="project_name"
                              className="form-label"
                            >
                              Project Name
                            </label>
                            <select
                              className="form-select"
                              id="project_name"
                              name="project_name"
                              value={formData.project_name}
                              onChange={handleInputChange}
                              aria-describedby="text"
                            >
                              <option>Select</option>
                              {ProjectAll.map((project) => (
                                <option key={project.id} value={project.id}>
                                  {project.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="ig_name" className="form-label">
                              IG Name
                            </label>
                            <select
                              className="form-select"
                              id="ig_name"
                              name="ig_name"
                              value={formData.ig_name}
                              onChange={handleInputChange}
                              aria-describedby="text"
                            >
                              <option>Select</option>
                              {IgAll.map((ig) => (
                                <option key={ig.id} value={ig.id}>
                                  {ig.name}
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
                      </div>
                    </form>
                  )}
                </div>
              </div>
              {showSuccessPopup && (
                <div className="table-data-box table-responsive ">
                  <div className="success-popup">
                    <img src={SucessIcon} alt="sucessicon" />
                    <p>{message}</p>
                    <img
                      className="cursor"
                      src={CloseIcon}
                      alt="closicon"
                      onClick={handleCloseSuccessPopup}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateIgAssign;
