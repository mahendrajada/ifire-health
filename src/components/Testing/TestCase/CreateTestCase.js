import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import Sidebar from "../sidebar";

const CreateTestCase = () => {
  const navigate = useNavigate();
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
    scenario: "",
    description: "",
    fhir_query: "",
    database_query: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const handleCreateTestCase = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/gettestcaselist",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate("/testcase-list", {
        state: { TestCaseData: response.data.data },
      });
    } catch (error) {
      console.error("Error occurred while fetching testcase data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/storetestcase",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setFormData({
          scenario: "",
          description: "",
          fhir_query: "",
          database_query: "",
          comments: "",
        });
        navigate("/testcase-list", {
          state: { TestCaseFormdata: response.data.message },
        });
        setTimeout(() => {
          handleCreateTestCase();
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
    if (!formData.scenario || !formData.scenario.trim()) {
      errors.scenario = "Scenario is required";
    }
    return errors;
  };
  const handleCancel = () => {
    setFormData({
      scenario: "",
      description: "",
      fhir_query: "",
      database_query: "",
      comments: "",
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
                  <span className="pd-overview-count">Add Test Case </span>
                </div>
                <div className="ig-forms">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="scenario" className="form-label">
                          Scenario
                          <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.scenario && "is-invalid"
                            }`}
                            id="scenario"
                            name="scenario"
                            value={formData.scenario}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Scenario"
                          />
                          {errors.scenario && (
                            <div className="invalid-feedback">
                              {errors.scenario}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description 
                            <span className="text-danger fs-6"></span>
                          </label>
                          <input
                            type="text"
                            className='form-control' 
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="fhir_query" className="form-label">
                            Fhir Query{" "}
                          </label>
                          <input
                            type="text"
                            className='form-control'
                            id="fhir_query"
                            name="fhir_query"
                            value={formData.fhir_query}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Fhir Query"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="database_query"
                            className="form-label"
                          >
                            Database Query{" "}
                          </label>
                          <input
                            type="text"
                            className='form-control'
                            id="database_query"
                            name="database_query"
                            value={formData.database_query}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Profile Version"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="comments" className="form-label">
                            Comments 
                          </label>
                          <input
                            type="text"
                            className='form-control'
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Comments"
                          />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTestCase;
