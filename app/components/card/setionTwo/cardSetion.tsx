import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import Link from "next/link";
import React from "react";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <section className="flex w-[90%] mx-auto">
      <div className="pl-2 py-2 w-[60%]">
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
          <div className="font-bold hover:underline">{data.title}</div>
          <div className="my-2 text-gray-600 text-[0.9rem] hover:underline">
            {data.description}
          </div>
        </Link>
        <span className="flex my-4 text-gray-600">
          <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
          {`| ${DateFormat(data.publishedAt)}`}
        </span>
      </div>
      <div className="relative w-[35%] h-[180px] mx-auto pr-2 py-2">
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
            width="200"
            height="100"
            alt="news Image"
            className="object-cover w-full h-full rounded-md"
          />
        </Link>
      </div>
    </section>
  );
}
