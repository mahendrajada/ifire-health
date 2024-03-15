import React from "react";
import Header from "../Header/Header";
import "../../styles/style.css";
import HeaderFunctions from "../HeaderFunctions/HeaderFunctions";

const Overview = () => {
  const { loading, loadingoverview, loadingig, loadingusermaser, loadingcustomerlist, loadingprojectlist, loadingrolelist, loadingscopelist, handleLogout, handleOverviewClick, handleIGClick, handleUserMaster, handleCustomerList, handleProjectList, handleRoleList, handleScopeList } = HeaderFunctions();
  return (
    <>
      <Header loading={loading} loadingoverview={loadingoverview} loadingig={loadingig} loadingusermaser={loadingusermaser} loadingcustomerlist={loadingcustomerlist} loadingprojectlist={loadingprojectlist} loadingrolelist={loadingrolelist} loadingscopelist={loadingscopelist} handleLogout={handleLogout} handleOverviewClick={handleOverviewClick} handleIGClick={handleIGClick} handleUserMaster={handleUserMaster} handleCustomerList={handleCustomerList} handleProjectList={handleProjectList} handleRoleList={handleRoleList} handleScopeList={handleScopeList} />
      
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "20px",
        }}
      >
      </div>
        <div className="container-fluid _dashboard-style">
          <div className="d-sm-flex align-items-center justify-content-between _employee-deshboard _title-style">
            <div className="col-md-4">
              <h1 className="h3 mb-0 text-gray-800"> </h1>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              marginRight: "100px",
              marginLeft: "100px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginRight: "100px",
                marginLeft: "100px",
                backgroundColor: "white",
              }}
            >
              {/* {overViewData} */}
              <div>
                <h1>
                  <strong
                    style={{
                      fontSize: "36pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    iFHIR - Solving FHIR Implementation Challenges&nbsp;
                  </strong>
                </h1>
                <p>
                  <strong
                    style={{
                      fontSize: "36pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    Product Requirement Document
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    1. Product Introduction
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    In the ever-evolving landscape of healthcare data
                    interoperability, the Fast Healthcare Interoperability
                    Resources (FHIR) standard has emerged as a powerful tool for
                    enabling seamless data exchange among healthcare
                    systems.&nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    However, as healthcare organizations and stakeholders
                    increasingly adopt FHIR, they encounter a host of
                    challenges, including:
                  </span>
                </p>
                <p className="ql-align-justify">
                  <br />
                </p>
                <p className="ql-align-justify">
                  <br />
                </p>
                <ul>
                  <li className="ql-align-justify">
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Establishing a strategic starting point for addressing
                      business requirements
                    </span>
                  </li>
                  <li className="ql-align-justify">
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Lack of executive insights of the enduring advantages of
                      FHIR initiatives
                    </span>
                  </li>
                  <li className="ql-align-justify">
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Business analysts often struggle to align business
                      requirements with FHIR compliance requirements
                    </span>
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: '"Quattrocento Sans", sans-serif',
                        color: "rgb(55, 65, 81)",
                        backgroundColor: "rgb(247, 247, 248)",
                      }}
                    >
                      .
                    </span>
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      &nbsp;
                    </span>
                  </li>
                  <li className="ql-align-justify">
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      API development framework alignment with FHIR Architecture
                    </span>
                  </li>
                  <li className="ql-align-justify">
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Developing APIs without the specialized FHIR expertise
                    </span>
                  </li>
                  <li className="ql-align-justify">
                    <span
                      style={{
                        fontSize: "12pt",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      Crafting database designs to effectively align with FHIR
                      requirements.
                    </span>
                  </li>
                </ul>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    A standard FHIR project team typically comprises Business
                    Leaders, Interoperability Manager, Business Analyst, FHIR
                    Architect, API Developer, Database Administrator, Quality
                    Analyst, Cloud Architect. The challenge is Who will do what?
                    And where to start the project?
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    iFHIR is the solution to address the challenges at the start
                    of FHIR projects.
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 112, 192)",
                    }}
                  >
                    Purpose of the document:
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 112, 192)",
                    }}
                  >
                    iFHIR Product overview:
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    In a FHIR (Fast Healthcare Interoperability Resources)
                    project, various stakeholders have distinct needs and roles.
                    Each stakeholder plays a crucial role in the success of a
                    FHIR project, and their needs reflect their responsibilities
                    and expertise in the project's various aspects. Effective
                    collaboration and communication among these stakeholders are
                    key to achieving interoperability and delivering healthcare
                    solutions that meet business goals and regulatory
                    requirements.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    The goal of the iFHIR product is to provide project
                    artifacts, including project management documentation,
                    technical architecture, API documentation, a test plan, a
                    database logical model, and a FHIR implementation guide.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                      color: "white",
                    }}
                  >
                    Stakeholders
                  </strong>
                </p>
                <p>
                  <strong
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                      color: "white",
                    }}
                  >
                    Roles and responsibilities
                  </strong>
                </p>
                <p>
                  <strong
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                      color: "white",
                    }}
                  >
                    iFHIR Features
                  </strong>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Business Leaders
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need to understand the strategic benefits of FHIR for the
                    organization.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Require clear business objectives and a return on investment
                    (ROI) from the FHIR project.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need to ensure alignment with organizational goals and
                    compliance with healthcare regulations.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Interoperability Manager
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Require a comprehensive strategy for integrating FHIR into
                    existing systems.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need to identify and manage data exchange requirements and
                    partnerships.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Ensure data security and compliance with interoperability
                    standards.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Business Analyst
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need to gather and analyze business requirements for the
                    FHIR project.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Translate business needs into technical specifications for
                    development.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Assist in the development of use cases and workflow
                    diagrams.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    FHIR Architect
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Require deep knowledge of the FHIR standard and its
                    application.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Define the overall FHIR architecture for the project.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Ensure data models and resources align with FHIR standards.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    FHIR API Developer
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need expertise in FHIR development, including creating
                    FHIR-based APIs.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Implement the technical aspects of FHIR, including resource
                    creation, retrieval, and updates.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Ensure API security, performance, and compliance with FHIR
                    standards.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Database Administrator
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need to design and maintain databases that can efficiently
                    store and retrieve FHIR resources.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Ensure data integrity, scalability, and compliance with FHIR
                    data models.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Monitor and optimize database performance.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Quality Analyst
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need to validate that the FHIR implementation meets quality
                    standards.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Perform testing, including FHIR resource validation, data
                    exchange testing, and security testing.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Identify and report any issues or discrepancies.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Cloud Architect
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Require expertise in cloud technologies for hosting FHIR
                    systems.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Design and implement a scalable and secure cloud
                    infrastructure.
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "10pt",
                      fontFamily: "Symbol",
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    ·
                  </span>
                  <span
                    style={{
                      fontSize: "7pt",
                      fontFamily: '"Times New Roman", serif',
                      color: "rgb(55, 65, 81)",
                    }}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Ensure high availability, data backup, and disaster recovery
                    for FHIR services.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <strong
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 112, 192)",
                    }}
                  >
                    Revision history
                  </strong>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    2. Product Objectives
                  </strong>
                </p>
                <p>
                  <br />
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 112, 192)",
                    }}
                  >
                    Business goals and objectives
                  </strong>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong style={{ fontSize: "14pt" }}>Business Goals</strong>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong style={{ fontSize: "14pt" }}>
                    Business Objectives
                  </strong>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Become the Market Leader in FHIR Projects
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Gain a competitive advantage over competitors by offering
                    innovative FHIR solutions. Allow customers to build FHIR
                    APIs and/or FHIR Inspired API
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Business Expansion
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Reaching out to new Customer segments (Payers, PBMs,
                    Hospitals, Technology Companies, State Projects)
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Strategic Partnerships and Alliances
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Collaborate with other businesses to enhance the market
                    presence (MuleSoft, SnapLogic, Workato and others)
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Revenue Growth
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Achieve measurable revenue growth with acquiring New
                    customers and submitting more RFPs (Request For Proposals)
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <br />
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 112, 192)",
                    }}
                  >
                    User goals and needs:
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong style={{ fontSize: "13pt" }}>Users</strong>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong style={{ fontSize: "13pt" }}>User Goals</strong>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong style={{ fontSize: "13pt" }}>User Needs</strong>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Business Leaders
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Enhance healthcare data interoperability to improve patient
                    care and operational efficiency. Ensure compliance with
                    healthcare data standards and regulations.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    CreateFHIR implementations Project Reports
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Interoperability Manager
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Streamline data exchange between healthcare systems and
                    stakeholders.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create Project Management Tasks, Timeline, Milestones
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Business Analyst
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    &nbsp;Improve data-driven decision-making and workflows.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create Business Requirement Document
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    FHIR Architect
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Design and oversee the development of FHIR-compatible
                    systems and Ensure FHIR project adherence to architectural
                    best practices
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create FHIR Architecture diagram
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create Data Mapping Document
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    FHIR API Developer
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Develop FHIR-compliant APIs for data retrieval and
                    submission. Implement robust security and authentication
                    measures. Optimize API performance for high data throughput.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create API Solution Architecture
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create User &amp; System Integration Diagram
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create Security Architecture
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Database Administrator
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Manage and optimize FHIR data storage and retrieval.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create Logical Data Model
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create Physical Data Model
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create data backup and recovery strategies
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Quality Analyst
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Ensure data accuracy, security, and compliance. Verify data
                    quality, integrity, and compliance with FHIR standards.
                    Identify and rectify data-related issues and
                    vulnerabilities.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create FHIR Test Plan
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create Test Cases for Structure definition Testing
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create&nbsp;Test Cases for Capability Statement Testing
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Cloud Architect
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Leverage cloud infrastructure for scalable and
                    cost-effective FHIR solutions.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span style={{ fontSize: "12pt" }}>
                    Create cloud platforms Architecture
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "12pt" }}>
                    Create disaster recovery strategies for FHIR applications
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    3. Stakeholder Analysis
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <strong
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                      color: "white",
                    }}
                  >
                    Stakeholders
                  </strong>
                </p>
                <p>
                  <strong
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                      color: "white",
                    }}
                  >
                    Roles and responsibilities
                  </strong>
                </p>
                <p>
                  <strong
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                      color: "white",
                    }}
                  >
                    Comments
                  </strong>
                </p>
                <p>
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Business Leaders
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Interoperability Manager
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Business Analyst
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    FHIR Architect
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    FHIR API Developer
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Database Administrator
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Quality Analyst
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "11.5pt",
                      fontFamily: "Lato, sans-serif",
                      backgroundColor: "white",
                    }}
                  >
                    Cloud Architect
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "18px" }} />
                </p>
                <p>
                  <br />
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    4. Scope
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Inclusions and exclusions
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    High-level project constraints
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    5. Functional Requirements
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Use cases or user stories
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Functional features and descriptions
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Dependencies between features
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    User interfaces (if applicable)
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Non-functional requirements (e.g., performance, scalability)
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    6. System Architecture
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    High-level system architecture
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Data flow diagrams (if applicable)
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Integration points
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    7. Data Requirements
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Data entities
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Data sources and storage
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Data processing and transformation
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    8. User Experience (UX) and Design
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Wireframes or mockups
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    User interface design principles
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Accessibility requirements (if applicable)
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    9. Assumptions and Constraints
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Any assumptions made during the project
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Constraints that may impact the project
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    10. Risks and Mitigations
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Identify potential risks
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Strategies to mitigate or manage these risks
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    11. Project Timeline
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Estimated project milestones
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Dependencies between tasks
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    12. Testing and Quality Assurance
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Testing strategies and methodologies
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Quality assurance criteria
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    13. Acceptance Criteria
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Criteria for determining when the product is complete
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    14. Sign-off and Approvals
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    List of stakeholders who must approve the PRD
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <strong
                    style={{
                      fontSize: "17pt",
                      fontFamily: "Arial, sans-serif",
                      color: "rgb(0, 32, 96)",
                    }}
                  >
                    15. Appendices
                  </strong>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Additional reference materials, such as diagrams, research
                    data, or supporting documents.
                  </span>
                </p>
                <p className="ql-align-justify">
                  <span
                    style={{
                      fontSize: "12pt",
                      fontFamily: '"Times New Roman", serif',
                    }}
                  >
                    &nbsp;
                  </span>
                </p>
                <ul>
                  <li>&nbsp;</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Overview;
