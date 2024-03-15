import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const UserData = ({ EditcustomerId }) => {
  const [userformData, setUserFormData] = useState({
    customer_id: EditcustomerId,
    user_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newUserData, setnewUserData] = useState([]);
  const [loadingUsersAll, setLoadingUsersAll] = useState(true);
  const [userAll, setUserAll] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getuserselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setUserAll(response.data.data);
        setLoadingUsersAll(false);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const handleCreateUser = async () => {
      const customer_id = EditcustomerId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getcustomeruserlist",
          { customer_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setnewUserData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching user data:", error);
      }
    };

    handleCreateUser();
  }, [EditcustomerId]);

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserFormData({
      ...userformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateUser = async () => {
    const customer_id = EditcustomerId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getcustomeruserlist",
        { customer_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setnewUserData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching user data:", error);
    }
  };

  const userSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormUser();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storecustomeruser",
          userformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setUserFormData({
          customer_id: EditcustomerId,
          user_id: "",
        });
        setTimeout(() => {
          handleCreateUser(EditcustomerId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletecustomeruser/${userId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setnewUserData((prevUserData) =>
          prevUserData.filter((user) => user.customeruser_id !== userId)
        );
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const validateFormUser = () => {
    const errors = {};
    if (!userformData.user_id.trim()) {
      errors.user_id = "User is required";
    }
    return errors;
  };

  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          User
          <button
            type="button"
            className="btn btn-primary ml8"
            data-bs-toggle="modal"
            data-bs-target="#userModel"
          >
            <i className="fa fa-plus text-white"></i>
          </button>
        </h5>
      </div>
      <div className="table-data-box table-responsive ">
        <table className="table-content borderd-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newUserData.length > 0 &&
              newUserData.map((item, index) => (
                <tr key={index}>
                  <td>{item.customeruser_id}</td>
                  <td>{item.name} {item.last_name}</td>
                  <td>{item.phone}</td>
                  <td>
                    <span
                      className="delete-row cursor"
                      onClick={() => handleDeleteUser(item.customeruser_id)}
                    >
                      <img src={DeleteImage} alt="Delete" />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="userModel"
        tabIndex="-1"
        aria-labelledby="userModelLabel"
        aria-hidden="true"
      >
        <div className="user-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="userModelLabel">
                  Add User
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
                  {loadingUsersAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={userSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="user_id" className="form-label">
                              User
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.user && "is-invalid"
                              }`}
                              id="user_id"
                              name="user_id"
                              value={userformData.user}
                              onChange={handleUserChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {userAll.map((user) => (
                                <option key={user.id} value={user.id}>
                                  {user.name}
                                </option>
                              ))}
                            </select>
                            {errors.user_id && (
                              <span className="invalid-feedback">
                                {errors.user_id}
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

export default UserData;
