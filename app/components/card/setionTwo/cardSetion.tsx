import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import React from "react";

export default function CardSetion({ data }: CardSectionProps) {
  return (
    <section className="flex w-[90%] mx-auto">
      <div className="pl-2 py-2 w-[60%]">
        <div className="font-bold">{data.title}</div>
        <div className="my-2 text-gray-600 text-[0.9rem]">
          {data.description}
        </div>
        <span className="flex my-4 text-gray-600">
          <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
          {`| ${DateFormat(data.publishedAt)}`}
        </span>
      </div>
      <div className="relative w-[35%] h-[180px] mx-auto pr-2 py-2">
        <img
          src={data.urlToImage}
          width="200"
          height="100"
          alt="news Image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>
    </section>
  );
}
