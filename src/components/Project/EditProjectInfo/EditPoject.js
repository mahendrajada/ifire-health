import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import IgData from "./IGData";
import ProfileData from "./ProfileData";
import ResourceData from "./ResourceData";
import AssignTSData from "./AssignTSData";

// const Loader = () => (
//   <div className="spinner-border text-primary" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// );

const EditProject = () => {
  const location = useLocation();
  const EditprojectData = location.state?.EditprojectData || {};
  const EditprojectId = EditprojectData.id;
  const navigate = useNavigate();
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList } = HeaderFunctions();

  const [formData, setFormData] = useState({
    name: EditprojectData.name || "",
    // customer_id: EditprojectData.customer_id || "",
    description: EditprojectData.description || "",
  });
  const [errors, setErrors] = useState({});
  // const [customerAll, setCustomerAll ] = useState([]);
  // const [loadingCustomersAll, setLoadingCustomersAll] = useState(true);
  
  // useEffect(() => {
  //   const fetchCustomers = async () => {
  //     try {
  //       const token = localStorage.getItem('token');
  //       const response = await axios.post(
  //         "https://ifhirehealth.clindcast.com/api/getcustomerlist",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };
  const handleCreateProject = async () => {
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
      navigate("/project-list", { state: { ProjectData: response.data.data } });
    } catch (error) {
      console.error("Error occurred while fetching project data:", error);
    }
  };
  const projectSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `https://ifhirehealth.clindcast.com/api/updateproject/${EditprojectId}`,
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
          name: "",
          // customer_id: "",
          description: "",
        });
        navigate("/project-list", {
          state: { ProjectFormData: response.data.message },
        });
        setTimeout(() => {
          handleCreateProject();
        }, 100);
      } catch (error) {
        console.error("Failed to store Project:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "First Name is required";
    }
    // if (!formData.customer_id.trim()) {
    //   errors.customer_id = "Customer is required";
    // }
    // if (!formData.description.trim()) {
    //   errors.description = "Description is required";
    // }
    return errors;
  };
  const handleCancel = () => {
    setFormData({
      name: "",
      // customer_id: "",
      description: "",
    });
  };

  return (
    <>
        <Header loading={loading} loadingoverview={loadingoverview} loadingig={loadingig} loadingusermaser={loadingusermaser} loadingcustomerlist={loadingcustomerlist} loadingprojectlist={loadingprojectlist} loadingrolelist={loadingrolelist} handleLogout={handleLogout} handleOverviewClick={handleOverviewClick} handleIGClick={handleIGClick} handleUserMaster={handleUserMaster} handleCustomerList={handleCustomerList} handleProjectList={handleProjectList} handleRoleList={handleRoleList} />
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
                  <span className="pd-overview-count">Edit Project </span>
                </div>
                {/* {loadingCustomersAll?(<Loader/>):( */}
                <div className="ig-forms">
                  <form onSubmit={projectSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name{" "}
                            <span className="text-danger fs-6">*</span>
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
                      {/* <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="customer_id" className="form-label">
                          Customer
                            <span className="text-danger fs-6">*</span>
                          </label>
                          <select
                            className={`form-select ${errors.customer_id && 'is-invalid'}`}
                            id="customer_id"
                            name="customer_id"
                            value={formData.customer_id}
                            onChange={handleInputChange}
                            aria-describedby="text"
                          >
                            {errors.customer_id && <div className="invalid-feedback">{errors.customer_id}</div>}
                            <option>Select</option>
                            {customerAll.map(customer => (
                              <option key={customer.id} value={customer.id}>{customer.name}</option>
                            ))}
                          </select>
                        </div>
                      </div> */}
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label htmlFor="description" className="form-label">
                            Description 
                            {/* <span className="text-danger fs-6">*</span> */}
                          </label>
                          <input
                            type="text"
                            // className={`form-control ${
                            //   errors.description && "is-invalid"
                            // }`}
                            className='form-control'
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            aria-describedby="text"
                            placeholder="Description"
                          />
                          {/* {errors.description && (
                            <div className="invalid-feedback">
                              {errors.description}
                            </div>
                          )} */}
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
                <IgData EditprojectId={EditprojectId} />
                <ProfileData EditprojectId={EditprojectId} />
                <ResourceData EditprojectId={EditprojectId} />
                <AssignTSData EditprojectId={EditprojectId} />
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EditProject;
