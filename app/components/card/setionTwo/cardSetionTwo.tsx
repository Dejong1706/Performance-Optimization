import { CardSectionArrayProps } from "@/app/types/news";
import CardSetion from "./cardSetion";
import React from "react";

const CardSetionTwo = React.memo(({ data }: CardSectionArrayProps) => {
  return (
    <article className="w-[50%] h-[44rem] flex flex-col justify-around items-center py-2">
      {data.slice(0, 3).map((item, index) => (
        <CardSetion key={index} data={item} />
      ))}
    </article>
  );
});

CardSetionTwo.displayName = "CardSetionTwo";

export default CardSetionTwo;
