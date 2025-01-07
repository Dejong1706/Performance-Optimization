import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import { FaUserCircle } from "react-icons/fa";
import React from "react";

export default function CardSetionOne({ data }: CardSectionProps) {
  return (
    <div className="w-[50%] p-4">
      <div className="flex items-center w-[90%] mx-auto">
        <FaUserCircle className="w-8 h-8 mr-4 text-blue-300" />
        <div className="flex flex-col">
          <span className="font-semibold">
            {data.author || "Frenkie De Jong"}
          </span>
          <span className="text-gray-600">author</span>
        </div>
      </div>
      <div className="w-[90%] mx-auto">
        <h1 className="font-bold text-[1.6rem]">{data.title}</h1>
        <span className="flex my-4 text-gray-600">
          <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
          {`| ${DateFormat(data.publishedAt)}`}
        </span>
      </div>
      <div className="relative w-[90%] mx-auto">
        <img
          src={data.urlToImage}
          width="200"
          height="100"
          alt="news Image"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
}
