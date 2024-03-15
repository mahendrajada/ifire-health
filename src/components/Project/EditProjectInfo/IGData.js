import React, { useState, useEffect } from "react";
import axios from "axios";
import DeleteImage from "../../../assets/images/delete.png";
import Select from "react-select";

const Loader = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
);

const IgData = ({ EditprojectId }) => {
  const [igformData, setIgFormData] = useState({
    project_id: EditprojectId,
    ig_id: "",
  });
  const [newIgData, setNewIgData] = useState([]);
  const [loadingIgsAll, setLoadingIgsAll] = useState(true);
  const [igAll, setIgAll] = useState([]);
  const [isClearable] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchIgs = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getigselect",
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setIgAll(response.data.data);
        setLoadingIgsAll(false);
      } catch (error) {
        console.error("Error fetching ig list:", error);
      }
    };

    fetchIgs();
  }, []);

  useEffect(() => {
    const handleCreateIg = async () => {
      const project_id = EditprojectId;
      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://ifhirehealth.clindcast.com/api/getprojectiglist",
          { project_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        setNewIgData(response.data.data);
      } catch (error) {
        console.error("Error occurred while fetching ig data:", error);
      }
    };

    handleCreateIg();
  }, [EditprojectId]);

  const handleIgChange = (selectedOption) => {
    setIgFormData({
      ...igformData,
      ig_id: selectedOption ? selectedOption.value : "",
    });
    setSelectedOption(selectedOption);
  };

  const handleCreateIg = async () => {
    const project_id = EditprojectId;
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getprojectiglist",
        { project_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setNewIgData(response.data.data);
    } catch (error) {
      console.error("Error occurred while fetching ig data:", error);
    }
  };

  const igSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://ifhirehealth.clindcast.com/api/storeprojectig",
        igformData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setIgFormData({
        project_id: EditprojectId,
        ig_id: "",
      });
      setTimeout(() => {
        handleCreateIg(EditprojectId);
      }, 100);
      resetSelectedOption();
    } catch (error) {
      console.error("Failed to store data:", error.message);
    }
  };

  const handleDeleteIg = async (igId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ig?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("token");
        await axios.post(
          `https://ifhirehealth.clindcast.com/api/deleteprojectig/${igId}`,
          null,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        setNewIgData((prevIgData) =>
          prevIgData.filter((ig) => ig.projectig_id !== igId)
        );
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const resetSelectedOption = () => {
    setSelectedOption(null);
  };

  const role = localStorage.getItem("role");
  return (
    <>
      <div className="showhideDetailsDivHide">
        <h5 className="text-white mb-0">
          Ig
          {role === "1" ? (
            <button
              type="button"
              className="btn btn-primary ml8"
              data-bs-toggle="modal"
              data-bs-target="#igModel"
            >
              <i className="fa fa-plus text-white"></i>
            </button>
          ) : (
            ""
          )}
        </h5>
      </div>
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
              {role === "1" ? <th>Action</th> : ""}
            </tr>
          </thead>
          <tbody>
            {newIgData.length > 0 &&
              newIgData.map((item, index) => (
                <tr key={index}>
                  <td>{item.projectig_id}</td>
                  <td>{item.name}</td>
                  <td>{item.link}</td>
                  <td>{item.customer}</td>
                  <td className="description">{item.comments}</td>
                  <td>{item.ig_version}</td>
                  {role === "1" ? (
                    <td>
                      <span
                        className="delete-row cursor"
                        onClick={() => handleDeleteIg(item.projectig_id)}
                      >
                        <img src={DeleteImage} alt="Delete" />
                      </span>
                    </td>
                  ) : (
                    ""
                  )}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div
        className="modal fade"
        id="igModel"
        tabIndex="-1"
        aria-labelledby="igModelLabel"
        aria-hidden="true"
      >
        <div className="ig-forms">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header headerModel">
                <h5 className="modal-title text-white" id="igModelLabel">
                  Add Ig
                </h5>
                <button
                  type="button"
                  className="btn-close white-text"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={resetSelectedOption}
                ></button>
              </div>
              <div className="modal-body">
                <div className="ig-forms">
                  {loadingIgsAll ? (
                    <Loader />
                  ) : (
                    <form onSubmit={igSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="ig_id" className="form-label">
                              IG
                            </label>
                            <Select
                              id="ig_id"
                              name="ig_id"
                              value={selectedOption}
                              isClearable={isClearable}
                              onChange={handleIgChange}
                              options={igAll.map((ig) => ({
                                value: ig.id,
                                label: ig.name,
                              }))}
                              placeholder="Select or search..."
                            />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer border-0 p-0">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          onClick={resetSelectedOption}
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

export default IgData;
