import React from "react";

const ShimmerBlock = () => {
  return (
    <div
      className="animate-shimmer h-full w-full bg-gray-300 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
      style={{ backgroundSize: "1000px 100%" }}
    ></div>
  );
};

const ShimmerUI = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-4xl py-4">
            <ShimmerBlock />
          </h1>
          <div className="p-4 w-32">
            <ShimmerBlock />
          </div>
        </div>
        <div className="flex justify-around gap-12 py-4">
          <div className="w-[44%] flex flex-col gap-8">
            <div className="h-64 bg-gray-200">
              <ShimmerBlock />
            </div>
            <div className="flex flex-col gap-4">
              <div className="h-8 bg-gray-200">
                <ShimmerBlock />
              </div>
              <div className="h-20 bg-gray-200">
                <ShimmerBlock />
              </div>
              <div className="py-4">
                <ShimmerBlock />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-10">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex justify-between gap-6">
                <div className="w-[45%] h-48 bg-gray-200">
                  <ShimmerBlock />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <div className="h-6 bg-gray-200">
                    <ShimmerBlock />
                  </div>
                  <div className="h-8 bg-gray-200">
                    <ShimmerBlock />
                  </div>
                  <div className="h-20 bg-gray-200">
                    <ShimmerBlock />
                  </div>
                  <div className="py-4">
                    <ShimmerBlock />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
