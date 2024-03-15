import React from "react";
import "../../styles/style.css";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";
import Header from "../Header/Header";

const Dashboard = () => {
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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>
      <div className="container second-row">
        <div className="box-bdr-dash">
          <div className="row">
            <div className="col-md-2">
              <div className="box mb-2">
                <span className="box-numb" style={{ textAlign: "center" }}>
                  15+
                </span>
                <span
                  className="pd-overview-count"
                  style={{ fontSize: "15px" }}
                >
                  Years of HL7 V2, CCDA, FHIR Interoperability Experience
                </span>
                {/* <span className="box-numb-sec box-r">
                  <i className="fa fa-arrow-up"></i> +3.11%
                </span> */}
                {/* <div className="pos-class">...</div> */}
              </div>
            </div>
            <div className="col-md-2">
              <div className="box mb-2">
                <span className="box-numb" style={{ textAlign: "center" }}>
                  50+
                </span>
                <span
                  className="pd-overview-count"
                  style={{ fontSize: "15px", textAlign: "justify!important" }}
                >
                  HL7 V2, CCDA, FHIR Certified Resources
                </span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="box mb-2">
                <span className="box-numb" style={{ textAlign: "center" }}>
                  10+
                </span>
                <span
                  className="pd-overview-count"
                  style={{ fontSize: "15px" }}
                >
                  Payer FHIR Implementations
                </span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="box mb-2">
                <span className="box-numb" style={{ textAlign: "center" }}>
                  2+
                </span>
                <span
                  className="pd-overview-count"
                  style={{ fontSize: "15px" }}
                >
                  PBM FHIR Implementation
                </span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="box mb-2">
                <span className="box-numb" style={{ textAlign: "center" }}>
                  10+
                </span>
                <span
                  className="pd-overview-count"
                  style={{ fontSize: "15px" }}
                >
                  Provider FHIR Implementations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pb-4">
        <div className="box-bdr-dash">
          <div className="row">
            <div className="col-md-12">
              <div className="box mb-2">
                {/* <span className="pd-overview-count">Tasks</span>
                <div className="pos-class plus-link">
                  <a href="/">
                    New Tasks <i className="fa fa-plus"></i>
                  </a>
                </div>
                <table className="table-content">
                  <tbody>
                    <tr>
                      <td>
                        <div className="checkbox-box">
                          <div className="checkbox-div">
                            <input
                              type="checkbox"
                              data-name=""
                              className="checkFilter"
                            />
                          </div>
                          <div className="checkbox-div-text">
                            <h4>Task Completed successfully</h4>
                            <p>
                              Sign up for Covid - 19 training course for
                              medicians
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="table-content-td">
                        <span className="checkbox-date">24 Oct 2022</span>{" "}
                        <a href="/">
                          <span className="date-tods">...</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox-box">
                          <div className="checkbox-div">
                            <input
                              type="checkbox"
                              data-name="/"
                              className="checkFilter"
                            />
                          </div>
                          <div className="checkbox-div-text">
                            <h4>Task Completed successfully</h4>
                            <p>
                              Sign up for Covid - 19 training course for
                              medicians
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="table-content-td">
                        <span className="checkbox-date">24 Oct 2022</span>{" "}
                        <a href="/">
                          <span className="date-tods">...</span>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="checkbox-box">
                          <div className="checkbox-div">
                            <input
                              type="checkbox"
                              data-name="/"
                              className="checkFilter"
                            />
                          </div>
                          <div className="checkbox-div-text">
                            <h4>Task Completed successfully</h4>
                            <p>
                              Sign up for Covid - 19 training course for
                              medicians
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="table-content-td">
                        <span className="checkbox-date">24 Oct 2022</span>{" "}
                        <a href="/">
                          <span className="date-tods">...</span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table> */}

                <iframe
                  src="https://ifhir.clindcast.com/view_dashboard"
                  title="Document Preview"
                  style={{ width: "100%", height: "2500px" }}
                ></iframe>
              </div>
            </div>
            {/* <div className="col-md-4 up-schedule">
              <div className="box mb-2 dashboard-sched">
                <div className="box-top-title">
                  <span className="pd-overview-count">Upcoming Schedule </span>
                  <div className="plus-link">
                    <a href="/">
                      New Appointment <i className="fa fa-plus"></i>
                    </a>
                  </div>
                </div>
                <div className="dashboard-time-line">
                  <ul>
                    <li className="box-time">
                      <span></span>
                      <div className="title">
                        <i className="fa fa-circle"></i>
                        <span className="box-time-li">8 : 00</span>{" "}
                        <span className="box-time-na">Rice Kotlin</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-circle"></i>
                        <span className="box-time-li">8 : 20</span>{" "}
                        <span className="box-time-na">Maya Adamu</span>
                      </div>
                      <div className="upcoming-appo">
                        <div className="accordion" id="accordionExample">
                          <div className="accordion-item">
                            <span className="accordion-header">
                              <div
                                className="title"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                <i className="fa fa-circle"></i>
                                <span className="box-time-li">8 : 20</span>{" "}
                                <span className="box-time-na">
                                  Bolaji Abdulraheem
                                </span>{" "}
                                <span className="upcoming-text">
                                  Upcoming <i className="fa fa-angle-up"></i>
                                </span>
                              </div>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body upcoming-drop">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td>Patient</td>
                                        <td>Bolaji Abdulraheem</td>
                                      </tr>
                                      <tr>
                                        <td>Time</td>
                                        <td>8:30 - 9:00</td>
                                      </tr>
                                      <tr>
                                        <td>Purpose</td>
                                        <td>General check-up</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <div className="table-bottm">
                                    <div className="table-bottm-icon">
                                      <a href="/">
                                        <img src={Delete} alt="Delete" />
                                      </a>
                                      <a href="/">
                                        <img src={User} alt="User" />
                                      </a>
                                      <a href="/">
                                        <img src={Edit} alt="Edit" />
                                      </a>
                                    </div>
                                    <div className="table-bottm-btn">
                                      <a href="/">Begin appointment</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="time">
                        <span>8 : 00</span>
                      </div>
                    </li>
                    <li className="box-time upcoming-next">
                      <span></span>
                      <div className="title">
                        <i className="fa fa-circle"></i>
                        <span className="box-time-li">9 : 00</span>{" "}
                        <span className="box-time-na">Abayomi Johnson</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-circle"></i>
                        <span className="box-time-li">9 : 00</span>{" "}
                        <span className="box-time-na">Rebecca Gifts</span>
                      </div>
                      <div className="time">
                        <span>9 : 00</span>
                      </div>
                    </li>
                    <li className="box-time upcoming-next">
                      <span></span>
                      <div className="title">
                        <i className="fa fa-circle"></i>
                        <span className="box-time-li">10 : 00</span>{" "}
                        <span className="box-time-na">ERC Report</span>
                      </div>
                      <div className="title">
                        <i className="fa fa-circle"></i>
                        <span className="box-time-li">10 : 30</span>{" "}
                        <span className="box-time-na">Consulation meeting</span>
                      </div>
                      <div className="time">
                        <span>10 : 00</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
