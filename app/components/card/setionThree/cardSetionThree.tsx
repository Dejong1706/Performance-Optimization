import { CardSectionArrayProps } from "@/app/types/news";
import CardSetion from "./cardSetion";
import React from "react";

export default function CardSetionThree({ data }: CardSectionArrayProps) {
  return (
    <div className="flex justify-around py-16 bg-white">
      <CardSetion data={data[0]} />
      <CardSetion data={data[1]} />
    </div>
  );
}
