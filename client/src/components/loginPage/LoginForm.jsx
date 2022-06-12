import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../actions/login";
import { showError } from "../../actions/error";
import { loginUser } from "../../api/auth";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { username, password } = useSelector((state) => state.loginReducer);

  const handleChange = (e) => {
    dispatch(setUser(e.target.name, e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({ username, password });
    if (data.loginSuccess) {
      return navigate("/");
    } else {
      dispatch(showError(data.err));
    }
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center bg-white border-2 border-gray-700 rounded-lg shadow-xl pt-12 pb-6 px-12">
        <div className="" style={{ width: "16rem" }}>
          {/* Heading */}
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-700">
              Login to &nbsp;
            </h2>
            <img
              src="logo-no-bg.png"
              alt="Pear Programming"
              style={{ height: "2rem", width: "auto" }}
            ></img>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="">
              <div>
                <div className="text-xs font-medium mb-1">
                  Codeforces Handle
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none relative block w-full px-3 py-2 mb-6 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none text-xs"
                  placeholder="Ex. dhruv10050"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <div className="text-xs font-medium mb-1">Password</div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none text-xs"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium border border-gray-700 rounded-md bg-lime-400"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="flex mt-4 items-center justify-center">
            <div
              onClick={() => {
                navigate("/signup");
              }}
              href="/signup"
              className="text-xs cursor-pointer text-gray-700 hover:text-gray-800"
            >
              New to Pear Programming? &nbsp;
              <span className="font-bold">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
