import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    secretKey: "", // Optional: for admin access
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const role = formData.secretKey === import.meta.env.VITE_ADMIN_SECRET ? "admin" : "user";

      const res = await axios.post("/api/v1/auth/register", {
        username: formData.username,
        password: formData.password,
        role,
      });

      alert("Registered successfully!");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="username" placeholder="Username" className="w-full p-2 border" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 border" onChange={handleChange} required />
        <input type="text" name="secretKey" placeholder="Admin Secret Key (optional)" className="w-full p-2 border" onChange={handleChange} />
        <button type="submit" className="bg-primary text-white px-4 py-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
