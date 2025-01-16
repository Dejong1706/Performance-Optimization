import Loading from "@/app/components/loading";
import { SearchNewsData } from "@/app/data/searchNewsData";
import SearchSection from "../components/searchSection";
import { Suspense } from "react";

export default async function SearchPage({
  params,
}: {
  params: { search: string };
}) {
  const searchWord = params.search;
  const newsData = await SearchNewsData(searchWord);

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <SearchSection initialData={newsData} searchWord={searchWord} />
      </Suspense>
    </main>
  );
}
