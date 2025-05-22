import React from "react";

function Page() {
  return (
    <div className="min-h-screen flex items-end justify-center p-5 border">
      <div className="w-full max-w-md">
        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 text-left">
          Welcome to PopX
        </h1>
        <p className="text-gray-900/60 font-normal text-base md:text-lg mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>

        <a href="/register">
          <button
            type="button"
            className="bg-violet-700 hover:bg-violet-800 w-full text-white py-3 rounded-md mt-7 font-medium transition-colors duration-300 cursor-pointer"
          >
            Create Account
          </button>
        </a>

        <a href="/login">
          <button
            type="button"
            className="bg-violet-200 hover:bg-violet-300 w-full text-gray-900 py-3 rounded-md mt-2 font-medium transition-colors duration-300 cursor-pointer"
          >
            Already Registered? Login
          </button>
        </a>
      </div>
    </div>
  );
}

export default Page;
