import React, { useEffect, useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utility/auth";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  // Check if the user is already authenticated, redirect to home page
  useEffect(() => {
    if (auth.user) {
      navigate("/", { replace: true });
    }
  }, [auth.user, navigate]);

  const handleLogin = () => {
    // Check if any required field is empty
    if (!username || !email || !password) {
      setFormError(true);
      return;
    }

    // Reset form error state
    setFormError(false);

    // You can implement your login logic here
    auth.login(username, email, password);
    navigate("/", { replace: true });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className={`form-group ${formError && !username && "error"}`}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={`form-group ${formError && !email && "error"}`}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={`form-group ${formError && !password && "error"}`}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
