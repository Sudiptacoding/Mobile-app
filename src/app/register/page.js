"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // for Next.js App Router

function Registration() {
  const router = useRouter();
  const [agency, setAgency] = useState("Yes");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get form values (in real case, validate or send to API)
    const name = e.target.name.value.trim();
    const phone = e.target.phone.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const company = e.target.company.value.trim();

    if (name && phone && email && password && company) {
      // All fields filled, redirect
      router.push("/account");
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="bg-[#F7F8F9] border border-gray-200 px-5 pt-10 pb-7 font-sans">
      <h1 className="text-2xl font-bold text-[#1D2226] leading-9">
        Create your <br /> PopX account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        {/* Name */}
        <div className="relative w-full">
          <input
            id="name"
            name="name"
            type="text"
            placeholder=" "
            required
            className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
          />
          <label className="absolute text-[13px] left-2 -top-2 px-1 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]">
            Full Name<span className="ml-0.5 text-red-500">*</span>
          </label>
        </div>

        {/* Phone */}
        <div className="relative w-full">
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder=" "
            required
            className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
          />
          <label className="absolute text-[13px] left-2 -top-2 px-1 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]">
            Phone number<span className="ml-0.5 text-red-500">*</span>
          </label>
        </div>

        {/* Email */}
        <div className="relative w-full">
          <input
            id="email"
            name="email"
            type="email"
            placeholder=" "
            required
            className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
          />
          <label className="absolute text-[13px] left-2 -top-2 px-1 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]">
            Email address<span className="ml-0.5 text-red-500">*</span>
          </label>
        </div>

        {/* Password */}
        <div className="relative w-full">
          <input
            id="password"
            name="password"
            type="password"
            placeholder=" "
            required
            className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
          />
          <label className="absolute text-[13px] left-2 -top-2 px-1 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]">
            Password<span className="ml-0.5 text-red-500">*</span>
          </label>
        </div>

        {/* Company */}
        <div className="relative w-full">
          <input
            id="company"
            name="company"
            type="text"
            placeholder=" "
            required
            className="peer w-full px-3.5 pt-3 pb-2 text-sm text-[#1D2226] border border-[#CBCBCB] rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-[#6C25FF] focus:border-[#6C25FF]"
          />
          <label className="absolute text-[13px] left-2 -top-2 px-1 leading-[17px] bg-[#F7F8F9] text-[#6C25FF]">
            Company name<span className="ml-0.5 text-red-500">*</span>
          </label>
        </div>

        {/* Radio */}
        <div>
          <span className="text-[13px] leading-[17px] text-[#1D2226]">
            Are you an Agency?<span className="text-red-500 ml-1">*</span>
          </span>

          <div className="flex gap-6 mt-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={agency === "Yes"}
                onChange={(e) => setAgency(e.target.value)}
                className="accent-[#6C25FF] size-4 cursor-pointer"
              />
              Yes
            </label>

            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={agency === "No"}
                onChange={(e) => setAgency(e.target.value)}
                className="accent-[#6C25FF] size-4 cursor-pointer"
              />
              No
            </label>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-[#6C25FF] rounded-md text-white text-base leading-[17px] font-medium w-full h-[46px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#5A1EDB] mt-14"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Registration;
