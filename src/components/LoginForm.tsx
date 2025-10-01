import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() !== "") {
      navigate("/profile");
    } else {
      alert("Inserisci uno username");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Inserisci username"
      />
      <button type="submit">Accedi</button>
    </form>
  );
};

export default LoginForm;
