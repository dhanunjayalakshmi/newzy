import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { COLOR_CODES } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";

const NewsCategory = ({ category }) => {
  const [newsData, setNewsData] = useState(null);

  const { data, loading, error } = useFetchData(
    "https://newsapi.org/v2/top-headlines",
    {
      country: "in",
      category: category,
      pageSize: 30,
    }
  );

  useEffect(() => {
    if (data) setNewsData(data?.articles);
  }, [data]);

  const color = COLOR_CODES[category];

  const categoryInfo = { category: category, newsColor: color };

  if (error) return <p className="font-bold text-4xl p-4">Please wait ....</p>;

  if (loading) return <ShimmerUI />;

  if (newsData) {
    const slicedNews = newsData?.slice(0, 3);
    return (
      <div className="w-full flex justify-center mt-4">
        <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl">{category}</h1>
            <div className="p-4">
              <Link to={`/${category}/view-all`}>
                <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <div className="h-px my-4 bg-black"></div>
          <div className="flex justify-between mt-6 gap-6">
            {slicedNews?.map((newsItem, index) => (
              <NewsItem
                key={index}
                newsInfo={newsItem}
                categoryInfo={categoryInfo}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default NewsCategory;
