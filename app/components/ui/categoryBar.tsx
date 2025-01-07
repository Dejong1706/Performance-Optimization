import React from "react";

export default function CategoryBar() {
  return (
    <div className="bg-white border-b-2">
      <ul className="flex w-[60%] justify-evenly py-4 font-bold text-[1.2rem]">
        <li className="hover:text-gray-500 hover:cursor-pointer">Home</li>
        <li className="hover:text-gray-500 hover:cursor-pointer">Sports</li>
        <li className="hover:text-gray-500 hover:cursor-pointer">Health</li>
        <li className="hover:text-gray-500 hover:cursor-pointer">Science</li>
        <li className="hover:text-gray-500 hover:cursor-pointer">Technology</li>
        <li className="hover:text-gray-500 hover:cursor-pointer">Business</li>
      </ul>
    </div>
  );
}
