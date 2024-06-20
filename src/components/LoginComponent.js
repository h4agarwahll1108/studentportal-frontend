import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../api'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login.css';

const LoginComponent = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/generate-token', { username, password });
      const token = response.data.jwtToken;
      console.log(token);
      localStorage.setItem('token', token);  // Store the token
      setToken(token);
      console.log('User logged in', response.data);
      history.push('/home');  
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <div className="login-card card">
        <img src="/favicon.png" className="card-img-top" alt="Placeholder" />
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                className="form-control" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="form-control" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
