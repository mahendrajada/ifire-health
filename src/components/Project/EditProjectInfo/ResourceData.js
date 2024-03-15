import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const ResourceData = ({ EditprojectId }) => {
  const [resourceformData, setResourceFormData] = useState({
    project_id: EditprojectId,
    resource_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newResourceData, setNewResourceData] = useState([]);
  const [loadingResourcesAll, setLoadingResourcesAll] = useState(true);
  const [resourceAll, setResourceAll] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const token = localStorage.getItem("token");
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
        setLoadingResourcesAll(false);
      } catch (error) {
        console.error("Error fetching resource list:", error);
      }
    };

    fetchResources();
  }, []);

  useEffect(() => {
    const handleCreateResource = async () => {
      const project_id = EditprojectId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectresourcelist",
          { project_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewResourceData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching resource data:", error);
      }
    };

    handleCreateResource();
  }, [EditprojectId]);

  const handleResourceChange = (e) => {
    const { name, value } = e.target;
    setResourceFormData({
      ...resourceformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateResource = async () => {
    const project_id = EditprojectId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getprojectresourcelist",
        { project_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewResourceData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching resource data:", error);
    }
  };

  const resourceSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormResource();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storeprojectresource",
          resourceformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setResourceFormData({
          project_id: EditprojectId,
          resource_id: "",
        });
        setTimeout(() => {
          handleCreateResource(EditprojectId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteResource = async (resourceId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resource?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteprojectresource/${resourceId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewResourceData((prevResourceData) =>
          prevResourceData.filter(
            (resource) => resource.projectresource_id !== resourceId
          )
        );
      } catch (error) {
        console.error("Error deleting resource:", error);
      }
    }
  };

  const validateFormResource = () => {
    const errors = {};
    if (!resourceformData.resource_id.trim()) {
      errors.resource_id = "Resource is required";
    }
    return errors;
  };

  const role = localStorage.getItem("role");

  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Resource
          {role === '1' ? (<button
            type="button"
            className="btn btn-primary ml8"
            data-bs-toggle="modal"
            data-bs-target="#resourceModel"
          >
            <i className="fa fa-plus text-white"></i>
          </button>):('')}
        </h5>
      </div>
      <div className="table-data-box table-responsive ">
        <table className="table-content borderd-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Link</th>
              <th>Ideal Customer</th>
              <th>Comments</th>
              <th>Resource Version</th>
              {role === "1" ? <th>Action</th> : ""}
            </tr>
          </thead>
          <tbody>
            {newResourceData.length > 0 &&
              newResourceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.projectresource_id}</td>
                  <td>{item.name}</td>
                  <td>{item.link}</td>
                  <td>{item.customer}</td>
                  <td className="description">{item.comments}</td>
                  <td>{item.resource_version}</td>
                  { role === '1' ? (<td>
                    <span
                      className="delete-row cursor"
                      onClick={() =>
                        handleDeleteResource(item.projectresource_id)
                      }
                    >
                      <img src={DeleteImage} alt="Delete" />
                    </span>
                  </td>) : ("")}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="resourceModel"
        tabIndex="-1"
        aria-labelledby="resourceModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="resourceModelLabel">
                  Add Resource
                </h5>
                <button
                  type="button"
                  className="btn-close white-text"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ig-forms">
                  {loadingResourcesAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={resourceSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="resource_id" className="form-label">
                              Resource
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.resource && "is-invalid"
                              }`}
                              id="resource_id"
                              name="resource_id"
                              value={resourceformData.resource}
                              onChange={handleResourceChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {resourceAll.map((resource) => (
                                <option key={resource.id} value={resource.id}>
                                  {resource.name}
                                </option>
                              ))}
                            </select>
                            {errors.resource_id && (
                              <span className="invalid-feedback">
                                {errors.resource_id}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Save changes
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

export default ResourceData;
