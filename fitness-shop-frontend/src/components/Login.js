import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import your CSS styles if you have any

const Login = () => {
  // State variables for handling form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // useNavigate hook for navigating to another route
  const navigate = useNavigate();

  // Handle login submission
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Your login logic here (e.g., sending the credentials to the server, etc.)

    // Example logic: If username and password are 'admin', navigate to '/dashboard'
    if(username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="username">Username:</label>
        <input 
          type="text" 
          id="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
