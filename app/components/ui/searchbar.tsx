import React from "react";

export default function SearchBar() {
  return (
    <form role="search" className="relative">
      <input
        placeholder="What to search for"
        aria-label="Search"
        className="w-80 rounded-md text-black px-10 py-2 border border-gray-300"
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        🔍
      </span>
    </form>
  );
}
