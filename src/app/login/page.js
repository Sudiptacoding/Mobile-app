// app/login/page.jsx
"use client"; // Required to use hooks like useRouter in App Router

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Optional: Add real auth validation here
    if (email && password) {
      // Simulate login success
      router.push("/account");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F8F9] flex justify-center px-4 py-10">
      <div className="w-full max-w-sm border p-6 bg-white rounded-lg">
        <h1 className="text-2xl font-bold text-[#1D2226] leading-9">
          Sign in to your <br /> PopX account
        </h1>
        <p className="text-base text-[#1D2226] opacity-60 leading-[22px] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <form onSubmit={handleLogin} className="space-y-6 mt-6">
          {/* Email Field */}
          <div className="relative w-full">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-[0.5px] focus:border-[#6C25FF] focus:ring-[#6C25FF]"
            />
            <label
              htmlFor="email"
              className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
            >
              Email address
            </label>
          </div>

          {/* Password Field */}
          <div className="relative w-full">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-[0.5px] focus:border-[#6C25FF] focus:ring-[#6C25FF]"
            />
            <label
              htmlFor="password"
              className="absolute text-[13px] left-2 -top-2 pl-1.5 pr-2 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]"
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#6C25FF] hover:bg-[#5A1EDB] transition duration-300 text-white rounded-md text-base font-medium w-full h-[46px] mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
