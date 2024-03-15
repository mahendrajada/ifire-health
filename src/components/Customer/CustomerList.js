import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "../../styles/style.css";
import EditImage from "../../assets/images/edit.png";
import DeleteImage from "../../assets/images/delete.png";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import axios from "axios";

const CustomerList = () => {
  const navigate = useNavigate();
  const [newCustomerData, setCustomerData] = useState([]);
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
    const initiaCustomerData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getcustomerlist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setCustomerData(response.data.data);
      } catch (error) {
        console.error("Error fetching Customer data:", error);
      }
    };

    initiaCustomerData();
  }, []);

  const handleEditUser = async (customerId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editcustomer/${customerId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-customer", {
        state: { EditCustomerData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching customer data for editing:", error);
    }
  };
  const handleDeleteCustomer = async (customerId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Customer?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletecustomer/${customerId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setCustomerData((prevCustomerData) =>
          prevCustomerData.filter((user) => user.id !== customerId)
        );
      } catch (error) {
        console.error("Error deleting user:", error);
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
                  <span className="pd-overview-count">All Customer </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-customer">
                      <i className="fa fa-plus"></i> New Customer
                    </Link>
                  </div>
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>S.No.</th>
                        <th>Customer Name</th>
                        <th>Linkedin</th>
                        <th>Website</th>
                        <th>Twitter</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newCustomerData.length > 0 &&
                        newCustomerData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.linkedin}</td>
                            <td>{item.website}</td>
                            <td>{item.twitter}</td>
                            <td>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditUser(item.id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span
                                className="delete-row cursor"
                                onClick={() => handleDeleteCustomer(item.id)}
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

export default CustomerList;
