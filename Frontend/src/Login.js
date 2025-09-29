import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Button's onClick handler function
  const handleLoginClick = () => {
    // Example validation check
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Clear error if form is valid
    setError('');

    // Simulate login logic (replace with real API)
    console.log('Logging in with:', { email, password });

    // Example: You could add your API call here to authenticate the user
    // fetch('/login', { method: 'POST', body: JSON.stringify({ email, password }) })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle response from server, such as redirecting or updating state
    //   });
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {/* Button with onClick handler */}
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

