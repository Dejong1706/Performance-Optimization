import ArticleLink from "@/app/components/articleLink";
import { NewsData } from "@/app/types/news";
import React from "react";

const DetailPost = React.memo(({ data }: { data: NewsData }) => (
  <article className="border py-6 px-4 rounded-md flex w-full">
    <header className="w-[60%] px-4 flex flex-col justify-between">
      <ArticleLink data={data}>
        <h2 className="text-[1.4rem] font-bold mb-4 hover:underline">
          {data.title}
        </h2>
        <p className="hover:underline">{data.description}</p>
      </ArticleLink>
      <p className="font-bold text-gray-500">{data.source?.name}</p>
    </header>
    <section className="relative w-[40%] h-[20rem]">
      <ArticleLink data={data}>
        <img
          src={data.urlToImage}
          alt="news Image"
          loading="lazy"
          className="object-cover w-full h-full rounded-md"
          style={{
            aspectRatio: "16 / 9",
            objectFit: "cover",
          }}
        />
      </ArticleLink>
    </section>
  </article>
));

DetailPost.displayName = "DetailPost";

export default DetailPost;
