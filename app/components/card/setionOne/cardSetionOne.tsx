import ArticleLink from "../../articleLink";
import { CardSectionProps } from "@/app/types/news";
import { DateFormat } from "@/app/utils/dateFormat";
import { FaUserCircle } from "react-icons/fa";
import React from "react";

const CardSetionOne = React.memo(({ data }: CardSectionProps) => {
  console.log(data.urlToImage);
  return (
    <article className="w-[50%] h-[44rem] p-4">
      <header className="flex items-center w-[90%] mx-auto">
        <FaUserCircle className="w-8 h-8 mr-4 text-blue-300" />
        <div className="flex flex-col">
          <span className="font-semibold">
            {data.author || "Frenkie De Jong"}
          </span>
          <span className="text-gray-600">author</span>
        </div>
      </header>
      <section className="w-[90%] mx-auto">
        <ArticleLink data={data}>
          <h1 className="font-bold text-[1.6rem] hover:underline">
            {data.title}
          </h1>
        </ArticleLink>
        <span className="flex my-4 text-gray-600">
          <p className="mr-2 font-bold text-orange-300">{data.source.name}</p>
          {`| ${DateFormat(data.publishedAt)}`}
        </span>
      </section>
      <section className="relative w-[90%] h-[27rem] mx-auto">
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
  );
});

CardSetionOne.displayName = "CardSetionOne";

export default CardSetionOne;
