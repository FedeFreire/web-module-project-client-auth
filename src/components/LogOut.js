import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth'; 

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axiosWithAuth().post('/logout');
        localStorage.removeItem('token');
        navigate('/login');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    logout();
  }, [navigate]);

  return null;
};

export default Logout;
