import ArticleLink from "../../articleLink";
import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import React from "react";
import { TextLimit } from "@/app/utils/textLimit";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <section className="flex w-[90%] h-[12rem] mx-auto">
      <div className="pl-2 py-2 w-[60%]">
        <ArticleLink data={data}>
          <div className="font-bold hover:underline">{data.title}</div>
          <div className="my-2 text-gray-600 text-[0.9rem] hover:underline">
            {`${TextLimit(data.description, 70)}`}
          </div>
        </ArticleLink>
        <span className="flex my-4 text-gray-600 text-[0.9rem]">
          <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
          {`| ${DateFormat(data.publishedAt)}`}
        </span>
      </div>
      <div className="relative w-[13rem] h-[10rem] mx-auto pr-2 py-2">
        <ArticleLink data={data}>
          <img
            src={data.urlToImage}
            alt="news Image"
            loading="lazy"
            className="object-cover w-full h-full rounded-md"
            style={{
              aspectRatio: "16 / 9",
              objectFit: "cover",
            }}
          />
        </ArticleLink>
      </div>
    </section>
  );
}
