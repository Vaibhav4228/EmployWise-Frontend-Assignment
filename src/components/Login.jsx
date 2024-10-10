import React, { useState } from 'react';
import { loginUser } from '../utils/api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      toast.success("Login Successful!", { position: "top-center" });
      navigate("/users?page=1");
    } catch (err) {
      toast.error("Invalid email or password!", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 to-blue-600">
      <div className="relative bg-white p-16 rounded-3xl shadow-2xl w-96 transform transition-all duration-500 hover:scale-105 animate-card">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-10 rounded-3xl blur-2xl animate-gradient-rotate"></div>

        {/* Animated Login Text */}
        <h2 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-text-fade">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6 relative z-10">
          <div className="flex items-center border-2 border-gray-300 rounded-xl p-4 focus-within:border-purple-500">
            <Lock className="text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-none w-full pl-3 focus:outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center border-2 border-gray-300 rounded-xl p-4 focus-within:border-purple-500">
            <Lock className="text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-none w-full pl-3 focus:outline-none bg-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-purple-500"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
     
    </div>
  );
}

export default Login;
