"use client";

import { useEffect, useState } from "react";

import { CategoryNewsData } from "../data/categoryNewsData";
import Loading from "../components/loading";
import { NewsData } from "../types/news";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  const [data, setData] = useState<NewsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!category) return;
    const getNews = async () => {
      setIsLoading(true);
      try {
        const data = await CategoryNewsData(category);
        setData(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getNews();
  }, [category]);

  if (isLoading) return <Loading />;
  if (data.length === 0) return <p>No articles found</p>;

  return (
    <div>
      {data.map((article: NewsData, index) => (
        <div key={index} className="border py-6 px-4 rounded-md flex">
          <div className="w-[60%] px-4">
            <h2 className="text-[1.4rem] font-bold mb-4">{article.title}</h2>
            <p>{article.description}</p>
          </div>
          <div className="relative w-[40%] h-[300px]">
            <img
              src={article.urlToImage}
              alt="news Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
