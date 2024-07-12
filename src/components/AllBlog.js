import React from "react";
import { faArrowTurnUp, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mockData from "../utils/mockData.json";
import { Link, NavLink, Outlet } from "react-router-dom";

const NewsGrid = ({ newsInfo, name, newsColor }) => {
  const { imageUrl } = newsInfo;
  console.log(name);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[40%] relative">
        <img src={imageUrl} alt="" className="w-full h-44 object-cover" />
        <div className="w-full h-44 flex flex-col items-start absolute px-1 pt-3 gap-28 bottom-0 left-0 right-0 top-0 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-75">
          <button
            className={`flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs bg-[#${newsColor}]`}
          >
            {name}
          </button>
          <p className="text-xs font-normal">Ukraine, 24 april 2022</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="leading-0 text-lg font-semibold">
          Zelensky accuses Russia of worst crimes since WW2
        </h3>
        <p className="leading-4 text-xs text-[#88888c]">
          The Ukrainian leader says Russia must face an international trial as
          he calls for the country to be thrown off the UN Security Council.
        </p>
        <div className="py-2">
          <button className="text-sm py-2 px-6 bg-black text-white border rounded-lg  text-center">
            Read More
            <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AllBlog = () => {
  const newsCategories = mockData?.data;

  return (
    <div className="w-full max-w-screen-xl flex justify-center items-center mt-10 py-4 mx-auto">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-[48%] flex flex-col gap-10 text-center">
          <h2 className="text-4xl font-semibold">
            Read the latest news from around the world
          </h2>
          <label
            htmlFor="search"
            className="flex justify-between p-6 bg-[#f8f7fc] text-lg rounded-lg"
          >
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search News here..."
              className="bg-[#f8f7fc] outline-none text-[#585f71]"
            />
            <button className="flex items-center gap-2 font-bold">
              <span>Filter</span>
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </label>
        </div>
        <div className="flex justify-between gap-6 mt-10">
          <div className="flex flex-1">
            <div className="grid grid-cols-3 gap-6">
              {newsCategories?.map((category) =>
                category?.news?.map((item) => (
                  <NewsGrid
                    newsInfo={item}
                    name={category?.name}
                    newsColor={category?.newsColor}
                  />
                ))
              )}
            </div>
          </div>
          <div className="w-[28%] flex flex-col gap-2 items-center">
            <div className="flex justify-between gap-2">
              <NavLink
                to="latest"
                className={({ isActive }) =>
                  isActive ? "px-4 py-2 bg-blue-500" : "px-4 py-2 bg-[#908f8f]"
                }
              >
                <button>Latest</button>
              </NavLink>
              <NavLink
                to="hotTopic"
                className={({ isActive }) =>
                  isActive ? "px-4 py-2 bg-blue-500" : "px-4 py-2 bg-[#908f8f]"
                }
              >
                <button>Hot Topic</button>
              </NavLink>
              <NavLink
                to="popular"
                className={({ isActive }) =>
                  isActive ? "px-4 py-2 bg-blue-500" : "px-4 py-2 bg-[#908f8f]"
                }
              >
                <button>Popular</button>
              </NavLink>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
