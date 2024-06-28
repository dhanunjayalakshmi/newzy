import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";

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
      </div>
    </div>
  );
};

export default HotTopic;
