"use client";

import { DateFormat } from "@/app/utils/dateFormat";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ArticlePost() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const publishedAt = searchParams.get("publishedAt") ?? "2025-01-08T16:00:00Z";
  const urlToImage = searchParams.get("urlToImage");
  const content = searchParams.get("content");
  const publishName = searchParams.get("publishName");
  const url = searchParams.get("url");

  return (
    <main className="px-16 py-8 w-[80%] mx-auto mb-12">
      <h1 className="text-[2rem] font-bold mb-8">{title}</h1>
      {urlToImage && (
        <div className="relative w-full h-[400px] mx-auto mb-4">
          <Image
            src={urlToImage}
            alt="news Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-md"
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
    </main>
  );
}
