import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HotTopic = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
        <h1 className="font-bold text-4xl py-4">Hot Topic</h1>
        <div className="w-full flex justify-around gap-6 py-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
            alt=""
            className="w-[48%] h-64 object-cover"
          />

          <div className="flex flex-1 flex-col gap-8">
            <h2 className="text-4xl font-bold px-4">
              Miami Dolphins won the match and officially qualified for the
              final
            </h2>
            <p className="text-xl font-bold p-4">New York, 22 August 2022</p>
            <div className="px-4 py-2">
              <Link to="/singleBlog">
                <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
                  Read More
                  <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-10 mt-6 py-4">
          <div className="w-full flex gap-2.5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
              alt=""
              className="w-[84px] h-[84px] object cover"
            />
            <div className="flex flex-1 flex-col items-start justify-between">
              <h6 className="text-lg font-bold leading-none">
                How to maximize investment with mutual funds
              </h6>
              <div className="flex gap-2 items-center">
                <p className="text-xs font-bold">Indonesia, 22 August 2022</p>
                <p className="text-xs font-normal text-[#88888c]">
                  - 15 minutes ago
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-2.5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
              alt=""
              className="w-[84px] h-[84px] object cover"
            />
            <div className="flex flex-1 flex-col items-start justify-between">
              <h6 className="text-lg font-bold leading-none">
                john kennedy won 3rd oscar trophy at los angles
              </h6>
              <div className="flex gap-2 items-center">
                <p className="text-xs font-bold">Los Angles, 22 August 2022</p>
                <p className="text-xs font-normal text-[#88888c]">
                  - 22 minutes ago
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-2.5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
              alt=""
              className="w-[84px] h-[84px] object cover"
            />
            <div className="flex flex-1 flex-col items-start justify-between">
              <h6 className="text-lg font-bold leading-none">
                Miami Dolphins won the match and officially qualified for the
                final
              </h6>
              <div className="flex gap-2 items-center">
                <p className="text-xs font-bold">New York, 22 August 2022</p>
                <p className="text-xs font-normal text-[#88888c]">
                  - 10 minutes ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotTopic;
