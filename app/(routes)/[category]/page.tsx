import { CategoryNewsData } from "../../data/categoryNewsData";
import CategorySection from "./components/categorySection";
import Loading from "../../components/loading";
import NonData from "@/app/components/ui/nonData";
import { Suspense } from "react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const category = (await params).category;
  const data = await CategoryNewsData((await params).category);

  if (!data || data.length === 0) {
    return <NonData />;
  }

  return (
    <main>
      <Suspense fallback={<Loading />}>
        <CategorySection initialData={data} category={category} />
      </Suspense>
    </main>
  );
}
