import ArticleLink from "../../articleLink";
import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import Image from "next/image";
import React from "react";
import { TextLimit } from "@/app/utils/textLimit";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <section className="relative w-[35rem] h-[26.25rem] mx-auto pr-2 py-2">
      <ArticleLink data={data}>
        <Image
          src={data.urlToImage}
          alt="news Image"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
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
      </ArticleLink>
    </section>
  );
}
