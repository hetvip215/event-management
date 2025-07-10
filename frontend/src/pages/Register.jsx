import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    secretKey: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const role =
        isAdmin && formData.secretKey === import.meta.env.VITE_ADMIN_SECRET
          ? "admin"
          : "user";

      await axios.post("/api/v1/auth/register", {
        username: formData.username,
        password: formData.password,
        role,
      });
        navigate("/login");
        // alert("Registered successfully!");
    } catch (err) {
      console.error(err);
     // alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-4">
      <div className="w-full max-w-sm md:max-w-md bg-white shadow-lg rounded-lg p-8 border border-blue-100">
        <h1 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Create your CircleUp Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-blue-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-blue-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-blue-700 mb-1">
              Are you an admin?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm text-blue-600">
                <input
                  type="radio"
                  name="isAdmin"
                  value="yes"
                  checked={isAdmin}
                  onChange={() => setIsAdmin(true)}
                />
                Yes
              </label>
              <label className="flex items-center gap-2 text-sm text-blue-600">
                <input
                  type="radio"
                  name="isAdmin"
                  value="no"
                  checked={!isAdmin}
                  onChange={() => setIsAdmin(false)}
                />
                No
              </label>
            </div>
          </div>

          {isAdmin && (
            <div>
              <label className="block mb-1 text-sm font-medium text-blue-700">
                Admin Secret Key
              </label>
              <input
                type="password"
                name="secretKey"
                placeholder="Enter key"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
