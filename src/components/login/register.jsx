import React from "react";
import verified from "../../assets/verified.png"
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/auth/login")
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
            <h2 className="text-3xl font-bold">Hello, Friend!</h2>
            <p className="text-gray-500">Enter your personal details and start journey with us</p>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-4 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-gray-100 text-lg"
              placeholder="User Name"
            />
          </div>
          <div>
            <input
              type="email"
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

          

          {/* Login Button */}
          <div>
            <button className="w-full bg-secondary text-white py-4 rounded-lg text-lg hover:bg-secondary/70 transition" onClick={handleClick}>
              Sign Up
            </button>
          </div>

          

          {/* Sign Up Link */}
          <div className="text-center mt-4">
            <small>
              You have an account?{" "}
              <a href="/auth/login" className="text-secondary hover:underline">
                Login
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
