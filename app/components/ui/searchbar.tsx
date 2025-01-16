"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchWord, setSearchWord] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchWord.trim()) return;
    router.push(`/search/${encodeURIComponent(searchWord)}`);
  };

  return (
    <form role="search" className="relative" onSubmit={handleSearch}>
      <input
        placeholder="What to search for"
        aria-label="Search"
        className="w-80 rounded-md text-black px-10 py-2 border border-gray-300"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
        🔍
      </span>
    </form>
  );
}
