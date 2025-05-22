"use client"; // If you are using Next.js 13 app router and want client-side component

import { useState, useEffect } from "react";
import Image from "next/image";
import man from "../assets/man.png";

const ProfilePage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("User");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email") || "";
    const storedName = localStorage.getItem("name");
    setEmail(storedEmail);

    // Check for undefined or empty string for name
    if (storedName && storedName !== "undefined") {
      setName(storedName);
    }
  }, []);

  return (
    <div className="min-h-screen shadow-lg bg-gray-200/80">
      <header className="h-[70px] bg-white px-8 py-4 flex items-center">
        <h1 className="capitalize text-gray-600 text-2xl font-medium">
          Account Settings
        </h1>
      </header>

      <section className="flex gap-4 px-[38px] py-4 items-center">
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <Image src={man} alt="Profile Picture" className="object-cover" />
          <i className="bi bi-camera text-blue-800 absolute right-0 bottom-0 text-2xl cursor-pointer"></i>
        </div>

        <div>
          <p className="capitalize font-medium text-lg">
            <strong>{name}</strong>
          </p>
          <p className="capitalize font-medium text-gray-600">{email}</p>
        </div>
      </section>

      <p className="px-8 text-gray-600 max-w-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias expedita
        maiores corrupti molestias explicabo, eos, corporis sunt minima
        reprehenderit quaerat fugit at! Dolore fugit iste expedita, eos impedit
        modi consequuntur.
      </p>
    </div>
  );
};

export default ProfilePage;
