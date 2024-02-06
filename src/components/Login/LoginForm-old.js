import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css';
import healthInsuranceImage from '../../assets/images/health-insurance.png';
import logo from '../../assets/images/logo.png';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      });
      const token = localStorage.setItem('token', response.data.id);
      console.log("token",token);
      setError('');
      console.log('Login successful!');
    } catch (err) {
      setError('Invalid email or password');
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
                      <h2>Welcome Back!<br /> <span>Please sign in to your account.</span></h2>
                      <img src={healthInsuranceImage} alt="Health Insurance" />
                      <p>Lorem ipsum dolor sit amet consectetur. Integer interdum viverra quisque vel sagittis lectus imperdiet in maecenas. Rhoncus massa gravida integer quis urna placerat phasellus sit. Cras semper suspendisse ac massa metus rutrum et libero.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="login-forms">
                <div className="form-top">
                  <img src={logo} alt="Logo" />
                </div>
                <div className="login-forms-inp">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <button type="submit" className="btn btn-primary main-submit">SIGN IN</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
