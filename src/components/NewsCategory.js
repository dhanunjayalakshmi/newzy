import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewsItem = ({ newsInfo, name, newsColor }) => {
  const { imageUrl } = newsInfo;
  const color = "red";
  console.log(newsColor);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[44%] relative">
        <img src={imageUrl} alt="" className="w-full h-full object-cover" />
        <div className="w-full h-max flex flex-col items-start absolute px-6 py-4 gap-44 bottom-0 left-0 right-0 top-0 text-white">
          <button
            className={`flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs bg-[#${newsColor}]`}
          >
            {name}
          </button>
          <p className="text-sm font-normal">Ukraine, 24 april 2022</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">
          Zelensky accuses Russia of worst crimes since WW2
        </h3>
        <p className="leading-6 text-sm text-[#88888c]">
          The Ukrainian leader says Russia must face an international trial as
          he calls for the country to be thrown off the UN Security Council.
        </p>
        <div className="py-4">
          <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
            Read More
            <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

const NewsCategory = ({ categoryInfo }) => {
  const { name, news, newsColor } = categoryInfo;
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">{name}</h1>
          <div className="p-4">
            <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
              View All
            </button>
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
