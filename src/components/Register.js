import React from "react";
import { Link } from "react-router-dom";
import NewsCategory from "./NewsCategory";
import mockData from "../utils/mockData.json";

const Register = () => {
  const newsCategory = mockData?.data[0];
  console.log(newsCategory);

  return (
    <div className="w-full max-w-screen-xl flex justify-center items-center mt-6 mx-auto ">
      <div className="flex flex-col gap-12 items-center">
        <div className="w-[48%] flex flex-col items-center gap-6">
          <h1 className="font-semibold text-5xl">
            Let's join as Newzy friends
          </h1>
          <p className=" leading-8 w-[90%] text-lg text-center text-[#888887]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>
        </div>
        <div className="w-[45%] flex flex-col items-center">
          <div className="w-[90%] flex flex-col items-center p-8 border border-black gap-8">
            <h2 className="text-4xl font-bold">Newzy</h2>
            <div className="w-[90%] flex flex-col gap-6">
              <label htmlFor="email" className="flex flex-col gap-2">
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
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

              <button className="bg-[#2b2d42] p-4 text-white text-lg font-medium rounded-lg">
                Register
              </button>
            </div>
            <p className="text-sm">
              Do you already have an account??{" "}
              <Link to="/login" className="text-lg font-bold">
                Login
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
        <NewsCategory categoryInfo={newsCategory} />
      </div>
    </div>
  );
};

export default Register;
