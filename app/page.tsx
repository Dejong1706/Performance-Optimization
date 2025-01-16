import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { HeadLineNewsData } from "./data/headLineNewsData";
import MainPost from "./components/ui/mainPost";
import { NewsData } from "@/app/types/news";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["HeadLineNewsData"],
    queryFn: HeadLineNewsData,
  });

  const initialData = queryClient.getQueryData<NewsData[]>([
    "HeadLineNewsData",
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainPost initialData={initialData} />
    </HydrationBoundary>
  );
}
