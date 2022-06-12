import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../actions/signup";
import { signupUser } from "../../api/auth";
import { showError } from "../../actions/error";

const problemLink = "https://codeforces.com/problemset/problem/4/A";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { username, password } = useSelector((state) => state.signupReducer);

  const handleChange = (e) => {
    dispatch(setUser(e.target.name, e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await signupUser({ username, password });
    if (data.signupSuccess) {
      return navigate("/");
    }
    dispatch(showError(data.err));
  };

  return (
    <>
      <div className="min-h-full flex items-center justify-center bg-white border-2 border-gray-700 rounded-lg shadow-xl pt-12 pb-6 px-12">
        <div className="" style={{ width: "16rem" }}>
          {/* Heading */}
          <div className="">
            <h2 className="text-lg font-bold text-gray-700">
              Submit a compilation error
            </h2>
            <a
              href={problemLink}
              target="_blank"
              className="text-sm font-bold underline text-blue-700"
            >
              Problem Link
            </a>
          </div>

          {/* Form */}
          <form className="mt-4 space-y-6" action="#" method="POST">
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
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
