import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Landing from "./pages/Landing.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import UserDashboard from "./pages/UserDashboard.jsx"
// import Landing from "./pages/Landing"; // if needed later

const App = () => {
  return (
    <Routes>
      {/* To be added later */}
      <Route path="/" element={<Landing />} /> 

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/user-dashboard" element={<UserDashboard />} /> 
    </Routes>
  );
};

export default App;
