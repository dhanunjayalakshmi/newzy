import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NewsItem = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[42%] relative">
        <img
          src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_unsplash_l_2p8fapoa8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240708%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240708T120653Z&X-Amz-Expires=25200&X-Amz-Signature=3256b93a97a7c58affb3e6583eca93650e06f14a503cabeb3a858ebd37fe70b0&X-Amz-SignedHeaders=host"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="w-full h-max flex flex-col items-start absolute px-6 py-4 gap-44 bottom-0 left-0 right-0 top-0 text-white">
          <button className=" flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs bg-red-600">
            Entertainment
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
  console.log(categoryInfo);
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl">Entertainment</h1>
          <div className="p-4">
            <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
              View All
            </button>
          </div>
        </div>
        <div className="h-px my-4 bg-black"></div>
        <div className="flex justify-between mt-4 gap-6">
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </div>
      </div>
    </div>
  );
};

export default NewsCategory;
