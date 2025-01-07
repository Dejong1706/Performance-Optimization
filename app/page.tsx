"use client";

import { useEffect, useState } from "react";

import CardSetionFour from "./components/card/setionFour/cardSetionFour";
import CardSetionOne from "./components/card/setionOne/cardSetionOne";
import CardSetionThree from "./components/card/setionThree/cardSetionThree";
import CardSetionTwo from "./components/card/setionTwo/cardSetionTwo";
import { HeadLineNewsData } from "./data/headLineNewsData";
import Loading from "./components/loading";
import { NewsData } from "./types/news";

export default function Home() {
  const [data, setData] = useState<NewsData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await HeadLineNewsData();
      setData(result);
    };
    fetchData();
  }, []);

  if (!data) return <Loading />;

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

      <section className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
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
