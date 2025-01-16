import ArticleLink from "../../articleLink";
import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import { TextLimit } from "@/app/utils/textLimit";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <section className="py-4">
      <div className="relative w-[20rem] h-[15rem] mx-auto">
        <ArticleLink data={data}>
          <Image
            src={data.urlToImage}
            alt="news Image"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </ArticleLink>
      </div>
      <ArticleLink data={data}>
        <div className="flex items-center w-[18rem] mx-auto text-[0.9rem] pt-4 pb-2 hover:underline">
          <FaUserCircle className="w-8 h-8 mr-4 text-blue-300" />
          <div className="flex flex-col">
            <span className="font-semibold">
              {TextLimit(data.author, 20) || "Frenkie De Jong"}
            </span>
            <span className="text-gray-600">author</span>
          </div>
        </div>
        <div className="w-[18rem] mx-auto hover:underline">
          <h1 className="font-bold text-[1rem]">{TextLimit(data.title, 40)}</h1>
          <span className="flex my-4 text-gray-600 text-[0.8rem]">
            <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
            {`| ${DateFormat(data.publishedAt)}`}
          </span>
        </div>
      </ArticleLink>
    </section>
  );
}
