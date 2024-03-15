import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import UploadIcon from "../../assets/images/upload-icon.png";
import "../../styles/style.css";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";

const CreateCustomer = () => {
  const navigate = useNavigate();
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, loadingscopelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList, handleScopeList } = HeaderFunctions();
  const [formData, setFormData] = useState({
    name: "",
    linkedin: "",
    website: "",
    twitter: "",
    business_phone: "",
    business_email: "",
    billing_street: "",
    billing_city: "",
    billing_state: "",
    billing_code: "",
    billing_country: "",
    // shipping_street: "",
    // shipping_city: "",
    // shipping_state: "",
    // shipping_code: "",
    // shipping_country: "",
    logo: null,
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
  const handleCreateCustomer = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getcustomerlist",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate("/customer-list", {
        state: { CustomerData: response.data.data },
      });
    } catch (error) {
      console.error("Error occurred while fetching overview data:", error);
    }
  };
  const handleFileChange = (e) => {
    const logo = e.target.files[0];
    setFormData({
      ...formData,
      logo: logo,
    });
  };
  const customerSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/storecustomer",
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
          linkedin: "",
          website: "",
          twitter: "",
          business_phone: "",
          business_email: "",
          billing_street: "",
          billing_city: "",
          billing_state: "",
          billing_code: "",
          billing_country: "",
          // shipping_street: "",
          // shipping_city: "",
          // shipping_state: "",
          // shipping_code: "",
          // shipping_country: "",
          file: null,
        });
        navigate("/user-master", {
          state: { UserFormData: response.data.message },
        });
        setTimeout(() => {
          handleCreateCustomer();
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
    if (!formData.name.trim()) {
      errors.name = "Customer is required";
    }
    // if (!formData.linkedin.trim()) {
    //   errors.linkedin = "Linkedin is required";
    // }
    // if (!formData.website.trim()) {
    //   errors.website = "Website is required";
    // }
    // if (!formData.twitter.trim()) {
    //   errors.twitter = "Twitter is required";
    // }
    // if (!formData.business_phone.trim()) {
    //   errors.business_phone = "Phone is required";
    // } else if (!isValidPhoneNumber(formData.business_phone)) {
    //   errors.business_phone = "Invalid Phone number";
    // }
    if (!formData.business_email.trim()) {
      errors.business_email = "Email is required";
    } else if (!isValidEmail(formData.business_email)) {
      errors.business_email = "Invalid email format";
    }
    // if (!formData.billing_street.trim()) {
    //   errors.billing_street = "Billing Street is required";
    // }
    // if (!formData.billing_city.trim()) {
    //   errors.billing_city = "Billing City is required";
    // }
    // if (!formData.billing_state.trim()) {
    //   errors.billing_state = "Billing State is required";
    // }
    // if (!formData.billing_code.trim()) {
    //   errors.billing_code = "Billing Code is required";
    // }
    // if (!formData.billing_country.trim()) {
    //   errors.billing_country = "Billing Country is required";
    // }
    // if (!formData.shipping_street.trim()) {
    //   errors.shipping_street = "Shipping Street is required";
    // }
    // if (!formData.shipping_city.trim()) {
    //   errors.shipping_city = "Shipping City is required";
    // }
    // if (!formData.shipping_state.trim()) {
    //   errors.shipping_state = "Shipping State is required";
    // }
    // if (!formData.shipping_code.trim()) {
    //   errors.shipping_code = "Shipping Code is required";
    // }
    // if (!formData.shipping_country.trim()) {
    //   errors.shipping_country = "Shipping Country is required";
    // }
    return errors;
  };
  const isValidEmail = (business_email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(business_email);
  };
  // const isValidPhoneNumber = (business_phone) => {
  //   return /^\d{10}$/.test(business_phone);
  // };
  const handleCancel = () => {
    setFormData({
      name: "",
      linkedin: "",
      website: "",
      twitter: "",
      business_phone: "",
      business_email: "",
      billing_street: "",
      billing_city: "",
      billing_state: "",
      billing_code: "",
      billing_country: "",
      file: null,
      // shipping_street: "",
      // shipping_city: "",
      // shipping_state: "",
      // shipping_code: "",
      // shipping_country: "",
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
                  <span className="pd-overview-count">Add Customer </span>
                </div>
                <div className="ig-forms">
                  <form onSubmit={customerSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Customer <span className="text-danger fs-6">*</span>
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
                            placeholder="Customer"
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
                          <label
                            htmlFor="business_email"
                            className="form-label"
                          >
                            Email <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.business_email && "is-invalid"
                            }`}
                            id="business_email"
                            name="business_email"
                            value={formData.business_email}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Email"
                          />
                          {errors.business_email && (
                            <div className="invalid-feedback">
                              {errors.business_email}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="business_phone"
                            className="form-label"
                          >
                            Phone
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.business_phone && "is-invalid"
                            // }`}
                            className='form-control'
                            id="business_phone"
                            name="business_phone"
                            value={formData.business_phone}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Phone"
                          />
                          {/* {errors.business_phone && (
                            <div className="invalid-feedback">
                              {errors.business_phone}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="linkedin" className="form-label">
                            Linkedin 
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.linkedin && "is-invalid"
                            // }`}
                            className='form-control'
                            id="linkedin"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Linkedin"
                          />
                          {/* {errors.linkedin && (
                            <div className="invalid-feedback">
                              {errors.linkedin}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="website" className="form-label">
                            Website
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.website && "is-invalid"
                            // }`}
                            className='form-control'
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Website"
                          />
                          {/* {errors.website && (
                            <div className="invalid-feedback">
                              {errors.website}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="twitter" className="form-label">
                            Twitter
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.twitter && "is-invalid"
                            // }`}
                            className='form-control'
                            id="twitter"
                            name="twitter"
                            value={formData.twitter}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Twitter"
                          />
                          {/* {errors.twitter && (
                            <div className="invalid-feedback">
                              {errors.twitter}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="billing_street"
                            className="form-label"
                          >
                            Street
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.billing_street && "is-invalid"
                            // }`}
                            className='form-control'
                            id="billing_street"
                            name="billing_street"
                            value={formData.billing_street}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Street"
                          />
                          {/* {errors.billing_street && (
                            <div className="invalid-feedback">
                              {errors.billing_street}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="billing_city" className="form-label">
                            City
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            className='form-control'
                            // className={`form-control ${
                            //   errors.billing_city && "is-invalid"
                            // }`}
                            id="billing_city"
                            name="billing_city"
                            value={formData.billing_city}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="City"
                          />
                          {/* {errors.billing_city && (
                            <div className="invalid-feedback">
                              {errors.billing_city}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="billing_state" className="form-label">
                            State
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.billing_state && "is-invalid"
                            // }`}
                            className='form-control'
                            id="billing_state"
                            name="billing_state"
                            value={formData.billing_state}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="State"
                          />
                          {/* {errors.billing_state && (
                            <div className="invalid-feedback">
                              {errors.billing_state}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="billing_code" className="form-label">
                            Zip Code
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.billing_code && "is-invalid"
                            // }`}
                            className='form-control'
                            id="billing_code"
                            name="billing_code"
                            value={formData.billing_code}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Zip Code"
                          />
                          {/* {errors.billing_code && (
                            <div className="invalid-feedback">
                              {errors.billing_code}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="billing_country"
                            className="form-label"
                          >
                            Country
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.billing_country && "is-invalid"
                            // }`}
                            className='form-control'
                            id="billing_country"
                            name="billing_country"
                            value={formData.billing_country}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Country"
                          />
                          {/* {errors.billing_country && (
                            <div className="invalid-feedback">
                              {errors.billing_country}
                            </div>
                          )} */}
                        </div>
                      </div>
                      <div className="col-md-6">
                      <label
                        htmlFor="fileUpload"
                        className='form-upload-file col-12'
                        >
                        <div className="main-container">
                          <div id="dropZone" className="drop-zone">
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
                            />
                            <span className="drop-zone-text">
                              Drag drop a file here or{" "}
                              <label
                                htmlFor="fileUpload"
                                className="brows-file"
                              >
                                Browse for file
                              </label>
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>
                      {/* <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="shipping_street"
                            className="form-label"
                          >
                            Shipping Street
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.shipping_street && "is-invalid"
                            }`}
                            id="shipping_street"
                            name="shipping_street"
                            value={formData.shipping_street}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Shipping Street"
                          />
                          {errors.shipping_street && (
                            <div className="invalid-feedback">
                              {errors.shipping_street}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="shipping_city" className="form-label">
                            Shipping City
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.shipping_city && "is-invalid"
                            }`}
                            id="shipping_city"
                            name="shipping_city"
                            value={formData.shipping_city}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Shipping City"
                          />
                          {errors.shipping_city && (
                            <div className="invalid-feedback">
                              {errors.shipping_city}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="shipping_state"
                            className="form-label"
                          >
                            Shipping State
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.shipping_state && "is-invalid"
                            }`}
                            id="shipping_state"
                            name="shipping_state"
                            value={formData.shipping_state}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Shipping State"
                          />
                          {errors.shipping_state && (
                            <div className="invalid-feedback">
                              {errors.shipping_state}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="shipping_code" className="form-label">
                            Shipping Code
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.shipping_code && "is-invalid"
                            }`}
                            id="shipping_code"
                            name="shipping_code"
                            value={formData.shipping_code}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Shipping Code"
                          />
                          {errors.shipping_code && (
                            <div className="invalid-feedback">
                              {errors.shipping_code}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label
                            htmlFor="shipping_country"
                            className="form-label"
                          >
                            Shipping Country
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.shipping_country && "is-invalid"
                            }`}
                            id="shipping_country"
                            name="shipping_country"
                            value={formData.shipping_country}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Shipping Country"
                          />
                          {errors.shipping_country && (
                            <div className="invalid-feedback">
                              {errors.shipping_country}
                            </div>
                          )}
                        </div>
                      </div> */}
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

export default CreateCustomer;
