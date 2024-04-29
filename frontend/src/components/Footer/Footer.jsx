import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>

        <div>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              chowbuddy@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +233 050 265 0625
            </a>
          </nav>
        </div>
        <p className="text-gray-400 mt-4">
          © 2024 ChowBuddy Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
