import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/style.css";
import healthInsuranceImage from "../../assets/images/health-insurance.png";
// import logo from "../../assets/images/logo.png";

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = "login-page-main";
    return () => {
      document.body.className = "";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://ifhirehealth.clindcast.com/api/getEmployeeLogin",
        {
          email,
          password,
        }
      );
      if (response.data.status === true) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("logo", response.data.customerinfo.logo_url);
        localStorage.setItem("customer_name", response.data.customerinfo.name);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("last_name", response.data.user.last_name);
        localStorage.setItem("image_url", response.data.user.image_url);
        localStorage.setItem("role", response.data.user.role);
        onLogin();
        navigate("/dashboard");
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      setError("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-main">
      <div className="login-page">
        <div className="container">
          <div className="row varticle-align">
            <div className="col-md-6">
              <div className="login-img-side">
                <div className="row">
                  <div className="d-flex justify-content-between mb-3 header-text">
                    <div>
                      <h2>
                        Welcome Back!
                        <br /> <span>Please sign in to your account.</span>
                      </h2>
                      <img src={healthInsuranceImage} alt="Health Insurance" />
                      <p>
                        iFireHealth, a groundbreaking AI-driven solution poised
                        to revolutionize Fast Healthcare Interoperability
                        Resources (FHIR) implementation. Our innovative guidance
                        and automation tools empower FHIR Implementers and
                        Senior Executives to navigate the complexities of data
                        interoperability effortlessly. Tailored specifically for
                        FHIR IG implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="login-forms">
                <div className="form-top">
                  {/* <img src={logo} alt="Logo" /> */}
                </div>
                <div className="login-forms-inp">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputEmail1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleInputPassword1"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button
                      type="submit"
                      className="btn btn-primary main-submit"
                      disabled={loading}
                    >
                      {loading ? "Loading..." : "SIGN IN"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
