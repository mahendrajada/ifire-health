import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import EditImage from "../../../assets/images/edit.png";
import DeleteImage from "../../../assets/images/delete.png";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "../sidebar";

const TestCaseList = () => {
  const navigate = useNavigate();
  const [newTestCaseData, setTestCaseData] = useState([]);
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
    const initialTestCaseData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/gettestcaselist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTestCaseData(response.data.data);
      } catch (error) {
        console.error("Error fetching TesCase data:", error);
      }
    };

    initialTestCaseData();
  }, []);
  const handleEditTestCase = async (testcaseId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/edittestcase/${testcaseId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-testcase", {
        state: { EditTestCaseData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching testcase data for editing:", error);
    }
  };
  const handleDeleteTestCase = async (testcaseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this TestCase?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletetestcase/${testcaseId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setTestCaseData((prevTestCaseData) =>
        prevTestCaseData.filter((testcase) => testcase.id !== testcaseId)
        );
      } catch (error) {
        console.error("Error deleting testcase:", error);
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
                    All Test Case {" "}
                  </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-testcase">
                      <i className="fa fa-plus"></i> New Test Case
                    </Link>
                  </div>
                </div>
                <div className="table-data-box table-responsive ">
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Scenario</th>
                        <th>Description</th>
                        <th>FHIR Query</th>
                        <th>Database Query</th>
                        <th>Comments</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {newTestCaseData.length > 0 &&
                        newTestCaseData.map((item, index) => (
                          <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.scenario}</td>
                            <td>{item.description}</td>
                            <td>{item.fhir_query}</td>
                            <td>{item.database_query}</td>
                            <td>{item.comments}</td>
                            <td>
                              <span
                                className="edit-row cursor"
                                onClick={() => handleEditTestCase(item.id)}
                              >
                                <img src={EditImage} alt="Edit" />
                              </span>{" "}
                              <span
                                className="delete-row cursor"
                                onClick={() => handleDeleteTestCase(item.id)}
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

export default TestCaseList;
