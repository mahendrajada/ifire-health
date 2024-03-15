import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const TestCaseData = ({ EdittestcategoryId }) => {
  const [testcaseformData, setTestCaseFormData] = useState({
    category_id: EdittestcategoryId,
    testcase_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newTestCaseData, setNewTestCaseData] = useState([]);
  const [loadingTestCasesAll, setLoadingTestCasesAll] = useState(true);
  const [testcaseAll, setTestCaseAll] = useState([]);

  useEffect(() => {
    const fetchtestcases = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/gettestcaseselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTestCaseAll(response.data.data);
        setLoadingTestCasesAll(false);
      } catch (error) {
        console.error("Error fetching testcase list:", error);
      }
    };
    fetchtestcases();
  }, []);

  useEffect(() => {
    const handleCreateTestCase = async () => {
      const category_id = EdittestcategoryId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getcatgorycaselist",
          { category_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewTestCaseData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching testcase data:", error);
      }
    };

    handleCreateTestCase();
  }, [EdittestcategoryId]);

  const handleTestCaseChange = (e) => {
    const { name, value } = e.target;
    setTestCaseFormData({
      ...testcaseformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateTestCase = async () => {
    const category_id = EdittestcategoryId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getcatgorycaselist",
        { category_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewTestCaseData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching testcase data:", error);
    }
  };

  const testcaseSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormTestCase();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storecatgorycase",
          testcaseformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTestCaseFormData({
          category_id: EdittestcategoryId,
          testcase_id: "",
        });
        setTimeout(() => {
          handleCreateTestCase(EdittestcategoryId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteTestCase = async (testcaseId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this testcase?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletecatgorycase/${testcaseId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewTestCaseData((prevTestCaseData) =>
        prevTestCaseData.filter(
            (testcase) => testcase.catgorycase_id !== testcaseId
          )
        );
      } catch (error) {
        console.error("Error deleting testcase:", error);
      }
    }
  };

  const validateFormTestCase = () => {
    const errors = {};
    if (!testcaseformData.testcase_id.trim()) {
      errors.testcase_id = "TestCase is required";
    }
    return errors;
  };

  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Test Case
          <button
            type="button"
            className="btn btn-primary ml8"
            data-bs-toggle="modal"
            data-bs-target="#testcaseModel"
          >
            <i className="fa fa-plus text-white"></i>
          </button>
        </h5>
      </div>
      <div className="table-data-box table-responsive ">
        <table className="table-content borderd-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Scenario</th>
              <th>Description</th>
              <th>Fhir Query</th>
              <th>Database Query</th>
              <th>Comments</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newTestCaseData.length > 0 &&
              newTestCaseData.map((item, index) => (
                <tr key={index}>
                  <td>{item.catgorycase_id}</td>
                  <td>{item.scenario}</td>
                  <td>{item.description}</td>
                  <td>{item.fhir_query}</td>
                  <td >{item.database_query}</td>
                  <td>{item.comments}</td>
                  <td>
                    <span
                      className="delete-row cursor"
                      onClick={() =>
                        handleDeleteTestCase(item.catgorycase_id)
                      }
                    >
                      <img src={DeleteImage} alt="Delete" />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="testcaseModel"
        tabIndex="-1"
        aria-labelledby="testcaseModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="testcaseModelLabel">
                  Add Test Case
                </h5>
                <button
                  type="button"
                  className="btn-close white-text"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="ig-forms">
                  {loadingTestCasesAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={testcaseSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="testcase_id" className="form-label">
                              Test Case
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.testcase && "is-invalid"
                              }`}
                              id="testcase_id"
                              name="testcase_id"
                              value={testcaseformData.testcase}
                              onChange={handleTestCaseChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {testcaseAll.map((testcase) => (
                                <option key={testcase.id} value={testcase.id}>
                                  {testcase.scenario}
                                </option>
                              ))}
                            </select>
                            {errors.testcase_id && (
                              <span className="invalid-feedback">
                                {errors.testcase_id}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Save changes
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestCaseData;
