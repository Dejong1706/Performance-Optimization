"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Loading from "@/app/components/loading";
import { NewsData } from "@/app/types/news";
import { SearchNewsData } from "@/app/data/searchNewsData";
import { useParams } from "next/navigation";

export default function SearchPage() {
  const params = useParams();
  const searchWord = params.search as string;

  const [data, setData] = useState<NewsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!searchWord) return;
    const getNews = async () => {
      setIsLoading(true);
      try {
        const data = await SearchNewsData(searchWord);
        setData(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getNews();
  }, [searchWord]);

  if (isLoading) return <Loading />;
  if (data.length === 0) return <p>No articles found</p>;

  console.log(data);

  return (
    <div>
      {data.map((article: NewsData, index) => (
        <div key={index} className="border py-6 px-4 rounded-md flex">
          <div className="w-[60%] px-4 flex flex-col justify-between">
            <Link
              href={{
                pathname: "/article",
                query: {
                  title: article.title,
                  content: article.content,
                  urlToImage: article.urlToImage,
                  publishedAt: article.publishedAt,
                  publishName: article.source.name,
                  url: article.url,
                },
              }}
            >
              <div>
                <h2 className="text-[1.4rem] font-bold mb-4 hover:underline">
                  {article.title}
                </h2>
                <p className="hover:underline">{article.description}</p>
              </div>
            </Link>
            <p className="font-bold text-blue-600">{article.source.name}</p>
          </div>
          <div className="relative w-[40%] h-[300px]">
            <Link
              href={{
                pathname: "/article",
                query: {
                  title: article.title,
                  content: article.content,
                  urlToImage: article.urlToImage,
                  publishedAt: article.publishedAt,
                  publishName: article.source.name,
                  url: article.url,
                },
              }}
            >
              <img
                src={article.urlToImage}
                alt="news Image"
                className="w-full h-full object-cover rounded-md"
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
