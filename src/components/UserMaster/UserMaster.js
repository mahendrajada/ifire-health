import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from 'axios';

const UserMaster = () => {
  const navigate = useNavigate();
  const [newUserData, setUserData] = useState([]);
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, loadingscopelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList, handleScopeList } = HeaderFunctions();
  
  useEffect(() => {
    const initiaUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('https://ifhirehealth.clindcast.com/api/getuserlist', null, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching IG data:', error);
      }
    };

    initiaUserData();
  }, []);

  const handleEditUser = async (userId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`https://ifhirehealth.clindcast.com/api/edituser/${userId}`, null,{
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        }
      });
      navigate('/edit-user', { state: { EdituserData: response.data.data } });
    } catch (error) {
      console.error('Error fetching user data for editing:', error);
    }
  };
  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        await axios.post(`https://ifhirehealth.clindcast.com/api/deleteuser/${userId}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          }
        });
        setUserData((prevUserData) =>
        prevUserData.filter((user) => user.id !== userId)
        );
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
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
              <div className="box mb-2">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">
                    All User{" "}
                  </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-user">
                      <i className="fa fa-plus"></i> New User{" "}
                    </Link>
                  </div>
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        {/* <th>Customer</th> */}
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {newUserData.length > 0 && newUserData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          {/* <td>{item.customer_id}</td> */}
                          <td>{item.name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.role}</td>
                          <td>{item.login_status === 1 ? "Active": "Inactive"}</td>
                          <td>
                          <span className="edit-row cursor" onClick={() => handleEditUser(item.id)}>
                              <img src={EditImage} alt="Edit" />
                            </span>{" "}
                            <span className="delete-row cursor" onClick={() => handleDeleteUser(item.id)}>
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

export default UserMaster;
