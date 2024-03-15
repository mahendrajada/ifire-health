import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const HeaderFunctions = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loadingoverview, setLoadingOverview] = useState(false);
  const [loadingig, setLoadingIg] = useState(false);
  const [loadingusermaser, setLoadingUsermaster] = useState(false);
  const [loadingcustomerlist, setLoadingCustomerlist] = useState(false);
  const [loadingprojectlist, setLoadingProjectlist] = useState(false);
  const [loadingprolelist, setLoadingRolelist] = useState(false);
  const [loadingscopelist, setLoadingScopeList] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const token=localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
         'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      if (response.data.status === true) {
        localStorage.removeItem('token');
        localStorage.removeItem('logo');
        localStorage.removeItem('customer_name');
        localStorage.removeItem('name');
        localStorage.removeItem('last_name');
        localStorage.removeItem('image_url');
        localStorage.removeItem('role');
        navigate('/');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error occurred while logging out:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleOverviewClick = async () => {
    try {
      setLoadingOverview(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getdocumentlist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingOverview(false);
      navigate('/overview', { state: { overviewData: response.data } }); 
    } catch (error) {
      setLoadingOverview(false);
      console.error('Error occurred while fetching overview data:', error);
    }
  };
  const handleIGClick = async () => {
    try {
      setLoadingIg(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getiglist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingIg(false);
      navigate('/ig', { state: { IGData: response.data.data } }); 
    } catch (error) {
      setLoadingIg(false);
      console.error('Error occurred while fetching overview data:', error);
    }
  };
  const handleUserMaster = async () => {
    try {
    setLoadingUsermaster(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getuserlist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingUsermaster(false);
      navigate('/user-master', { state: { UserData: response.data.data } }); 
    } catch (error) {
      setLoadingUsermaster(false);
      console.error('Error occurred while fetching overview data:', error);
    }
  };
  const handleCustomerList = async () => {
    try {
    setLoadingCustomerlist(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getcustomerlist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingCustomerlist(false);
      navigate('/customer-list', { state: { CustomerData: response.data.data } }); 
    } catch (error) {
      setLoadingCustomerlist(false);
      console.error('Error occurred while fetching customer data:', error);
    }
  };
  const handleProjectList = async (shouldNavigate = true) => {
    try {
      setLoadingProjectlist(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getprojectlist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingProjectlist(false);
      if(shouldNavigate) {
        navigate('/project-list', { state: { ProjectData: response.data.data } }); 
      }
      return response.data.data; 
    } catch (error) {
      setLoadingProjectlist(false);
      console.error('Error occurred while fetching project data:', error);
    }
  };
  const handleRoleList = async () => {
    try {
      setLoadingRolelist(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getrolelist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingRolelist(false);
      navigate('/role-list', { state: { RoleData: response.data.data } }); 
    } catch (error) {
      setLoadingRolelist(false);
      console.error('Error occurred while fetching role data:', error);
    }
  };
  const handleScopeList = async () => {
    try {
      setLoadingScopeList(true);
      const token = localStorage.getItem('token');
      const response = await axios.post('https://ifhirehealth.clindcast.com/api/getprojectscopelist', null, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      setLoadingScopeList(false);
      navigate('/scope-list', { state: { ProjectData: response.data.data } }); 
      return response.data.data; 
    } catch (error) {
      setLoadingScopeList(false);
      console.error('Error occurred while fetching project data:', error);
    }
  };
  return {
    loading,
    loadingoverview,
    loadingig,
    loadingusermaser,
    loadingcustomerlist,
    loadingprojectlist,
    loadingprolelist,
    loadingscopelist,
    handleLogout,
    handleOverviewClick,
    handleIGClick,
    handleUserMaster,
    handleCustomerList,
    handleProjectList,
    handleRoleList,
    handleScopeList
  };
};

export default HeaderFunctions;
