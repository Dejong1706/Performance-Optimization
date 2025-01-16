// app/search/SearchResults.tsx
"use client";

import DetailPost from "../../../components/ui/detailPost";
import Error from "@/app/components/error";
import Loading from "@/app/components/loading";
import { NewsData } from "@/app/types/news";
import { SearchNewsData } from "@/app/data/searchNewsData";
import { useQuery } from "@tanstack/react-query";

export default function SearchSection({
  initialData,
  searchWord,
}: {
  initialData: NewsData[];
  searchWord: string;
}) {
  const { data, isLoading, isError } = useQuery<NewsData[]>({
    queryKey: ["searchNews", searchWord],
    queryFn: () => SearchNewsData(searchWord),
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
