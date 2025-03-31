import React, { useState } from "react";
import "../login/login.css"; // Import the external CSS file

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:8089/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        // If response is not OK (e.g., 401), throw an error
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }
  
      const jsonData = await response.json(); // Parse JSON response
      localStorage.setItem("user", JSON.stringify(jsonData));
  
      alert("Login successful! Redirecting...");
      window.location.href = "/"; // Redirect to dashboard or homepage
    } catch (error) {
      alert(error.message); // Show correct error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Log in to Resend</h1>
        <p className="login-subtitle">
          Don't have an account?{" "}
          <a href="/signup" className="signup-link">
            Sign up.
          </a>
        </p>

        {error && <p className="error-message">{error}</p>}

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input type="text" placeholder="alan.turing" 
              value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="input-group">
            <label className="password-label">
              Password
              <a href="#" className="forgot-password">Forgot your password?</a>
            </label>
            <input type="password" placeholder="••••••••••••" 
              value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

         

          <button type="submit" className="continue-btn">Continue →</button>
        </form>
        <div className="separator">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <div className="social-login">
          <button className="social-btn">🔗 Login with GitHub</button>
          <button className="social-btn">🌍 Login with Google</button>
          <button className="social-btn">Login with SSO</button>
        </div>

        <p className="terms">
          By signing in, you agree to our{" "}
          <a href="#" className="terms-link">Terms of Service</a> and{" "}
          <a href="#" className="terms-link">Privacy Policy</a>.
        </p>
        


      </div>
    </div>
  );
}
