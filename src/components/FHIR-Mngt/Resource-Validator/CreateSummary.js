import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import "../../../styles/style.css";
import HeaderFunctions from "../../HeaderFunctions/HeaderFunctions";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
// } from "@mui/material";
// import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../sidebar";

const CreateSummary = () => {
  const {
    loading,
    loadingoverview,
    loadingig,
    loadingusermaser,
    loadingcustomerlist,
    loadingprojectlist,
    loadingrolelist,
    handleLogout,
    handleOverviewClick,
    handleIGClick,
    handleUserMaster,
    handleCustomerList,
    handleProjectList,
    handleRoleList,
  } = HeaderFunctions();

  const [ProfileAll, setProfileAll] = useState([]);
  const [loadingProfilesAll, setloadingProfilesAll] = useState(true);
  const [IgAll, setIgAll] = useState([]);
  const [loadingIgsAll, setloadingIgsAll] = useState(true);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ig");
  const [selectedIg, setSelectedIg] = useState("hl7.fhir.us.eltss");
  const [selectedProfile, setSelectedProfile] = useState("");
  const [TableAll, setTableAll] = useState([]);
  const [loadingTablesAll, setloadingTablesAll] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);
  // const [minValue, setMinValue] = useState('');
  // const [maxValue, setMaxValue] = useState('');
  const [tableData, setTableData] = useState(TableAll);

  //setTableData(response.data);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.put(
          "http://208.109.213.14:4567/igs/hl7.fhir.us.eltss"
        );
        setProfileAll(response.data.profiles);
        setloadingProfilesAll(false);
      } catch (error) {
        console.error("Error fetching profile list:", error);
      }
    };
    fetchProfiles();
  }, []);

  useEffect(() => {
    const fetchIgs = async () => {
      try {
        const response = await axios.get("http://208.109.213.14:4567/igs");
        setIgAll(response.data);
        setloadingIgsAll(false);
      } catch (error) {
        console.error("Error fetching ig list:", error);
      }
    };
    fetchIgs();
  }, []);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.put(
          `http://208.109.213.14:4567/igs/${selectedIg}`
        );
        setProfileAll(response.data.profiles);
        setloadingProfilesAll(false);
      } catch (error) {
        const profilerror = [];
        setProfileAll(profilerror);
        console.error("Error fetching profile list:", error);
      }
    };

    if (selectedIg) {
      fetchProfiles();
    }
  }, [selectedIg]);

  useEffect(() => {
    if (selectedIg && selectedProfile && profileChanged) {
      const fetchData = async () => {
        try {
          setloadingTablesAll(true);
          const response = await axios.post(
            "http://208.109.213.14:4567/profile-schema",
            {
              ig: selectedIg,
              profile: selectedProfile,
            }
          );
          if (response.data !== "null") {
            setTableAll(response.data);
          }
        } catch (error) {
          console.error("Error sending data to API:", error);
        } finally {
          setloadingTablesAll(false);
        }
      };
      fetchData();
    }
  }, [selectedIg, selectedProfile, profileChanged]);

  const IgAllArray = Object.keys(IgAll).map((key) => ({
    packageName: key,
    packageUrl: IgAll[key],
  }));

  const handleIgChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedIg(selectedValue);
    setProfileChanged(false);
  };
  const handleProfileChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProfile(selectedValue);
    setProfileChanged(true);
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  // const StyledTable = styled(Table)`
  //   margin: 10px auto 0 auto;
  // `;
  // const Thead = styled(TableRow)`
  //   & > th {
  //     font-size: 13px;
  //     font-weight: 600 !important;
  //   }
  // `;
  // const TBody = styled(TableRow)`
  //   & > td {
  //     font-size: 13px;
  //   }
  // `;
  // const handleMinChange = (event) => {
  //   setMinValue(event.target.value);
  // };
  // const handleMaxChange = (event) => {
  //   setMaxValue(event.target.value);
  // }
  const handleInputChange = (index, fieldName, value) => {
    // Make a copy of tableData
    const updatedTableData = [...tableData];
    // Update the specified field in the item at the given index
    updatedTableData[index][fieldName] = value;
    // Update the state with the modified data
    setTableData(updatedTableData);
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
        handleLogout={handleLogout}
        handleOverviewClick={handleOverviewClick}
        handleIGClick={handleIGClick}
        handleUserMaster={handleUserMaster}
        handleCustomerList={handleCustomerList}
        handleProjectList={handleProjectList}
        handleRoleList={handleRoleList}
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
                <div className="ig-forms">
                  <div className="box-top-title fhir-title">
                    <span className="pd-overview-count">
                      Resource Validator
                    </span>
                  </div>
                  <form aria-label="validator form">
                    <div className="card">
                      <div className="card-header">Resource</div>
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="resource_field">
                            Paste your HL7® FHIR® resource here:
                          </label>
                          <textarea
                            name="resource_field"
                            id="resource_field"
                            className="form-control custom-text-area "
                            rows={8}
                            defaultValue={""}
                          />
                          <div className="invalid-feedback" />
                          <br />
                          <div className="input-group custom-border">
                            <div className="custom-file flex-wrap">
                              <input
                                type="file"
                                name="resource_file"
                                id="resource_file"
                                className="custom-file-input "
                              />
                              <label
                                htmlFor="resource_file"
                                className="custom-file-label "
                              >
                                Or upload a resource in a file:
                              </label>
                              <div className="invalid-feedback w-100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="accordion" id="advanced-options">
                      <div className="card" style={{ overflow: "hidden" }}>
                        <button
                          className="card-header btn btn-link text-left align-left btn-color"
                          type="button"
                          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                          aria-expanded={isAdvancedOpen ? "true" : "false"}
                          aria-controls="advanced-body"
                        >
                          Advanced Options
                        </button>
                        <div
                          id="advanced-body"
                          className={`collapse ${isAdvancedOpen ? "show" : ""}`}
                          aria-labelledby="advanced-header"
                          data-parent="#advanced-options"
                        >
                          <div className="card-body">
                            <ul
                              className="nav nav-tabs"
                              id="profile-options"
                              role="tablist"
                            >
                              <li className="nav-item cursor">
                                <span
                                  className={`nav-link ${
                                    activeTab === "ig" ? "active" : ""
                                  }`}
                                  onClick={() => handleTabClick("ig")}
                                >
                                  Upload IG from fileF
                                </span>
                              </li>
                              <li className="nav-item cursor">
                                <span
                                  className={`nav-link ${
                                    activeTab === "profile" ? "active" : ""
                                  }`}
                                  onClick={() => handleTabClick("profile")}
                                >
                                  Load profile from IG
                                </span>
                              </li>
                              <li className="nav-item cursor">
                                <span
                                  className={`nav-link ${
                                    activeTab === "standalone" ? "active" : ""
                                  }`}
                                  onClick={() => handleTabClick("standalone")}
                                >
                                  Load standalone profile
                                </span>
                              </li>
                            </ul>
                            <br />
                            <p>
                              By default, the FHIR Validator validates your
                              resources using the profile URLs found in the
                              "meta.profile" field of your resource (or the Base
                              FHIR profiles if no profile URLs are present).
                              However, you may choose to use existing profiles
                              from other Implementation Guides or use your own
                              profile to validate your resources.
                            </p>
                            <div
                              className="tab-content"
                              id="profile-options-content"
                            >
                              <div
                                className={`tab-pane fade ${
                                  activeTab === "ig" ? "show active" : ""
                                }`}
                                id="ig"
                              >
                                <div className="form-group">
                                  <label className="mb-2">
                                    Don't see your Implementation Guide listed
                                    below? Upload your own as a package.tgz!
                                  </label>
                                  <div className="input-group custom-border">
                                    <div className="custom-file flex-wrap">
                                      <input
                                        type="file"
                                        id="ig-upload"
                                        className="custom-file-input "
                                      />
                                      <label
                                        htmlFor="ig-upload"
                                        className="custom-file-label"
                                      >
                                        Upload a package.tgz
                                      </label>
                                      <div className="valid-feedback w-100">
                                        Successfully uploaded IG "" (version )
                                      </div>
                                      <div className="invalid-feedback w-100">
                                        Failed to upload IG
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <div>
                                    <div className="col-md-12">
                                      <div className="mb-3">
                                        <label htmlFor="ig" className="mb-2">
                                          Select a profile:
                                        </label>
                                        <select
                                          className="form-select"
                                          id="ig"
                                          name="ig"
                                          value={selectedProfile}
                                          onChange={handleProfileChange}
                                          aria-describedby="text"
                                        >
                                          <option value="">Select...</option>
                                          {loadingProfilesAll ? (
                                            <option value="">Loading...</option>
                                          ) : (
                                            ProfileAll.map((profile, igkey) => (
                                              <option
                                                key={`profile_${igkey}`}
                                                value={profile.id}
                                              >
                                                {profile}
                                              </option>
                                            ))
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`tab-pane fade ${
                                  activeTab === "profile" ? "show active" : ""
                                }`}
                                id="profile"
                              >
                                <div className="form-group">
                                  <label className="mb-2">
                                    Don't see your Implementation Guide listed
                                    below? Upload your own as a package.tgz!
                                  </label>
                                  <div className="input-group custom-border">
                                    <div className="custom-file flex-wrap">
                                      <input
                                        type="file"
                                        id="ig-upload"
                                        className="custom-file-input "
                                      />
                                      <label
                                        htmlFor="ig-upload"
                                        className="custom-file-label"
                                      >
                                        Upload a package.tgz
                                      </label>
                                      <div className="valid-feedback w-100">
                                        Successfully uploaded IG "" (version )
                                      </div>
                                      <div className="invalid-feedback w-100">
                                        Failed to upload IG
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                  <div>
                                    <div className="col-md-12">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="profile"
                                          className="mb-2"
                                        >
                                          Pick an Implementation Guide to
                                          validate against:
                                        </label>
                                        <select
                                          className="form-select"
                                          id="profile"
                                          name="profile"
                                          value={selectedIg}
                                          onChange={handleIgChange}
                                          aria-describedby="text"
                                        >
                                          {loadingIgsAll ? (
                                            <option value="">Loading...</option>
                                          ) : (
                                            IgAllArray.map((item, index) => (
                                              <option
                                                key={index}
                                                value={item.packageName}
                                              >
                                                {item.packageName}
                                              </option>
                                            ))
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="col-md-12">
                                      <div className="mb-3">
                                        <label
                                          htmlFor="second-profile"
                                          className="mb-2"
                                        >
                                          Select a profile:
                                        </label>
                                        <select
                                          className="form-select"
                                          id="second-profile"
                                          name="second-profile"
                                          value={selectedProfile}
                                          onChange={handleProfileChange}
                                          aria-describedby="text"
                                        >
                                          <option value="">Select...</option>
                                          {loadingProfilesAll ? (
                                            <option value="">Loading...</option>
                                          ) : (
                                            ProfileAll.map(
                                              (profile, profile2nd) => (
                                                <option
                                                  key={`profile_${profile2nd}`}
                                                  value={profile.id}
                                                >
                                                  {profile}
                                                </option>
                                              )
                                            )
                                          )}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`tab-pane fade ${
                                  activeTab === "standalone"
                                    ? "show active"
                                    : ""
                                }`}
                                id="standalone"
                              >
                                <div className="form-group">
                                  <p htmlFor="profile_field mb-2">
                                    If you have your own profile, you can paste
                                    it here:
                                  </p>
                                  <textarea
                                    name="profile_field"
                                    id="profile_field"
                                    className="form-control custom-text-area "
                                    rows={8}
                                    defaultValue={""}
                                  />
                                  <div className="invalid-feedback" />
                                  <br />
                                  <div className="input-group custom-border">
                                    <div className="custom-file flex-wrap">
                                      <input
                                        type="file"
                                        name="profile_file"
                                        id="profile_file"
                                        className="custom-file-input "
                                      />
                                      <label
                                        htmlFor="profile_file"
                                        className="custom-file-label "
                                      >
                                        Or upload your profile in a file:
                                      </label>
                                      <div className="invalid-feedback w-100" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    {loadingTablesAll ? (
                      <div className="loader"></div>
                    ) : TableAll && TableAll.length > 0 ? (
                      // <StyledTable className="custom-border">
                      //   <TableHead>
                      //     <Thead>
                      //       <TableCell>Path</TableCell>
                      //       <TableCell>Description</TableCell>
                      //       <TableCell>Min</TableCell>
                      //       <TableCell>Max</TableCell>
                      //       <TableCell>Type</TableCell>
                      //       <TableCell>IsModifier</TableCell>
                      //       <TableCell>IsSummary</TableCell>
                      //     </Thead>
                      //   </TableHead>
                      //   <TableBody>
                      //     {TableAll.map((item, index) => (
                      //       <TBody key={item.id}>
                      //         <TableCell>
                      //           {item.path.length > 0 ? item.path : null}
                      //         </TableCell>
                      //         <TableCell>
                      //           {item.short.length > 0 ? item.short : null}
                      //         </TableCell>
                      //         <TableCell>
                      //           <input
                      //             type="text"
                      //             className="custom-text"
                      //             value={item.min}
                      //             onChange={(e) =>
                      //               handleInputChange(
                      //                 index,
                      //                 "min",
                      //                 e.target.value
                      //               )
                      //             }
                      //             onBlur={(e) =>
                      //               handleInputChange(
                      //                 index,
                      //                 "min",
                      //                 e.target.value
                      //               )
                      //             }
                      //           />
                      //         </TableCell>
                      //         <TableCell>
                      //           <input
                      //             type="text"
                      //             className="custom-text"
                      //             value={item.max}
                      //             onChange={(e) =>
                      //               handleInputChange(
                      //                 index,
                      //                 "max",
                      //                 e.target.value
                      //               )
                      //             }
                      //             onBlur={(e) =>
                      //               handleInputChange(
                      //                 index,
                      //                 "max",
                      //                 e.target.value
                      //               )
                      //             }
                      //           />
                      //         </TableCell>
                      //         <TableCell>
                      //           {item.type &&
                      //           Array.isArray(item.type) &&
                      //           item.type.length > 0
                      //             ? item.type[0].code
                      //             : null}
                      //         </TableCell>
                      //         <TableCell>
                      //           {item.isModifier ? (
                      //             <FontAwesomeIcon
                      //               className="fa-icon"
                      //               icon={faCheck}
                      //             />
                      //           ) : (
                      //             <FontAwesomeIcon
                      //               className="fa-icon"
                      //               icon={faTimes}
                      //             />
                      //           )}
                      //         </TableCell>
                      //         <TableCell>
                      //           {item.isSummary ? (
                      //             <FontAwesomeIcon
                      //               className="fa-icon"
                      //               icon={faCheck}
                      //             />
                      //           ) : (
                      //             <FontAwesomeIcon
                      //               className="fa-icon"
                      //               icon={faTimes}
                      //             />
                      //           )}
                      //         </TableCell>
                      //       </TBody>
                      //     ))}
                      //   </TableBody>
                      // </StyledTable>
                      <div className="table-data-box table-responsive">
                        <table className="table-content borderd-table">
                          <thead>
                            <tr>
                              <th>Path</th>
                              <th>Description</th>
                              <th>Min</th>
                              <th>Max</th>
                              <th>Type</th>
                              <th>IsModifier</th>
                              <th>IsSummary</th>
                            </tr>
                          </thead>
                          <tbody>
                            {TableAll.map((item, index) => (
                              <tr key={item.id}>
                                <td>
                                  {item.path.length > 0 ? item.path : null}
                                </td>
                                <td>
                                  {item.short.length > 0 ? item.short : null}
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="custom-text"
                                    value={item.min}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "min",
                                        e.target.value
                                      )
                                    }
                                    onBlur={(e) =>
                                      handleInputChange(
                                        index,
                                        "min",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  <input
                                    type="text"
                                    className="custom-text"
                                    value={item.max}
                                    onChange={(e) =>
                                      handleInputChange(
                                        index,
                                        "max",
                                        e.target.value
                                      )
                                    }
                                    onBlur={(e) =>
                                      handleInputChange(
                                        index,
                                        "max",
                                        e.target.value
                                      )
                                    }
                                  />
                                </td>
                                <td>
                                  {item.type &&
                                  Array.isArray(item.type) &&
                                  item.type.length > 0
                                    ? item.type[0].code
                                    : null}
                                </td>
                                <td>
                                  {item.isModifier ? (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faCheck}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faTimes}
                                    />
                                  )}
                                </td>
                                <td>
                                  {item.isSummary ? (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faCheck}
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      className="fa-icon"
                                      icon={faTimes}
                                    />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                    <br />
                    <div className="form-group">
                      <input
                        type="button"
                        className="btn btn-outline-primary"
                        defaultValue="Reset"
                      />
                      <input
                        type="submit"
                        className="btn btn-primary ml-3 lm-15"
                        value="Validate"
                      />
                    </div>
                    <br />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSummary;
