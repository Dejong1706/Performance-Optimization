"use client";

import CardSetionOne from "../card/setionOne/cardSetionOne";
import CardSetionTwo from "../card/setionTwo/cardSetionTwo";
import Loading from "../loading";
import { NewsData } from "@/app/types/news";
import NonData from "./nonData";
import React from "react";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";

const CardSetionThree = dynamic(
  () => import("../card/setionThree/cardSetionThree")
);
const CardSetionFour = dynamic(
  () => import("../card/setionFour/cardSetionFour")
);

export default function MainPost() {
  const { data, isLoading, isError } = useQuery<NewsData[]>({
    queryKey: ["HeadLineNewsData"],
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data || data.length === 0) {
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
