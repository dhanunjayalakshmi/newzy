import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="w-full max-w-screen-xl flex justify-center my-20 py-4 mx-auto ">
      <div className="flex">
        <div className="flex flex-1 flex-col gap-8">
          <h1 className="text-5xl font-semibold py-4">
            You forgot your password? calm down we will help
          </h1>
          <p className=" leading-10 w-[90%] text-lg text-[#888887]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>
        </div>
        <div className="w-[45%] flex flex-col items-end gap-8">
          <div className="w-[90%] flex flex-col items-center p-8 border border-black gap-10">
            <h2 className="text-4xl font-bold">Newzy</h2>
            <div className="w-[90%] flex flex-col gap-6">
              <label htmlFor="email" className="flex flex-col gap-2">
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
            </div>
            <button className="w-[90%] bg-[#2b2d42] p-4 text-white text-lg font-medium rounded-lg">
              Reset Password
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

export default ForgotPassword;
