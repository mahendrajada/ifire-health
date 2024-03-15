import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
import Sidebar from "../sidebar";
import EditImage from "../../../assets/images/edit.png";
import Select from "react-select";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const IgInfoList = () => {
  const navigate = useNavigate();
  const [IGData, setIgData] = useState([]);
  const [selectedIgData, setSelectedIgData] = useState([]);
  const [loadingIgsData, setLoadingIgsData] = useState(true);
  const [graphical] = useState("1");
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
  const [formData, setFormData] = useState({
    ig: "",
  });
  const [isClearable] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (selectedOption) => {
    if (selectedOption) {
      setFormData({
        ...formData,
        ig: selectedOption.value,
      });
      setSelectedOption(selectedOption);
      setErrors({ ...errors, ig: "" });
      handleViewIg(selectedOption.value);
    } else {
      setFormData({
        ...formData,
        ig: "",
      });
      setSelectedOption(null);
      setErrors({ ...errors, ig: "Please select an IG" });
    }
  };
  
  useEffect(() => {
    const initialGData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getexecutiondefaultig",
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
        setLoadingIgsData(false);
      } catch (error) {
        console.error("Error fetching IG data:", error);
      }
    };

    initialGData();
  }, []);
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
      setSelectedIgData(response.data.igprofiles);
    } catch (error) {
      setSelectedIgData("");
      console.error("Error fetching ig data for view:", error);
    }
  };
  const handleEditJson = async (igId, ig_profile_name) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editigprofile/${igId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-iginfo", {
        state: { EditIGData: response.data.data, ig_profile_name },
      });
    } catch (error) {
      console.error("Error fetching json data for editing:", error);
    }
  };
  const handleEditGraphical = async (igId, ig_profile_name, graphical) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://ifhirehealth.clindcast.com/api/editigprofile/${igId}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        }
      );
      navigate("/edit-iginfo", {
        state: { EditIGData: response.data.data, ig_profile_name, graphical },
      });
    } catch (error) {
      console.error("Error fetching graphical data for editing:", error);
    }
  };
  // const handleEditGraphical = async (igId,ig_profile_name) => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const response = await axios.post(
  //       `https://ifhirehealth.clindcast.com/api/editigprofile/${igId}`,
  //       null,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     );
  //     navigate("/edit-graphical", {
  //       state: { EditIGData: response.data.data,ig_profile_name }
  //     });
  //   } catch (error) {
  //     console.error("Error fetching graphical data for editing:", error);
  //   }
  // };
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
              <div className="box mb-2 form-box">
                <div className="box-top-title fhir-title">
                  <span className="pd-overview-count">IG Management </span>
                </div>
                <div className="ig-forms">
                  {loadingIgsData ? (
                    <Loader />
                  ) : (
                    <div className="row">
                      <div className="col-md-9">
                        <div className="mb-3">
                          <label htmlFor="ig" className="form-label">
                            IG
                          </label>
                          <Select
                            id="ig"
                            name="ig"
                            value={selectedOption}
                            isClearable={isClearable}
                            onChange={handleInputChange}
                            options={IGData.map((ig) => ({
                              value: ig.id,
                              label: ig.name,
                            }))}
                            placeholder="Select or search..."
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {selectedIgData.length > 0 ? (
                  <table className="table-content borderd-table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Profile Name</th>
                        <th>Json Edit</th>
                        <th>Graphical Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedIgData.length > 0
                        ? selectedIgData.map((item, index) => (
                            <tr key={index}>
                              <td>{item.id}</td>
                              <td>{item.ig_profile_name}</td>
                              <td>
                                <span
                                  className="edit-row cursor"
                                  onClick={() =>
                                    handleEditJson(
                                      item.id,
                                      item.ig_profile_name
                                    )
                                  }
                                >
                                  <img src={EditImage} alt="Edit" />
                                </span>
                              </td>
                              <td>
                                <span
                                  className="edit-row cursor"
                                  onClick={() =>
                                    handleEditGraphical(
                                      item.id,
                                      item.ig_profile_name,
                                      graphical
                                    )
                                  }
                                >
                                  <img src={EditImage} alt="Edit" />
                                </span>
                              </td>
                            </tr>
                          ))
                        : ""}
                    </tbody>
                  </table>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IgInfoList;
