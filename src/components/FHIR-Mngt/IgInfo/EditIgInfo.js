import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import Sidebar from "../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";

const EditIgInfo = () => {
  const location = useLocation();
  const EditIgData = location.state?.EditIGData || {};
  const IGProfileName = location.state?.ig_profile_name || {};
  const Graphical = location.state?.graphical || {};
  const EditigJson = EditIgData.json;
  const EditigId = EditIgData.id;
  const JsonIgData = EditIgData.json.snapshot.element;
  const [tableData, setTableData] = useState(JsonIgData);

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

  const [errors, setErrors] = useState({});
  const [ProfileData, setTextareaData] = useState("");
  useEffect(() => {
    setTextareaData(JSON.stringify(EditigJson, null, 2));
  }, [EditigJson]);

  const handleTextareaChange = (e) => {
    setTextareaData(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `https://ifhirehealth.clindcast.com/api/updateigprofile/${EditigId}`,
          { json: ProfileData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          }
        );
        navigate("/iginfo-list", {
          state: { IGFormdata: response.data.message },
        });
        setTextareaData("");
        setErrors({});
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!ProfileData.trim()) {
      errors.ProfileData = "Json is required";
    }
    return errors;
  };
  const handleCancel = () => {
    setTextareaData("");
  };
  const handleInputChange = (index, fieldName, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[index][fieldName] = value;
    setTableData(updatedTableData);
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
                <div
                  className={`box-top-title fhir-title ${
                    Graphical === "1" ? "mb-0" : ""
                  }`}
                >
                  <span className="pd-overview-count">{IGProfileName}</span>
                </div>
                {Graphical !== "1" ? (
                  <div className="ig-forms">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Json <span className="text-danger fs-6">*</span>
                            </label>
                            <textarea
                              name="json"
                              className={`text-area form-control ${
                                errors.ProfileData && "is-invalid"
                              }`}
                              style={{ height: "230px" }}
                              placeholder="Json"
                              value={ProfileData}
                              onChange={handleTextareaChange}
                            />
                            {errors.ProfileData && (
                              <div className="invalid-feedback">
                                {errors.ProfileData}
                              </div>
                            )}
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
                ) : (
                  <>
                    {JsonIgData.length > 0 ? (
                      <div className="table-data-box table-responsive">
                        <table className="table-content borderd-table">
                          <thead>
                            <tr>
                              <th>Path</th>
                              <th>Description</th>
                              <th>Min</th>
                              <th>Max</th>
                              <th>Type</th>
                              <th>IsModifier</th>
                              <th>IsSummary</th>
                            </tr>
                          </thead>
                          <tbody>
                            {JsonIgData.map((item, index) => (
                              <tr key={item.id}>
                                <td>
                                  {item.path.length > 0 ? item.path : null}
                                </td>
                                <td>
                                  {item.short.length > 0 ? item.short : null}
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="custom-text"
                                    value={item.min}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "min",
                                        e.target.value
                                      )
                                    }
                                    onBlur={(e) =>
                                      handleInputChange(
                                        index,
                                        "min",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="custom-text"
                                    value={item.max}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "max",
                                        e.target.value
                                      )
                                    }
                                    onBlur={(e) =>
                                      handleInputChange(
                                        index,
                                        "max",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  {item.type &&
                                  Array.isArray(item.type) &&
                                  item.type.length > 0
                                    ? item.type[0].code
                                    : null}
                                </td>
                                <td>
                                  {item.isModifier ? (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faCheck}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faTimes}
                                    />
                                  )}
                                </td>
                                <td>
                                  {item.isSummary ? (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faCheck}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faTimes}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditIgInfo;
