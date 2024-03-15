import React, { useState, useEffect } from "react";
import "typeface-dm-sans";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/Login/LoginForm";
import Dashboard from "./components/Dashboard/Dashboard";
import Overview from "./components/FHIR-Architecture/Overview";
import Ig from "./components/FHIR-Architecture/IG/Ig";
import CreateIg from "./components/FHIR-Architecture/IG/Create-Ig";
import EditIg from "./components/FHIR-Architecture/IG/EditIg";
import UserMaster from "./components/UserMaster/UserMaster";
import CreateUser from "./components/UserMaster/CreateUser";
import EditUser from "./components/UserMaster/EditUser";
import CustomerList from "./components/Customer/CustomerList";
import CreateCustomer from "./components/Customer/CreateCustomer";
import ProjectList from "./components/Project/ProjectList";
import CreateProject from "./components/Project/CreateProject";
import EditProject from "./components/Project/EditProjectInfo/EditPoject";
import RoleList from "./components/Role/RoleList";
import CreateRole from "./components/Role/CreateRole";
import EditRole from "./components/Role/EditRole";
import CreateIgAssign from "./components/FHIR-Architecture/CreateIgAssign";
import CreateSummary from "./components/FHIR-Mngt/Resource-Validator/CreateSummary";
import ProfileList from "./components/FHIR-Architecture/Profile/ProfileList";
import CreateProfile from "./components/FHIR-Architecture/Profile/CreateProfile";
import EditProfile from "./components/FHIR-Architecture/Profile/EditProfile";
import ResourceList from "./components/FHIR-Architecture/Resource/ResourceList";
import CreateResource from "./components/FHIR-Architecture/Resource/CreateResource";
import EditResource from "./components/FHIR-Architecture/Resource/EditResource";
import ScopeList from "./components/Scope/ScopetList";
import CreateScope from "./components/Scope/CreateScope";
import EditScope from "./components/Scope/EditScope";
import AssignList from "./components/Assign/AssignList";
import CreateAssign from "./components/Assign/CreateAssign";
import EditAssign from "./components/Assign/EditAssign";
import EditCustomer from "./components/Customer/EditCustomerInfo/EditCustomer";
import TestCaseList from "./components/Testing/TestCase/TestCaseList";
import CreateTestCase from "./components/Testing/TestCase/CreateTestCase";
import EditTestCase from "./components/Testing/TestCase/EditTestCase";
import TestCategoryList from "./components/Testing/TestCategory/TestCategoryList";
import CreateTestCategory from "./components/Testing/TestCategory/CreateTestCategory";
import EditTestCategory from "./components/Testing/TestCategory/EditTestCategoryInfo/EditTestCategory";
import TestSetList from "./components/Testing/TestSet/TestSetList";
import CreateTestSet from "./components/Testing/TestSet/CreateTestSet";
import EditTestSet from "./components/Testing/TestSet/EditTestSetInfo/EditTestSet";
import ViewIg from "./components/FHIR-Architecture/IG/ViewIg";
import ViewProfile from "./components/FHIR-Architecture/Profile/ViewProfile";
import ViewResource from "./components/FHIR-Architecture/Resource/ViewResource";
import CreateTestExecution from "./components/Testing/TestExecution/CreateTestExecution";
import IgInfoList from "./components/FHIR-Mngt/IgInfo/IgInfoList";
import EditIgInfo from "./components/FHIR-Mngt/IgInfo/EditIgInfo";
import DocumentList from "./components/Documents/DocumentList";
import CreateDocument from "./components/Documents/CreateDocument";
import ViewDocument from "./components/Documents/ViewDocument";
import EditDocument from "./components/Documents/EditDocument";
import ViewScope from "./components/Documents/ViewScope";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        {isLoggedIn ? (
          <Route
            path="/dashboard"
            element={<Dashboard onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/overview"
            element={<Overview onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route path="/ig" element={<Ig onLogout={handleLogout} />} />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-ig"
            element={<CreateIg onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route path="/view-ig" element={<ViewIg onLogout={handleLogout} />} />
        ) : null}
        {isLoggedIn ? (
          <Route path="/edit-ig" element={<EditIg onLogout={handleLogout} />} />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/user-master"
            element={<UserMaster onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-user"
            element={<CreateUser onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-user"
            element={<EditUser onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/customer-list"
            element={<CustomerList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-customer"
            element={<CreateCustomer onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-customer"
            element={<EditCustomer onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/project-list"
            element={<ProjectList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-project"
            element={<CreateProject onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-project"
            element={<EditProject onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/role-list"
            element={<RoleList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-role"
            element={<CreateRole onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-role"
            element={<EditRole onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-ig-assign"
            element={<CreateIgAssign onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-summary"
            element={<CreateSummary onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/profile-list"
            element={<ProfileList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-profile"
            element={<CreateProfile onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/view-profile"
            element={<ViewProfile onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-profile"
            element={<EditProfile onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/resource-list"
            element={<ResourceList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-resource"
            element={<CreateResource onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/view-resource"
            element={<ViewResource onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-resource"
            element={<EditResource onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/scope-list"
            element={<ScopeList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-scope"
            element={<CreateScope onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-scope"
            element={<EditScope onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/assign-list"
            element={<AssignList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-assign"
            element={<CreateAssign onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-assign"
            element={<EditAssign onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/testcase-list"
            element={<TestCaseList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-testcase"
            element={<CreateTestCase onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-testcase"
            element={<EditTestCase onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/testcategory-list"
            element={<TestCategoryList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-testcategory"
            element={<CreateTestCategory onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-testcategory"
            element={<EditTestCategory onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/testset-list"
            element={<TestSetList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-testset"
            element={<CreateTestSet onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-testset"
            element={<EditTestSet onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-testexecution"
            element={<CreateTestExecution onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/iginfo-list"
            element={<IgInfoList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/edit-iginfo"
            element={<EditIgInfo onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/document-list"
            element={<DocumentList onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/create-document"
            element={<CreateDocument onLogout={handleLogout} />}
          />
        ) : null}
         {isLoggedIn ? (
          <Route
            path="/edit-document"
            element={<EditDocument onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/view-document"
            element={<ViewDocument onLogout={handleLogout} />}
          />
        ) : null}
        {isLoggedIn ? (
          <Route
            path="/view-scope"
            element={<ViewScope onLogout={handleLogout} />}
          />
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;
