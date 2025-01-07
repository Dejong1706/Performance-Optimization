import { CardSectionArrayProps } from "@/app/types/news";
import CardSetion from "./cardSetion";
import React from "react";

export default function CardSetionTwo({ data }: CardSectionArrayProps) {
  return (
    <div className="w-[50%] flex flex-col justify-center items-center py-2">
      <CardSetion data={data[0]} />
      <CardSetion data={data[1]} />
      <CardSetion data={data[2]} />
    </div>
  );
}
