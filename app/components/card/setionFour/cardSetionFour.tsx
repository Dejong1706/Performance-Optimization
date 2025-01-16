import React, { useCallback, useState } from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { CardSectionArrayProps } from "@/app/types/news";
import CardSetion from "./cardSetion";

const CardSetionFour = React.memo(({ data }: CardSectionArrayProps) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 4);
  }, []);

  return (
    <article className="py-4">
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {data.slice(0, visibleCount).map((item, index) => (
          <div key={item.url || index} className="p-2">
            <CardSetion data={item} />
          </div>
        ))}
      </section>

      {visibleCount < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="border-2 border-gray-600 px-4 py-2 w-64 rounded-md flex justify-center items-center hover:bg-gray-100"
          >
            <p className="mr-2">Show More</p>
            <AiFillCaretDown className="text-gray-600" />
          </button>
        </div>
      )}
    </article>
  );
});

CardSetionFour.displayName = "CardSetionFour";

export default CardSetionFour;
