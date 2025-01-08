import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import Link from "next/link";
import React from "react";
import { TextLimit } from "@/app/utils/textLimit";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <div className="relative w-[40%] h-[300px] mx-auto pr-2 py-2">
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
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "brightness(50%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end items-center pb-8 text-white">
          <h1 className="font-bold text-[1.2rem]">
            {TextLimit(data.title, 40)}
          </h1>
          <span className="flex my-4 text-white">
            <p className="mr-2 font-bold">{data.source.name}</p>
            {`| ${DateFormat(data.publishedAt)}`}
          </span>
        </div>
      </Link>
    </div>
  );
}
