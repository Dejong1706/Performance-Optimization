// app/search/SearchResults.tsx
"use client";

import { CategoryNewsData } from "@/app/data/categoryNewsData";
import DetailPost from "../../../components/ui/detailPost";
import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import { NewsData } from "@/app/types/news";
import { useQuery } from "@tanstack/react-query";

export default function CategorySection({
  initialData,
  category,
}: {
  initialData: NewsData[];
  category: string;
}) {
  const { data, isLoading, isError } = useQuery<NewsData[]>({
    queryKey: ["CategoryNewsData", category],
    queryFn: () => CategoryNewsData(category),
    initialData: initialData,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div>
      {data.map((article: NewsData, index: number) => (
        <DetailPost key={index} data={article} />
      ))}
    </div>
  );
}
