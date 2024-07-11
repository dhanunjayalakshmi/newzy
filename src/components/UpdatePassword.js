import React from "react";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
  return (
    <div className="w-full max-w-screen-xl flex justify-center my-20 py-4 mx-auto ">
      <div className="flex justify-center">
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="text-5xl font-semibold py-4">
            Enter your new password to update the old password
          </h1>
          <p className=" leading-10 w-[90%] text-lg text-[#888887]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>
        </div>
        <div className="w-[45%] flex flex-col items-end gap-4">
          <div className="w-[90%] flex flex-col items-center p-8 border border-black gap-8">
            <h2 className="text-4xl font-bold">Newzy</h2>
            <div className="w-[90%] flex flex-col gap-6">
              <label htmlFor="password" className="flex flex-col gap-2">
                Password
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
              <label htmlFor="confirmPassword" className="flex flex-col gap-2">
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter your password"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
            </div>
            <button className="w-[90%] bg-[#2b2d42] p-4 text-white text-lg font-medium rounded-lg">
              Update Password
            </button>
            <p className="text-sm">
              You can now login from{" "}
              <Link to="/login" className="text-lg font-bold">
                Here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
