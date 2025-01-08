import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
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
        <Link
          href={{
            pathname: "/article",
            query: {
              title: data.title,
              content: data.content,
              urlToImage: data.urlToImage,
              publishedAt: data.publishedAt,
              publishName: data.source.name,
              url: data.url,
            },
          }}
        >
          <h1 className="font-bold text-[1.6rem] hover:underline">
            {data.title}
          </h1>
        </Link>
        <span className="flex my-4 text-gray-600">
          <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
          {`| ${DateFormat(data.publishedAt)}`}
        </span>
      </div>
      <div className="relative w-[90%] mx-auto">
        <Link
          href={{
            pathname: "/article",
            query: {
              title: data.title,
              content: data.content,
              urlToImage: data.urlToImage,
              publishedAt: data.publishedAt,
              publishName: data.source.name,
              url: data.url,
            },
          }}
        >
          <img
            src={data.urlToImage}
            alt="news Image"
            className="object-cover w-full h-full rounded-md"
          />
        </Link>
      </div>
    </div>
  );
}
