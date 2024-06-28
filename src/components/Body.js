import React from "react";
import HotTopic from "./HotTopic";
import LatestReleases from "./LatestReleases";

const Body = () => {
  return (
    <div className="w-full flex-1 flex-col items-center mt-4">
      <HotTopic />
      <LatestReleases />
    </div>
  );
};

export default Body;
