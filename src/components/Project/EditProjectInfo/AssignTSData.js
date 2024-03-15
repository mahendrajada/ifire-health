import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const AssignTSData = ({ EditprojectId }) => {
  const [assignTSformData, setAssignTSFormData] = useState({
    project_id: EditprojectId,
    testset_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newAssignTSData, setNewAssignTSData] = useState([]);
  const [loadingAssignTSsAll, setLoadingAssignTSsAll] = useState(true);
  const [assignTSAll, setAssignTSAll] = useState([]);

  useEffect(() => {
    const fetchassignTSs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/gettestsetselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setAssignTSAll(response.data.data);
        setLoadingAssignTSsAll(false);
      } catch (error) {
        console.error("Error fetching assignTS list:", error);
      }
    };

    fetchassignTSs();
  }, []);

  useEffect(() => {
    const handleCreateAssignTS = async () => {
      const project_id = EditprojectId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectsetlist",
          { project_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewAssignTSData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching assignTS data:", error);
      }
    };

    handleCreateAssignTS();
  }, [EditprojectId]);

  const handleAssignTSChange = (e) => {
    const { name, value } = e.target;
    setAssignTSFormData({
      ...assignTSformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateAssignTS = async () => {
    const project_id = EditprojectId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getprojectsetlist",
        { project_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewAssignTSData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching assignTS data:", error);
    }
  };

  const assignTSSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormAssignTS();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storeprojectset",
          assignTSformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setAssignTSFormData({
          project_id: EditprojectId,
          testset_id: "",
        });
        setTimeout(() => {
          handleCreateAssignTS(EditprojectId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteAssignTS = async (assignTSId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Test Set?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteprojectset/${assignTSId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewAssignTSData((prevAssignTSData) =>
          prevAssignTSData.filter(
            (assignTS) => assignTS.projectset_id !== assignTSId
          )
        );
      } catch (error) {
        console.error("Error deleting assignTS:", error);
      }
    }
  };

  const validateFormAssignTS = () => {
    const errors = {};
    if (!assignTSformData.testset_id.trim()) {
      errors.testset_id = "AssignTS is required";
    }
    return errors;
  };

  const role = localStorage.getItem("role");

  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Test Set
          {role === "1" ? (
            <button
              type="button"
              className="btn btn-primary ml8"
              data-bs-toggle="modal"
              data-bs-target="#assignTSModel"
            >
              <i className="fa fa-plus text-white"></i>
            </button>
          ) : (
            ""
          )}
        </h5>
      </div>
      <div className="table-data-box table-responsive ">
        <table className="table-content borderd-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TestSet</th>
              {role === "1" ? <th>Action</th> : ""}
            </tr>
          </thead>
          <tbody>
            {newAssignTSData.length > 0 &&
              newAssignTSData.map((item, index) => (
                <tr key={index}>
                  <td>{item.projectset_id}</td>
                  <td>{item.name}</td>
                  {role === "1" ? (
                    <td>
                      <span
                        className="delete-row cursor"
                        onClick={() => handleDeleteAssignTS(item.projectset_id)}
                      >
                        <img src={DeleteImage} alt="Delete" />
                      </span>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="assignTSModel"
        tabIndex="-1"
        aria-labelledby="assignTSModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="assignTSModelLabel">
                  Add Test Set
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
                  {loadingAssignTSsAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={assignTSSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="testset_id" className="form-label">
                              Test Set
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.assignTS && "is-invalid"
                              }`}
                              id="testset_id"
                              name="testset_id"
                              value={assignTSformData.assignTS}
                              onChange={handleAssignTSChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {assignTSAll.map((assignTS) => (
                                <option key={assignTS.id} value={assignTS.id}>
                                  {assignTS.name}
                                </option>
                              ))}
                            </select>
                            {errors.testset_id && (
                              <span className="invalid-feedback">
                                {errors.testset_id}
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

export default AssignTSData;
