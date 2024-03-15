import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import UploadIcon from "../../../assets/images/upload-icon.png";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import Sidebar from "../sidebar";

const CreateIg = () => {
  const [selectedFiles, setSelectedFiles] = useState(null);
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
    name: "",
    link: "",
    customer: "",
    comments: "",
    attachment: null,
    ig_version: "",
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const handleFileChange = (e) => {
    const attachment = e.target.files[0];
    setSelectedFiles(attachment);
    setFormData({
      ...formData,
      attachment: attachment,
    });
  };

  const handleCreateIG = async () => {
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
      navigate("/ig", { state: { IGData: response.data.data } });
    } catch (error) {
      console.error("Error occurred while fetching overview data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/storeig",
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
          name: "",
          link: "",
          customer: "",
          comments: "",
          file: null,
          ig_version: "",
        });
        navigate("/ig", { state: { IGFormdata: response.data.message } });
        setTimeout(() => {
          handleCreateIG();
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
        setErrorMessage(error.response.data.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.name || !formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.link || !formData.link.trim()) {
      errors.link = "Link is required";
    }
    if (!formData.ig_version || !formData.ig_version.trim()) {
      errors.ig_version = "IG Version is required";
    }
    return errors;
  };
  const handleCancel = () => {
    setFormData({
      name: "",
      link: "",
      customer: "",
      comments: "",
      file: null,
      ig_version: "",
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
                  <span className="pd-overview-count">
                    Upload Implementation Guide (IG){" "}
                  </span>
                </div>
                <div className="ig-forms">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.name && "is-invalid"
                            }`}
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Name"
                          />
                          {errors.name && (
                            <div className="invalid-feedback">
                              {errors.name}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="link" className="form-label">
                            Link<span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.link && "is-invalid"
                            }`}
                            id="link"
                            name="link"
                            value={formData.link}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Link"
                          />
                          {errors.link && (
                            <div className="invalid-feedback">
                              {errors.link}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="customer" className="form-label">
                            Ideal Customer{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="customer"
                            name="customer"
                            value={formData.customer}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Ideal customer"
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
                            className="form-control"
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Comments"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="ig_version" className="form-label">
                            IG Version{" "}
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.ig_version && "is-invalid"
                            }`}
                            id="ig_version"
                            name="ig_version"
                            value={formData.ig_version}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="IG Version"
                          />
                          {errors.ig_version && (
                            <div className="invalid-feedback">
                              {errors.ig_version}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <label
                        htmlFor="fileUpload"
                        className="form-upload-file col-12"
                      >
                        <div className="main-container">
                          <div id="dropZone" className="drop-zone zone-bottom">
                            <label
                              htmlFor="fileUpload"
                              className="drop-zone-icons"
                            >
                              <img src={UploadIcon} alt="upload-icon" />
                            </label>
                            <input
                              type="file"
                              id="fileUpload"
                              className="visually-hidden"
                              onChange={handleFileChange}
                              multiple
                            />
                            <span className="drop-zone-text">
                              Drag drop files here or
                              <label
                                htmlFor="fileUpload"
                                className="brows-file"
                              >
                                Browse for files
                              </label>
                            </span>
                            {selectedFiles && (
                              <span className="mleft">
                                {selectedFiles.name}
                              </span>
                            )}
                          </div>
                          {errorMessage && (
                            <div className="error-message">{errorMessage}</div>
                          )}
                        </div>
                      </label>
                    </div>
                    <div className="form-buttons mtop">
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

export default CreateIg;
