import React from "react";
import verified from "../../assets/verified.png"
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div className="flex justify-center items-center bg-gray-200 py-8">
      {/* Login Container */}
      <div className="flex flex-col md:flex-row border rounded-3xl p-3 bg-white shadow-lg max-w-4xl">
        
        {/* Left Box */}
        <div className="hidden md:flex flex-col justify-center items-center bg-primary p-8 rounded-2xl text-center">
          <img
            src={verified}
            alt="Featured"
            className="w-64 mb-4"
          />
          <p className="text-[#333] text-2xl font-bold">
            Be Verified
          </p>
          <small className="text-[#333] mt-2 text-base">
            Join experienced Designers on this platform.
          </small>
        </div>

        {/* Right Box */}
        <div className="flex flex-col justify-center p-8 space-y-4 md:w-1/2">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Hello, Again</h2>
            <p className="text-gray-500">We are happy to have you back.</p>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-4 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-100 text-lg"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full p-4 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-100 text-lg"
              placeholder="Password"
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="formCheck"
                className="h-4 w-4 text-secondary focus:ring-secondary/70 border-gray-300 rounded"
              />
              <label htmlFor="formCheck" className="ml-2 text-gray-600">
                <small>Remember Me</small>
              </label>
            </div>
            
          </div>

          {/* Login Button */}
          <div>
            <button className="w-full bg-secondary text-white py-4 rounded-lg text-lg hover:bg-secondary/70 transition" onClick={handleClick}>
              Login
            </button>
          </div>

          {/* Google Login Button */}
          <div>
            <button className="w-full bg-white text-gray-700 py-4 border border-gray-300 rounded-lg text-lg hover:bg-gray-100 transition flex justify-center items-center">
              <FaGoogle className=" mr-2"/>
              <small>Sign In with Google</small>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <small>
              Don't have an account?{" "}
              <a href="/auth/register" className="text-secondary hover:underline">
                Sign Up
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
