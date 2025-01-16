// components/ArticleLink.tsx

import Link from "next/link";
import { NewsData } from "../types/news";
import React from "react";

interface ArticleLinkProps {
  data: NewsData;
  children: React.ReactNode;
}

const ArticleLink = React.memo(({ data, children }: ArticleLinkProps) => (
  <Link
    href={{
      pathname: "/article",
      query: {
        title: data.title,
        content: data.content,
        urlToImage: data.urlToImage,
        publishedAt: data.publishedAt,
        publishName: data.source.name,
        url: data.url,
      },
    }}
  >
    {children}
  </Link>
));

ArticleLink.displayName = "ArticleLink";

export default ArticleLink;
