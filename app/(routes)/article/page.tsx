import ArticlePost from "./components/articlePost";
import Loading from "@/app/components/loading";
import { Suspense } from "react";

export default function ArticlePage() {
  return (
    <Suspense fallback={<Loading />}>
      <ArticlePost />
    </Suspense>
  );
}
