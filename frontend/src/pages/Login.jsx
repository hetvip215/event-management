import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");

      // Redirect user based on token if needed
      const token = res.data.token;
      const decoded = JSON.parse(atob(token.split(".")[1]));
      const role = decoded.role;

      if (role === "admin") {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/user-dashboard";
      }
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" className="w-full p-2 border" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border" onChange={handleChange} required />
        <button type="submit" className="bg-primary text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
