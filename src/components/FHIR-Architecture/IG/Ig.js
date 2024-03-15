import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import ViewImage from "../../../assets/images/view.png";
import EditImage from "../../../assets/images/edit.png";
import DeleteImage from "../../../assets/images/delete.png";
import DownloadImage from "../../../assets/images/download.png";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import axios from "axios";
import Sidebar from "../sidebar";

const Ig = () => {
  const navigate = useNavigate();
  const [newIGData, setIgData] = useState([]);
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
    const initialGData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getiglist",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setIgData(response.data.data);
      } catch (error) {
        console.error("Error fetching IG data:", error);
      }
    };

    initialGData();
  }, []);
  const handleDownloadIg = async (igId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/exportig/${igId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      window.open(response.data.data, "_blank");
    } catch (error) {
      console.error("Error fetching ig data for export:", error);
    }
  };
  const handleViewIg = async (igId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/viewig/${igId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/view-ig", {
        state: { ViewIGData: response.data },
      });
    } catch (error) {
      console.error("Error fetching ig data for view:", error);
    }
  };
  const handleEditIg = async (igId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editig/${igId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-ig", {
        state: { EditIGData: response.data.data },
      });
    } catch (error) {
      console.error("Error fetching ig data for editing:", error);
    }
  };
  const handleDeleteIg = async (igId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Ig?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteig/${igId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setIgData((prevIgData) => prevIgData.filter((ig) => ig.id !== igId));
      } catch (error) {
        console.error("Error deleting ig:", error);
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
                  <span className="pd-overview-count">IG Configuration </span>
                  <div className="plus-link plus-btn">
                    <Link to="/create-ig">
                      <i className="fa fa-plus"></i> New IG{" "}
                    </Link>
                  </div>
                </div>
                <div className="responsive">
                  <div className="table-data-box table-responsive ">
                    <table className="table-content borderd-table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Link</th>
                          <th>Ideal Customer</th>
                          <th>Comments</th>
                          <th>IG Version</th>
                          <th>Upload date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {newIGData.length > 0 &&
                          newIGData.map((item, index) => (
                            <tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.link}</td>
                              <td>{item.customer}</td>
                              <td className="description">{item.comments}</td>
                              <td>{item.ig_version}</td>
                              <td className="prl-7">{item.updated_at}</td>
                              <td className="prl-7">
                                <span
                                  className="edit-row cursor"
                                  onClick={() => handleDownloadIg(item.id)}
                                >
                                  <img src={DownloadImage} alt="Export" />
                                </span>
                                <span
                                  className="edit-row cursor"
                                  onClick={() => handleViewIg(item.id)}
                                >
                                  <img src={ViewImage} alt="Edit" />
                                </span>
                                <span
                                  className="edit-row cursor"
                                  onClick={() => handleEditIg(item.id)}
                                >
                                  <img src={EditImage} alt="Edit" />
                                </span>{" "}
                                <span
                                  className="delete-row cursor"
                                  onClick={() => handleDeleteIg(item.id)}
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
      </div>
    </>
  );
};

export default Ig;
