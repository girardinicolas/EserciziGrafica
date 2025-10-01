import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../components/UserContext";

function Login() {
  const { user, login } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (user) {
      navigate("/profile", { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;
    login(username.trim());
    navigate("/profile", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, margin: 16 }}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Accedi</button>
    </form>
  );
}

export default Login;


