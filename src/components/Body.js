import React from "react";
import HotTopic from "./HotTopic";
import LatestRelease from "./LatestRelease";

const Body = () => {
  return (
    <div className="w-full flex-1 flex-col items-center mt-4">
      <HotTopic />
      <LatestRelease />
    </div>
  );
};

export default Body;
