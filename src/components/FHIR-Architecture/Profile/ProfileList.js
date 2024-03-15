import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import ViewImage from "../../../assets/images/view.png";
import EditImage from "../../../assets/images/edit.png";
import DeleteImage from "../../../assets/images/delete.png";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "../sidebar";

const ProfileList = () => {
  const navigate = useNavigate();
  const [newProfileData, setProfileData] = useState([]);
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

  useEffect(() => {
    const initialProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprofilelist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setProfileData(response.data.data);
      } catch (error) {
        console.error("Error fetching IG data:", error);
      }
    };

    initialProfileData();
  }, []);
  const handleViewProfile = async (profileId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/viewprofile/${profileId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/view-profile", {
        state: { ViewProfileData: response.data },
      });
    } catch (error) {
      console.error("Error fetching profile data for view:", error);
    }
  };
  const handleEditProfile = async (profileId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editprofile/${profileId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-profile", {
        state: { EditProfileData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching profile data for editing:", error);
    }
  };
  const handleDeleteProfile = async (profileId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Profile?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteprofile/${profileId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setProfileData((prevProfileData) =>
          prevProfileData.filter((profile) => profile.id !== profileId)
        );
      } catch (error) {
        console.error("Error deleting profile:", error);
      }
    }
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
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">
                    Profile Configuration{" "}
                  </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-profile">
                      <i className="fa fa-plus"></i> New Profile{" "}
                    </Link>
                  </div>
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
                        <th>Upload date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newProfileData.length > 0 &&
                        newProfileData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.link}</td>
                            <td>{item.customer}</td>
                            <td className="description">{item.comments}</td>
                            <td>{item.profile_version}</td>
                            <td className="prl-7">{item.updated_at}</td>
                            <td className="prl-7">
                              <span
                                className="edit-row cursor"
                                onClick={() => handleViewProfile(item.id)}
                              >
                                <img src={ViewImage} alt="Edit" />
                              </span>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditProfile(item.id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span
                                className="delete-row cursor"
                                onClick={() => handleDeleteProfile(item.id)}
                              >
                                <img src={DeleteImage} alt="Delete" />
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileList;
