import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const ProfileData = ({ EditprojectId }) => {
  const [profileformData, setProfileFormData] = useState({
    project_id: EditprojectId,
    profile_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newProfileData, setNewProfileData] = useState([]);
  const [loadingProfilesAll, setLoadingProfilesAll] = useState(true);
  const [profileAll, setProfileAll] = useState([]);

  useEffect(() => {
    const fetchprofiles = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprofileselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProfileAll(response.data.data);
        setLoadingProfilesAll(false);
      } catch (error) {
        console.error("Error fetching profile list:", error);
      }
    };

    fetchprofiles();
  }, []);

  useEffect(() => {
    const handleCreateProfile = async () => {
      const project_id = EditprojectId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectprofilelist",
          { project_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewProfileData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching profile data:", error);
      }
    };

    handleCreateProfile();
  }, [EditprojectId]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileFormData({
      ...profileformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateProfile = async () => {
    const project_id = EditprojectId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getprojectprofilelist",
        { project_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewProfileData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching profile data:", error);
    }
  };

  const profileSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormProfile();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storeprojectprofile",
          profileformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProfileFormData({
          project_id: EditprojectId,
          profile_id: "",
        });
        setTimeout(() => {
          handleCreateProfile(EditprojectId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteProfile = async (profileId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this profile?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteprojectprofile/${profileId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewProfileData((prevProfileData) =>
          prevProfileData.filter(
            (profile) => profile.projectprofile_id !== profileId
          )
        );
      } catch (error) {
        console.error("Error deleting profile:", error);
      }
    }
  };

  const validateFormProfile = () => {
    const errors = {};
    if (!profileformData.profile_id.trim()) {
      errors.profile_id = "Profile is required";
    }
    return errors;
  };
  const role = localStorage.getItem("role");
  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Profile
          {role === "1" ? (
            <button
              type="button"
              className="btn btn-primary ml8"
              data-bs-toggle="modal"
              data-bs-target="#profileModel"
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
              <th>Name</th>
              <th>Link</th>
              <th>Ideal Customer</th>
              <th>Comments</th>
              <th>Profile Version</th>
              {role === "1" ? <th>Action</th> : ""}
            </tr>
          </thead>
          <tbody>
            {newProfileData.length > 0 &&
              newProfileData.map((item, index) => (
                <tr key={index}>
                  <td>{item.projectprofile_id}</td>
                  <td>{item.name}</td>
                  <td>{item.link}</td>
                  <td>{item.customer}</td>
                  <td className="description">{item.comments}</td>
                  <td>{item.profile_version}</td>
                  { role === '1' ? (<td>
                    <span
                      className="delete-row cursor"
                      onClick={() =>
                        handleDeleteProfile(item.projectprofile_id)
                      }
                    >
                      <img src={DeleteImage} alt="Delete" />
                    </span>
                  </td>):("")}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="profileModel"
        tabIndex="-1"
        aria-labelledby="profileModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="profileModelLabel">
                  Add Profile
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
                  {loadingProfilesAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={profileSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="profile_id" className="form-label">
                              Profile
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.profile && "is-invalid"
                              }`}
                              id="profile_id"
                              name="profile_id"
                              value={profileformData.profile}
                              onChange={handleProfileChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {profileAll.map((profile) => (
                                <option key={profile.id} value={profile.id}>
                                  {profile.name}
                                </option>
                              ))}
                            </select>
                            {errors.profile_id && (
                              <span className="invalid-feedback">
                                {errors.profile_id}
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

export default ProfileData;
