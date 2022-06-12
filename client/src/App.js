import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
    </Routes>
  );
}

export default App;
