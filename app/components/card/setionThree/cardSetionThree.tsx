import { CardSectionArrayProps } from "@/app/types/news";
import CardSetion from "./cardSetion";
import React from "react";

const CardSetionThree = React.memo(({ data }: CardSectionArrayProps) => {
  return (
    <article className="flex justify-around py-16 bg-white">
      {data.slice(0, 2).map((item, index) => (
        <CardSetion key={index} data={item} />
      ))}
    </article>
  );
});

CardSetionThree.displayName = "CardSetionThree";

export default CardSetionThree;
