import { PiNewspaperClippingDuotone } from "react-icons/pi";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#313030] text-white py-6 px-12 text-sm">
      <div className="mb-8 flex justify-between">
        <div className="flex items-center font-bold">
          <PiNewspaperClippingDuotone className="text-[1.5rem]" />
          <h1 className="text-[1.5rem] ml-4">QUICKY NEWS</h1>
        </div>
        <div className="flex items-center">
          <input
            placeholder="ppk0320@gmail.com"
            className="w-64 px-4 py-2 rounded-l-md border border-gray-300"
            readOnly
          />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition">
            Email
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex space-x-6">
          <p className="hover:underline">Home</p>
          <p className="hover:underline">News</p>
          <p className="hover:underline">Sports</p>
          <p className="hover:underline">Entertainment</p>
          <p className="hover:underline">Technology</p>
          <p className="hover:underline">Contact Us</p>
        </div>
        <div className="flex space-x-6">
          <p className="hover:underline">About Us</p>
          <p className="hover:underline">Terms of Service</p>
          <p className="hover:underline">Privacy Policy</p>
          <p className="hover:underline">Help Center</p>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-400">
        © 2025 QUICKY NEWS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
