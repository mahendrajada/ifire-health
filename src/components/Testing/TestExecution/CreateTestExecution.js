import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const CreateTestExecution = () => {
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
    ig: "",
    profile: "",
    resource: "",
  });
  const [errors, setErrors] = useState({});
  const [projectAll, setProjectAll] = useState([]);
  const [testsetAll, setTestsetAll] = useState([]);
  const [testcategoryAll, setTestcategoryAll] = useState([]);
  const [testcaseAll, setTestcaseAll] = useState([]);
  const [patientAll, setPatientAll] = useState([]);
  const [igAll, setIgAll] = useState([]);
  const [profileAll, setProfileAll] = useState([]);
  const [resourceAll, setResourceAll] = useState([]);
  const [loadingProjectsetsAll, setLoadingProjectsAll] = useState(true);
  const [projectId, setProjectId] = useState("");
  const [showTextArea, setShowTextArea] = useState(false);
  const [textareaData, setTextareaData] = useState("");
  const [validatdata, setValidatdata] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getexecutionproject",
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
        console.error("Error fetching project test Execution list:", error);
      }
    };

    fetchProjects();
  }, []);
  const fetchTestSets = async (projectId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/getexecutiontestset/${projectId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setTestsetAll(response.data.data);
    } catch (error) {
      console.error("Error fetching test sets:", error);
    }
  };
  const fetchTestCategories = async (testsetId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/getexecutiontestcategory/${testsetId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setTestcategoryAll(response.data.data);
    } catch (error) {
      console.error("Error fetching test categories:", error);
    }
  };
  const fetchTestCases = async (testcaseId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/getexecutiontestcase/${testcaseId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setTestcaseAll(response.data.data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching test cases:", error);
    }
  };
  const fetchPatient = async (patient) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${patient}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setPatientAll(response.data);
      setShowTextArea(true);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };
  const fetchIgs = async (projectId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/getexecutionig/${projectId}`,
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
      console.error("Error fetching ig:", error);
    }
  };
  const fetchProfiles = async (profileId = null) => {
    try {
      const token = localStorage.getItem("token");
      let url =
        "https://ifhirehealth.clindcast.com/api/getexecutiondefaultprofile";

      if (profileId !== null) {
        url = `https://ifhirehealth.clindcast.com/api/getexecutionprofile/${profileId}`;
      }

      const response = await axios.post(url, null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      setProfileAll(response.data.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  const fetchResources = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/getexecutionresource`,
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
      console.error("Error fetching resource:", error);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
    if (name === "project") {
      const projectId = e.target.value;
      fetchTestSets(projectId);
      setProjectId(projectId);
    }
    if (name === "testset") {
      const testsetId = e.target.value;
      fetchTestCategories(testsetId);
    }
    if (name === "testcategory") {
      const testcaseId = e.target.value;
      fetchTestCases(testcaseId);
    }
    if (name === "ig") {
      const profileId = e.target.value;
      fetchProfiles(profileId);
    }
  };
  useEffect(() => {
    setTextareaData(JSON.stringify(patientAll, null, 2));
  }, [patientAll]);

  const handleTextareaChange = (e) => {
    setTextareaData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const encodedProfile = encodeURIComponent(formData.profile);
      const url = `http://208.109.213.14:4567/validate?profile=${encodedProfile}`;
      // const url = `http://208.109.213.14:4567/validate?profile=http%3A%2F%2Fhl7.org%2Ffhir%2Fus%2FeLTSS%2FStructureDefinition%2FCondition-eltss`;
      const config = {
        method: "post",
        maxBodyLength: Infinity,
        url: url,
        headers: {
          "Content-Type": "text/plain",
        },
        data: textareaData,
      };

      const validatdata = await axios.request(config);
      // setValidatdata(JSON.stringify(validatdata.data));
      setValidatdata(validatdata.data);
      // setShowPopup(false);
    } catch (error) {
      console.log(error);
    }
  };
  const errWarnning = validatdata && validatdata.issue ? validatdata.issue : "";
  const divContent =
    validatdata && validatdata.text && validatdata.text.div
      ? validatdata.text.div
      : "";
  let errcount = 1;
  let warningcount = 1;
  const renderValidationErrors = (errors) => (
    <div>
      <div className="box-top-title errcolor">
        <span className="pd-overview-count"> Validation errors: </span>
      </div>
      <>
        {errors.map((err) => (
          <div className="mbotom5" key={errcount++}>
            {errcount}. {err.expression[0]}: {err.details.text} on line{" "}
            {err.extension[0].valueInteger}.
          </div>
        ))}
      </>
    </div>
  );

  const renderValidationWarnings = (warnings) => (
    <div>
      <div className="box-top-title warcolor">
        <span className="pd-overview-count"> Validation warnings: </span>
      </div>
      <>
        {warnings.map((warn) => (
          <div className="mbotom5" key={warningcount++}>
            {warningcount}. {warn.expression[0]}: {warn.details.text} on line{" "}
            {warn.extension[0].valueInteger}.
          </div>
        ))}
      </>
    </div>
  );
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
              <div className="box mb-2 form-box">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count"> Test Execution </span>
                </div>
                <div className="ig-forms">
                  {loadingProjectsetsAll ? (
                    <Loader />
                  ) : (
                    <div className="row">
                      <div className="col-md-9">
                        <div className="mb-3">
                          <label htmlFor="project" className="form-label">
                            Project
                          </label>
                          <select
                            className="form-select"
                            id="project"
                            name="project"
                            value={formData.project}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            {projectAll.map((project) => (
                              <option key={project.id} value={project.id}>
                                {project.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="mb-3">
                          <label htmlFor="testset" className="form-label">
                            Test set
                          </label>
                          <select
                            className="form-select"
                            id="testset"
                            name="testset"
                            value={formData.testset}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            {testsetAll.map((testset) => (
                              <option key={testset.id} value={testset.id}>
                                {testset.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-9">
                        <div className="mb-3">
                          <label htmlFor="testcategory" className="form-label">
                            Test Category
                          </label>
                          <select
                            className="form-select"
                            id="testcategory"
                            name="testcategory"
                            value={formData.testcategory}
                            onChange={handleInputChange}
                          >
                            <option value="">Select</option>
                            {testcategoryAll.map((testcategory) => (
                              <option
                                key={testcategory.id}
                                value={testcategory.id}
                              >
                                {testcategory.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* <div>Validation error:1{validatewarnning.expression[0]}:{validatewarnning.details.text}</div> */}
                {showPopup && (
                  <div
                    className="modal fade show"
                    id="testModal"
                    tabIndex="-1"
                    aria-labelledby="testModalLabel"
                    aria-hidden="true"
                    style={{
                      display: "block",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable exe-model">
                      <div className="modal-content">
                        <div className="modal-header headerModel border-0">
                          <h5
                            className="modal-title text-white"
                            id="igModelLabel"
                          >
                            Test Execution
                          </h5>
                          <button
                            type="button"
                            className="btn-close white-text"
                            onClick={() => setShowPopup(false)}
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="modal-body">
                            {testcaseAll.length > 0 ? (
                              <>
                                <div className="table-data-box table-responsive ">
                                  <table className="table-content borderd-table">
                                    <thead>
                                      <tr>
                                        <th>Test ID</th>
                                        <th>Scenario</th>
                                        <th>FHIR Query</th>
                                        <th>Run</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {testcaseAll.length > 0
                                        ? testcaseAll.map((item, index) => (
                                            <tr key={index}>
                                              <td>{item.id}</td>
                                              <td>{item.scenario}</td>
                                              <td>{item.fhir_query}</td>
                                              <td className="form-buttons">
                                                <span
                                                  onClick={() => {
                                                    fetchPatient(
                                                      item.fhir_query
                                                    );
                                                    fetchIgs(projectId);
                                                    fetchProfiles();
                                                    fetchResources();
                                                  }}
                                                >
                                                  <FontAwesomeIcon
                                                    icon={faPlay}
                                                    className="run-btn cursor"
                                                  />
                                                </span>
                                              </td>
                                            </tr>
                                          ))
                                        : ""}
                                    </tbody>
                                  </table>
                                </div>
                                <br />
                                {showTextArea && (
                                  <div className="row">
                                    <form onSubmit={handleSubmit}>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <textarea
                                            className="text-area form-control"
                                            style={{ height: "230px" }}
                                            value={textareaData}
                                            onChange={handleTextareaChange}
                                          ></textarea>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="ig-forms">
                                            <div className="mb-3">
                                              <label
                                                htmlFor="ig"
                                                className="form-label"
                                              >
                                                IG
                                              </label>
                                              <select
                                                className="form-select"
                                                id="ig"
                                                name="ig"
                                                value={formData.ig}
                                                onChange={handleInputChange}
                                              >
                                                <option value="">Select</option>
                                                {igAll.map((ig) => (
                                                  <option
                                                    key={ig.id}
                                                    value={ig.id}
                                                  >
                                                    {ig.name}
                                                  </option>
                                                ))}
                                              </select>
                                            </div>
                                            <div className="mb-3">
                                              <label
                                                htmlFor="profile"
                                                className="form-label"
                                              >
                                                Profile
                                              </label>
                                              <select
                                                className="form-select"
                                                id="profile"
                                                name="profile"
                                                value={formData.profile}
                                                onChange={handleInputChange}
                                              >
                                                <option value="">Select</option>
                                                {profileAll.map((profile) => (
                                                  <option
                                                    key={profile.id}
                                                    value={profile.url}
                                                  >
                                                    {profile.name}
                                                  </option>
                                                ))}
                                              </select>
                                            </div>
                                            <div className="mb-3">
                                              <label
                                                htmlFor="resource"
                                                className="form-label"
                                              >
                                                Resource
                                              </label>
                                              <select
                                                className="form-select"
                                                id="resource"
                                                name="resource"
                                                value={formData.resource}
                                                onChange={handleInputChange}
                                              >
                                                <option value="">Select</option>
                                                {resourceAll.map((resource) => (
                                                  <option
                                                    key={resource.id}
                                                    value={resource.name}
                                                  >
                                                    {resource.name}
                                                  </option>
                                                ))}
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-buttons form-button form-float">
                                        <button
                                          type="submit"
                                          className="btn btn-primary submit-btn mr-0"
                                          // onClick={() => setShowPopup(false)}
                                        >
                                          <i className="fa fa-check" />
                                          Validate
                                        </button>
                                      </div>
                                    </form>
                                    <div
                                      className="col-md-12 validate"
                                      dangerouslySetInnerHTML={{
                                        __html: divContent,
                                      }}
                                    />
                                    <div>
                                      {errWarnning.length > 0 && (
                                        <>
                                          {errWarnning.some(
                                            (err) => err.severity === "error"
                                          ) &&
                                            renderValidationErrors(
                                              errWarnning.filter(
                                                (err) =>
                                                  err.severity === "error"
                                              )
                                            )}
                                          {errWarnning.some(
                                            (warn) =>
                                              warn.severity === "warning"
                                          ) &&
                                            renderValidationWarnings(
                                              errWarnning.filter(
                                                (warn) =>
                                                  warn.severity === "warning"
                                              )
                                            )}
                                        </>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="modal-footer border-0">
                          <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => setShowPopup(false)}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTestExecution;
