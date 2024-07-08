import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LatestRelease = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl py-4">Latest Release</h1>
          <div className="p-4">
            <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
              View All
            </button>
          </div>
        </div>
        <div className="flex justify-around gap-12 py-4">
          <div className="w-[44%] flex flex-col gap-8">
            <div className="h-[42%] relative">
              <img
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_unsplash_l_2p8fapoa8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240708%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240708T120653Z&X-Amz-Expires=25200&X-Amz-Signature=3256b93a97a7c58affb3e6583eca93650e06f14a503cabeb3a858ebd37fe70b0&X-Amz-SignedHeaders=host"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="w-full h-max flex flex-col items-start absolute px-6 py-4 gap-52 bottom-0 left-0 right-0 top-0 text-white">
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
                <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
                  Read More
                  <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex justify-between gap-6">
              <img
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_unsplash_j5keq1jlqzk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240708%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240708T132856Z&X-Amz-Expires=25200&X-Amz-Signature=7629f95853b3150377af016095af23623c1c40795f2072546f4ed1bd4864f7a1&X-Amz-SignedHeaders=host"
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
                  <button className="text-md py-2 px-6 bg-black text-white border rounded-lg">
                    Read More
                    <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <img
                src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_unsplash_l_2p8fapoa8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240708%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240708T132856Z&X-Amz-Expires=25200&X-Amz-Signature=59d40793bbf5bdc649e98021d3a89ad64b96e41b7dc9a1d283d0d2e793509e8e&X-Amz-SignedHeaders=host"
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
                  <button className="text-md py-2 px-6 bg-black text-white border rounded-lg">
                    Read More
                    <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                  </button>
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
