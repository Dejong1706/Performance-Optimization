import { PiNewspaperClippingDuotone } from "react-icons/pi";
import React from "react";
import SearchBar from "./ui/searchbar";

export default function Navbar() {
  return (
    <header className="bg-[#313030] text-white flex justify-between items-center px-12 h-16">
      <div className="flex items-center font-bold">
        <PiNewspaperClippingDuotone className="text-[1.5rem]" />
        <h1 className="text-[1.5rem] ml-4">QUICKY NEWS</h1>
      </div>
      <SearchBar />
    </header>
  );
}
