import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { TextLimit } from "@/app/utils/textLimit";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <div className="py-4">
      <div className="relative w-[18rem] h-[200px] mx-auto">
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
            className="w-full h-full object-cover rounded-md"
          />
        </Link>
      </div>
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
        <div className="flex items-center w-[18rem] mx-auto text-[0.9rem] pt-4 pb-2 hover:underline">
          <FaUserCircle className="w-8 h-8 mr-4 text-blue-300" />
          <div className="flex flex-col">
            <span className="font-semibold ">
              {TextLimit(data.author, 20) || "Frenkie De Jong"}
            </span>
            <span className="text-gray-600">author</span>
          </div>
        </div>
        <div className="w-[18rem] mx-auto hover:underline">
          <h1 className="font-bold text-[0.9rem]">
            {TextLimit(data.title, 60)}
          </h1>
          <span className="flex my-4 text-gray-600 text-[0.8rem]">
            <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
            {`| ${DateFormat(data.publishedAt)}`}
          </span>
        </div>
      </Link>
    </div>
  );
}
