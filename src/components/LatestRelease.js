import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const LatestRelease = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl py-4">Latest Release</h1>
          <div className="p-4">
            <Link to="allBlog">
              <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
                View All
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-around gap-12 py-4">
          <div className="w-[44%] flex flex-col gap-8">
            <div className="h-64 relative">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="w-full h-max flex flex-col items-start absolute px-6 py-4 gap-48 bottom-0 left-0 right-0 top-0 text-white">
                <button className=" flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs bg-red-600">
                  Hot Topic
                </button>
                <p className="text-sm font-normal">Ukraine, 24 april 2022</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-bold">
                Zelensky accuses Russia of worst crimes since WW2
              </h3>
              <p className="leading-6 text-sm text-[#88888c]">
                The Ukrainian leader says Russia must face an international
                trial as he calls for the country to be thrown off the UN
                Security Council.
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
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex justify-between gap-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
                alt=""
                className="w-[45%] object-cover"
              />
              <div className="flex flex-col gap-2">
                <p className="text-sm pt-2">New York, 19 april 2022</p>
                <h5 className="text-xl font-bold">
                  Jhon Lorni has won 1st place in international match
                </h5>
                <p className="leading-6 text-sm text-[#88888c]">
                  This is his first victory in the international olympics, so
                  his name is quite explosive on the international scene
                </p>
                <div className="py-4">
                  <Link to="/singleBlog">
                    <button className="text-md py-2 px-6 bg-black text-white border rounded-lg">
                      Read More
                      <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
                alt=""
                className="w-[45%] object-cover"
              />
              <div className="flex flex-col gap-2">
                <p className="text-sm pt-2">Amsterdam, 23 april 2022</p>
                <h5 className="text-xl font-bold">
                  The extinction of the Arabian turtle made the government...
                </h5>
                <p className="leading-6 text-sm text-[#88888c]">
                  The jalabiya turtle is a very unique species because it is
                  thought to have existed from ancient times, but has begun to
                  become..
                </p>
                <div className="py-4">
                  <Link to="/singleBlog">
                    <button className="text-md py-2 px-6 bg-black text-white border rounded-lg">
                      Read More
                      <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRelease;
