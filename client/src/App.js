import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Room from "./pages/Room";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      <Route exact path="/room/:id" element={<Room />} />
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
