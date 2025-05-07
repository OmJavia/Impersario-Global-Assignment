import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import Settings from "../components/settings";
import Properties from "../components/properties";
import Agents from "../components/agents";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/agents" element={<Agents />} />

    </Routes>
  );
};

export default AppRoutes;
