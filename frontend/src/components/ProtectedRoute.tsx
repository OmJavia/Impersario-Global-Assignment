import { Navigate } from "react-router-dom";
import { useAuth } from "../validate/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
