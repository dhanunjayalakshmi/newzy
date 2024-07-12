import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full flex justify-center my-4">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto bg-[#222126] text-white text-center rounded-3xl leading-2">
        <div className="w-[50%] mx-auto py-4">
          <h1 className="text-5xl font-semibold py-4">
            Get the Latest Notifications and Info from Us
          </h1>
          <p className="py-4 leading-8 text-[#b1b4b6]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled.
          </p>
          <div className="py-4">
            <button className="text-lg font-semibold py-2 px-8 bg-white text-black border rounded-full">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
