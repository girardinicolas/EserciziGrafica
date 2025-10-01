import { Navigate } from "react-router-dom";
import { useUser } from "../components/UserContext";

function Profile() {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>Profilo</h2>
      <p>Benvenuto, {user.name}</p>
    </div>
  );
}

export default Profile;


