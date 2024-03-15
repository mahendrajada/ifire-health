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

const CreateUser = () => {
  const navigate = useNavigate();
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, loadingscopelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList, handleScopeList } = HeaderFunctions();
  const [formData, setFormData] = useState({

    // customer_id: "",
    name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    
  });
  const [errors, setErrors] = useState({});
  const [roleAll, setRoleAll ] = useState([]);
  const [loadingRolesAll, setLoadingRolesAll] = useState(true);
  // const [customerAll, setCustomerAll] = useState([]);
  // const [loadingCustomersAll, setLoadingCustomersAll] = useState(true);
  
  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const response = await axios.post(
  //         "https://ifhirehealth.clindcast.com/api/getcustomerselect",
  //         null,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             Accept: "application/json",
  //             "Content-Type": "application/x-www-form-urlencoded",
  //           },
  //         }
  //       );
  //       setCustomerAll(response.data.data);
  //       setLoadingCustomersAll(false);
  //     } catch (error) {
  //       console.error("Error fetching customer list:", error);
  //     }
  //   };

  //   fetchCustomers();
  // }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getrolelist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setRoleAll(response.data.data);
        setLoadingRolesAll(false);
      } catch (error) {
        console.error("Error fetching role list:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' });
  };
  const handleCreateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getuserlist",
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      navigate("/user-master", { state: { UserData: response.data.data } });
    } catch (error) {
      console.error("Error occurred while fetching overview data:", error);
    }
  };

  const userSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/storeuser",
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
        // customer_id: "",
        name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });
      navigate("/user-master", { state: { UserFormData: response.data.message } });
      setTimeout(() => {
        handleCreateUser();
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
    // if (!formData.customer_id) {
    //   errors.customer_id = 'Customer is required';
    // }
    if (!formData.name.trim()) {
      errors.name = 'First Name is required';
    }else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      errors.name = 'First Name should not contain numbers';
    }
    if (!formData.last_name.trim()) {
      errors.last_name = 'Last Name is required';
    }else if (!/^[A-Za-z\s]+$/.test(formData.last_name.trim())) {
      errors.last_name = 'Last Name should not contain numbers';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.phone) {
      errors.phone = 'Mobile is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid mobile number';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    if (!formData.role) {
      errors.role = 'Role is required';
    }
    return errors;
  };
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const isValidPhoneNumber = (phone) => {
    return /^\d{10}$/.test(phone);
  };
  const handleCancel = () => {
    setFormData({
      // customer_id: "",
      name: "",
      last_name: "",
      email: "",
      phone: "",
      password: "",
      role: "",
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
                  <span className="pd-overview-count">Add User </span>
                </div>
                <div className="ig-forms">
                {loadingRolesAll ? (<Loader/>):(
                  <form onSubmit={userSubmit}>
                    <div className="row">
                    {/* <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="customer_id" className="form-label">
                            Customer 
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.customer_id && 'is-invalid'}`}
                            // className="form-select"
                            id="customer_id"
                            name="customer_id"
                            value={formData.customer}
                            onChange={handleInputChange}
                          >
                            {errors.customer_id && <div className="invalid-feedback">{errors.customer_id}</div>}
                            <option value="">Select</option>
                            {customerAll.map(customer => (
                              <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                          </select>
                        </div>
                      </div> */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            First Name <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.name && 'is-invalid'}`}                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="First Name"
                          />
                          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="last_name" className="form-label">
                            Last Name <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.last_name && 'is-invalid'}`}
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Last Name"
                          />
                          {errors.last_name && <div className="invalid-feedback">{errors.last_name}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email <span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.email && 'is-invalid'}`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Email"
                          />
                          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Mobile<span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="text"
                            className={`form-control ${errors.phone && 'is-invalid'}`}
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Mobile"
                          />
                          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="password" className="form-label">
                            Password<span className="text-danger fs-6">*</span>
                          </label>
                          <input
                            type="password"
                            className={`form-control ${errors.password && 'is-invalid'}`}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Password"
                          />
                           {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="role" className="form-label">
                            Role 
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.role && 'is-invalid'}`}
                            // className="form-select"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                          >
                            {errors.role && <div className="invalid-feedback">{errors.role}</div>}
                            <option value="">Select</option>
                            {roleAll.map(role => (
                              <option key={role.role_id} value={role.role_id}>{role.name}</option>
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

export default CreateUser;
