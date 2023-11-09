import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/login', {
        username,
        password,
      });
      // Save the token to localStorage
      localStorage.setItem('token', response.data.token);
      // Redirect to FriendsList route
      navigate('/friends');
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      // Optionally handle login failure by updating the state and showing a message to the user
    }
  };

  return (
    <div className="login-wrapper">
     {/* // <div className="login-header">FRIENDS DATABASE</div> */}
      <form onSubmit={handleLogin} className="login-form">
        <h2>LOGIN</h2>
        <div>
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default LoginForm;
