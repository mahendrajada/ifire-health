import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from 'axios';

const AssignList = () => {
  const navigate = useNavigate();
  const [newAssignData, setAssignData] = useState([]);
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, loadingscopelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList, handleScopeList } = HeaderFunctions();
  
  useEffect(() => {
    const initiaAssignData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('https://ifhirehealth.clindcast.com/api/getprojectassign', null, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        });
        setAssignData(response.data.data);
      } catch (error) {
        console.error('Error fetching IG data:', error);
      }
    };

    initiaAssignData();
  }, []);

  const handleEditAssign = async (assignId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`https://ifhirehealth.clindcast.com/api/editassignproject/${assignId}`, null,{
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        }
      });
      navigate('/edit-assign', { state: { EditassignData: response.data.data } });
    } catch (error) {
      console.error('Error fetching assign data for editing:', error);
    }
  };
  const handleDeleteAssign = async (assignId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this assign project?");
    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        await axios.post(`https://ifhirehealth.clindcast.com/api/deleteassignproject/${assignId}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
          }
        });
        setAssignData((prevAssignData) =>
        prevAssignData.filter((assign) => assign.id !== assignId)
        );
      } catch (error) {
        console.error('Error deleting assign project:', error);
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
                    All Assign Project{" "}
                  </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-assign">
                      <i className="fa fa-plus"></i> New Assign Project{" "}
                    </Link>
                  </div>
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Customer</th>
                        <th>Project</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    {newAssignData.length > 0 && newAssignData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.customer_id}</td>
                          <td>{item.project_id}</td>
                          <td>
                          <span className="edit-row cursor" onClick={() => handleEditAssign(item.id)}>
                              <img src={EditImage} alt="Edit" />
                            </span>{" "}
                            <span className="delete-row cursor" onClick={() => handleDeleteAssign(item.id)}>
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

export default AssignList;
