import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Form.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    if (users.find((u) => u.email === email)) {
      alert("User already exists!");
      return;
    }

    // Add new user
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Signup successful!");
    navigate("/"); // Navigate to login page
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}
