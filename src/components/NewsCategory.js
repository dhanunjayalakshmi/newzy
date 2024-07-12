import React from "react";
import NewsItem from "./NewsItem";
import { Link } from "react-router-dom";

const NewsCategory = ({ categoryInfo }) => {
  const { name, news, newsColor } = categoryInfo;
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">{name}</h1>
          <div className="p-4">
            <Link to="/allBlog">
              <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="h-px my-4 bg-black"></div>
        <div className="flex justify-between mt-6 gap-6">
          {news?.map((newsItem) => (
            <NewsItem newsInfo={newsItem} name={name} newsColor={newsColor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
