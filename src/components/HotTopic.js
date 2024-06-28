import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

const HotTopic = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
        <h1 className="font-bold text-4xl py-4">Hot Topic</h1>
        <div className="w-full flex justify-around gap-6 py-4">
          <img
            src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_rectangle_5.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240628%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T111250Z&X-Amz-Expires=25200&X-Amz-Signature=210b4ed0f1043297e0433c5b4fbf906d429e2e99a7c07cef0ef108a56b5f1d9a&X-Amz-SignedHeaders=host"
            alt=""
            className="w-[48%] h-full object-cover"
          />

          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold px-4">
              Miami Dolphins won the match and officially qualified for the
              final
            </h2>
            <p className="text-xl font-bold p-4">New York, 22 August 2022</p>
            <div className="p-4">
              <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
                Read More
                <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-10 mt-6 py-4">
          <div className="w-full flex gap-2.5">
            <img
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_rectangle_1479.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240628%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T111250Z&X-Amz-Expires=25200&X-Amz-Signature=35e7ada8fc3d3b933d4672958c451888afb41e4dd043cd832def2c95df1263b7&X-Amz-SignedHeaders=host"
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
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_rectangle_1479_84x84.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240628%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T111250Z&X-Amz-Expires=25200&X-Amz-Signature=19bd9bd4c4bea80d5479289180405db73602cd44c3a6d195ff697da5b8d66c42&X-Amz-SignedHeaders=host"
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
              src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/639c702090ab520015fa42a3/appSource/images/img_rectangle_1479_1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPZWQNPYGZ%2F20240628%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240628T111250Z&X-Amz-Expires=25200&X-Amz-Signature=5b083f3cb3be04e9cb54054aba02edd9b041cbe5037d60319d574de1f612b5f1&X-Amz-SignedHeaders=host"
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
