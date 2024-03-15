import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import EditImage from "../../../assets/images/edit.png";
import DeleteImage from "../../../assets/images/delete.png";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "../sidebar";

const TestSetList = () => {
  const navigate = useNavigate();
  const [newTestSetData, setTestSetData] = useState([]);
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
    const initialTestSetData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/gettestsetlist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTestSetData(response.data.data);
      } catch (error) {
        console.error("Error fetching Tesset data:", error);
      }
    };

    initialTestSetData();
  }, []);
  const handleEditTestSet = async (testsetId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/edittestset/${testsetId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-testset", {
        state: { EditTestSetData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching testset data for editing:", error);
    }
  };
  const handleDeleteTestSet = async (testsetId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this TestSet?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletetestset/${testsetId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setTestSetData((prevTestSetData) =>
        prevTestSetData.filter((testset) => testset.id !== testsetId)
        );
      } catch (error) {
        console.error("Error deleting testset:", error);
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
                    All Test Set
                  </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-testset">
                      <i className="fa fa-plus"></i> New Test Set
                    </Link>
                  </div>
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>TestSet</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newTestSetData.length > 0 &&
                        newTestSetData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditTestSet(item.id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span
                                className="delete-row cursor"
                                onClick={() => handleDeleteTestSet(item.id)}
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

export default TestSetList;
