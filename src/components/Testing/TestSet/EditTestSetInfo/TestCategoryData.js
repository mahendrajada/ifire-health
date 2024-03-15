import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../../assets/images/delete.png";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const TestCategoryData = ({ EdittestsetId }) => {
  const [testsetformData, setTestSetFormData] = useState({
    testset_id: EdittestsetId,
    category_id: "",
  });
  const [errors, setErrors] = useState({});
  const [newTestSetData, setNewTestSetData] = useState([]);
  const [loadingTestSetsAll, setLoadingTestSetsAll] = useState(true);
  const [testsetAll, setTestSetAll] = useState([]);

  useEffect(() => {
    const fetchtestsets = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/gettestcategoryselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTestSetAll(response.data.data);
        setLoadingTestSetsAll(false);
      } catch (error) {
        console.error("Error fetching testset list:", error);
      }
    };
    fetchtestsets();
  }, []);

  useEffect(() => {
    const handleCreateTestSet = async () => {
      const testset_id = EdittestsetId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getsetcatgorylist ",
          { testset_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewTestSetData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching testset data:", error);
      }
    };

    handleCreateTestSet();
  }, [EdittestsetId]);

  const handleTestSetChange = (e) => {
    const { name, value } = e.target;
    setTestSetFormData({
      ...testsetformData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCreateTestSet = async () => {
    const testset_id = EdittestsetId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getsetcatgorylist ",
        { testset_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewTestSetData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching testset data:", error);
    }
  };

  const testsetSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateFormTestSet();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          "https://ifhirehealth.clindcast.com/api/storesetcatgory",
          testsetformData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setTestSetFormData({
          testset_id: EdittestsetId,
          category_id: "",
        });
        setTimeout(() => {
          handleCreateTestSet(EdittestsetId);
        }, 100);
      } catch (error) {
        console.error("Failed to store data:", error.message);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleDeleteTestSet = async (testsetId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this testset?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deletesetcatgory/${testsetId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewTestSetData((prevTestSetData) =>
        prevTestSetData.filter(
            (testset) => testset.setcategory_id !== testsetId
          )
        );
      } catch (error) {
        console.error("Error deleting testset:", error);
      }
    }
  };

  const validateFormTestSet = () => {
    const errors = {};
    if (!testsetformData.category_id.trim()) {
      errors.category_id = "Test Set is required";
    }
    return errors;
  };

  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Test Category
          <button
            type="button"
            className="btn btn-primary ml8"
            data-bs-toggle="modal"
            data-bs-target="#testsetModel"
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
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {newTestSetData.length > 0 &&
              newTestSetData.map((item, index) => (
                <tr key={index}>
                  <td>{item.setcategory_id}</td>
                  <td>{item.name}</td>
                  <td>
                    <span
                      className="delete-row cursor"
                      onClick={() =>
                        handleDeleteTestSet(item.setcategory_id)
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
        id="testsetModel"
        tabIndex="-1"
        aria-labelledby="testsetModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="testsetModelLabel">
                  Add Test Category
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
                  {loadingTestSetsAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={testsetSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="category_id" className="form-label">
                              Test Set
                              <span className="text-danger fs-6">*</span>
                            </label>
                            <select
                              className={`form-select ${
                                errors.testset && "is-invalid"
                              }`}
                              id="category_id"
                              name="category_id"
                              value={testsetformData.testset}
                              onChange={handleTestSetChange}
                              aria-describedby="text"
                            >
                              <option value="">Select</option>
                              {testsetAll.map((testset) => (
                                <option key={testset.id} value={testset.id}>
                                  {testset.name}
                                </option>
                              ))}
                            </select>
                            {errors.category_id && (
                              <span className="invalid-feedback">
                                {errors.category_id}
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

export default TestCategoryData;
