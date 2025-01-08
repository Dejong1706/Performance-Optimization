"use client";

import React, { useState } from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { CardSectionArrayProps } from "@/app/types/news";
import CardSetion from "./cardSetion";

export default function CardSetionFour({ data }: CardSectionArrayProps) {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="py-4">
      <div className="flex flex-wrap justify-around">
        {data.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="p-2">
            <CardSetion data={item} />
          </div>
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="border-2 border-gray-600 px-4 py-2 w-64 rounded-md flex justify-center items-center hover:bg-gray-100"
          >
            <p className="mr-2">Show More</p>
            <AiFillCaretDown className="text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
}
