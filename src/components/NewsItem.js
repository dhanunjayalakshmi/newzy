import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ newsInfo, name, newsColor }) => {
  const { imageUrl } = newsInfo;

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[44%] relative">
        <img src={imageUrl} alt="" className="w-full h-64 object-cover" />
        <div className="w-full h-64 flex flex-col items-start absolute px-6 pt-4 gap-44 bottom-0 left-0 right-0 top-0 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-75">
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
          <Link to="/singleBlog">
            <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
              Read More
              <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
