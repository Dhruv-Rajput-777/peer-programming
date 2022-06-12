import React from "react";

import SignupForm from "../components/signupPage/SignupForm";
import ErrorBanner from "../components/ErrorBanner";

const SignupPage = () => {
  return (
    <div>
      <ErrorBanner />
      <div className="flex flex-wrap justify-evenly items-center w-screen h-screen">
        <div className="flex flex-col justify-center items-center">
          <img
            src="logo-no-bg.png"
            alt="Pear Programming"
            style={{ height: "11rem", width: "auto" }}
          ></img>

          <h2 className="text-3xl font-bold text-gray-700 mt-2">
            Pear Programming
          </h2>
        </div>
        <div className="login-form">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
