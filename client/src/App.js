import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Room from "./pages/Room";

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      <Route exact path="/room/:id" element={<Room />} />
    </Routes>
  );
}

export default App;
