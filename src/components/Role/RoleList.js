import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";

const RoleList = () => {
  const navigate = useNavigate();
  const [newRoleData, setRoleData] = useState([]);
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
    const initiaRoleData = async () => {
      try {
        const token = localStorage.getItem("token");
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
        setRoleData(response.data.data);
      } catch (error) {
        console.error("Error fetching Role data:", error);
      }
    };

    initiaRoleData();
  }, []);

  const handleEditRole = async (roleId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editrole/${roleId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-role", { state: { EditroleData: response.data.data } });
    } catch (error) {
      console.error("Error fetching role data for editing:", error);
    }
  };
  // const afterDeleteRole = async () => {
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await axios.post('https://ifhirehealth.clindcast.com/api/getrolelist', null,{
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         Accept: 'application/json',
  //         'Content-Type': 'application/x-www-form-urlencoded'
  //       }
  //     });
  //     setRoleData(response.data.data);
  //   } catch (error) {
  //     console.error('Error fetching role data for editing:', error);
  //   }
  // };
  const handleDeleteRole = async (roleId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleterole/${roleId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setRoleData((prevRoleData) =>
          prevRoleData.filter((role) => role.role_id !== roleId)
        );
      //   setProjectData((prevProjectData) =>
      //   prevProjectData.filter((project) => project.id !== projectId)
      // );
        // afterDeleteRole();
      } catch (error) {
        console.error("Error deleting role:", error);
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
            <div className="col-md-12">
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">All Role </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-role">
                      <i className="fa fa-plus"></i> New Role{" "}
                    </Link>
                  </div>
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Role</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newRoleData.length > 0 &&
                        newRoleData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.role_id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.role_status === 1 ? "Active" : "Inactive"}</td>
                            <td>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditRole(item.role_id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span
                                className="delete-row cursor"
                                onClick={() => handleDeleteRole(item.role_id)}
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

export default RoleList;
