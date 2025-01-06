"use client";

import { useEffect, useState } from "react";

import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );
      if (response.status === 200) {
        console.log("성공");
        setData(response.data);
      } else {
        console.log("에러");
      }
    } catch {
      console.log("서버에러");
    }
  };

  console.log(data);

  return <div className="h-[500px]">main</div>;
}
