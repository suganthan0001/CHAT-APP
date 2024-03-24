import React, { useState } from "react";
import GenderCheck from "./GenderCheck";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignup();

  async function handleSubmit(e){
    e.preventDefault();
    signup(inputs);
  }

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="flex flex-col items-center justify-center w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SIGNUP
        </h1>

        <form action="" className="text-center" onSubmit={handleSubmit}>
          <div>
            <label className="input input-bordered flex items-center gap-2 m-5">
              <input
                value={inputs.fullName}
                onChange={(e) => {
                  setInputs({ ...inputs, fullName: e.target.value });
                }}
                type="text"
                className="grow"
                placeholder="Full Name"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                value={inputs.username}
                className="grow"
                placeholder="Username"
                onChange={(e) => {
                  setInputs({ ...inputs, username: e.target.value });
                }}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                value={inputs.password}
                className="grow"
                placeholder="Password"
                onChange={(e) => {
                  setInputs({ ...inputs, password: e.target.value });
                }}
              />
            </label>

            <label className="input input-bordered flex items-center gap-2 m-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                value={inputs.confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => {
                  setInputs({ ...inputs, confirmPassword: e.target.value });
                }}
              />
            </label>
          </div>
          <div>
            <GenderCheck inputs = {inputs} setInputs = {setInputs}/>
          </div>

          <div className="mt-4">
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-white"
            >
              Already have an account?
            </Link>
          </div>

          <button className="btn btn-outline-black btn-success mt-4 ">
            SIGNUP
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
