import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import ProtectedRouter from "./ProcetorRoutes/ProtectoRouter";
import { ToastContainer } from "react-toastify";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        {/* Public Route: Login */}
        <Route 
          path="/" 
          element={<Login setToken={setToken} />} 
        />
        
        {/* Protected Route: Users */}
        <Route 
          path="/users" 
          element={
            <ProtectedRouter token={token}>
              <Users />
            </ProtectedRouter>
          } 
        />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
