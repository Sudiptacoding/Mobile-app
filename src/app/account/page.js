
import Image from "next/image";
import React from "react";

export default function AccountSettings() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center">
      <div className="w-full max-w-md mx-4 mt-8">
        <div className="bg-white rounded-t-xl shadow-none">
          {/* Header */}
          <h2 className="text-lg font-semibold p-6 pb-3 text-left border-b">
            Account Settings
          </h2>

          {/* User Info */}
          <div className="flex items-center gap-4 px-6 pt-5 pb-2">
            <div className="relative">
              <Image
                alt="profile"
                className="rounded-full w-16 h-16 object-cover border"
                src="https://educase-react-js.vercel.app/profile.png"
              />
              <span className="absolute bottom-0 right-0 bg-violet-600 p-1 rounded-full border-2 border-white">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 13V7l6-4 6 4v6l-6 4-6-4z" />
                </svg>
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-semibold text-base mb-1">Guest User</span>
              <span className="text-gray-500 text-sm">
                sudiptabiswas506@gmail.com
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="px-6 pb-6 pt-2">
            <p className="text-sm text-gray-600">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam
              Erat, Sed Diam
            </p>
          </div>

          {/* Divider */}
          <div className="border-t mx-6 mb-4"></div>
        </div>
      </div>
    </div>
  );
}
