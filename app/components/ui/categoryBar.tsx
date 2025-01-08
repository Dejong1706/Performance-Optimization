"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function CategoryBar() {
  const categories = [
    "Home",
    "Sports",
    "Health",
    "Science",
    "Technology",
    "Business",
  ];

  const pathname = usePathname();

  return (
    <div className="bg-white border-b-2 text-black">
      <ul className="flex w-[60%] justify-evenly py-4 font-bold text-[1.2rem]">
        {categories.map((category) => {
          const isActive =
            (category === "Home" && pathname === "/") ||
            pathname === `/${category.toLowerCase()}`;

          return (
            <li
              key={category}
              className={`px-2 py-1 hover:bg-gray-100 hover:cursor-pointer ${
                isActive ? "text-orange-400" : ""
              }`}
            >
              <Link
                href={category === "Home" ? "/" : `/${category.toLowerCase()}`}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
