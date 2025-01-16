import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { HeadLineNewsData } from "./data/headLineNewsData";
import MainPost from "./components/ui/mainPost";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["HeadLineNewsData"],
    queryFn: HeadLineNewsData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MainPost />
    </HydrationBoundary>
  );
}
