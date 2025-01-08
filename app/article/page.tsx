"use client";

import { DateFormat } from "../utils/dateFormat";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ArticlePage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const publishedAt = searchParams.get("publishedAt") ?? "2025-01-07T16:00:00Z";
  const urlToImage = searchParams.get("urlToImage");
  const content = searchParams.get("content");
  const publishName = searchParams.get("publishName");
  const url = searchParams.get("url");

  return (
    <div className="px-16 py-8 w-[80%] mx-auto mb-12">
      <h1 className="text-[2rem] font-bold mb-8">{title}</h1>
      {urlToImage && (
        <div className="relative mx-auto">
          <img
            src={urlToImage}
            alt="news Image"
            className="object-cover w-full h-full rounded-md mb-4"
          />
        </div>
      )}
      <p className="font-bold text-gray-700">{publishName}</p>
      <p className="font-bold text-gray-700 text-[0.9rem]">
        {DateFormat(publishedAt)}
      </p>
      <p className="my-4 text-[1.2rem]">{content}</p>
      <Link href={`${url}`} target="_blank">
        <p className="text-[1.1rem] font-bold">
          Read more about the article :{" "}
          <b className="border-b text-blue-600">{url}</b>
        </p>
      </Link>
    </div>
  );
}
