"use client";

import CardSetionOne from "../card/setionOne/cardSetionOne";
import CardSetionTwo from "../card/setionTwo/cardSetionTwo";
import { NewsData } from "@/app/types/news";
import NonData from "./nonData";
import React from "react";
import dynamic from "next/dynamic";

const CardSetionThree = dynamic(
  () => import("../card/setionThree/cardSetionThree")
);
const CardSetionFour = dynamic(
  () => import("../card/setionFour/cardSetionFour")
);

interface MainPostProps {
  initialData: NewsData[] | undefined;
}

export default function MainPost({ initialData }: MainPostProps) {
  const data = initialData ?? [];

  if (data.length === 0) {
    return <NonData />;
  }

  const sectionOneData = data[0] ? data[0] : null;
  const sectionTwoData = data.slice(1, 4);
  const sectionThreeData = data.slice(4, 6);
  const sectionFourData = data.slice(6);

  return (
    <main className="bg-gray-50">
      <section className="flex">
        {sectionOneData && <CardSetionOne data={sectionOneData} />}
        {sectionTwoData.length > 0 && <CardSetionTwo data={sectionTwoData} />}
      </section>

      <section className="shadow-[...]">
        {sectionThreeData.length > 0 && (
          <CardSetionThree data={sectionThreeData} />
        )}
      </section>
      <section>
        {sectionFourData.length > 0 && (
          <CardSetionFour data={sectionFourData} />
        )}
      </section>
    </main>
  );
}
