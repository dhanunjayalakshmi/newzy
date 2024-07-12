import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NewsComponent = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="h-44 relative">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStC-T8S1BzKS9BlYRedKrMLDVKs8IN6TH_OQ&s"
          alt=""
          className="w-full h-44 object-cover"
        />
        {/* <div class="w-full h-max absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div> */}
        <div className="w-full h-44 flex flex-col items-start absolute px-2 pt-2 gap-28 bottom-0 left-0 right-0 top-0 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-75">
          <button
            className={`flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs bg-red-600`}
          >
            Hot Topic
          </button>
          <p className="text-sm font-normal">Ukraine, 24 april 2022</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold">
          Zelensky accuses Russia of worst crimes since WW2
        </h3>
        <p className="leading-6 text-xs text-[#88888c]">
          The Ukrainian leader says Russia must face an international trial as
          he calls for the country to be thrown off the UN Security Council.
        </p>
        <div className="py-4">
          <button className="text-sm py-2 px-6 bg-black text-white border rounded-lg">
            Read More
            <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className="w-full max-w-screen-xl flex justify-center mt-6 py-4 mx-auto ">
      <div className="flex items-center gap-12">
        <div className="flex flex-1 flex-col">
          <h1 className="text-5xl font-semibold py-4">
            Welcome back, there is the latest news today !!
          </h1>
          <div className="flex justify-between gap-4 py-8">
            <NewsComponent />
            <NewsComponent />
          </div>
        </div>
        <div className="w-[45%] flex flex-col items-end">
          <div className="w-[90%] flex flex-col items-center p-8 border border-black gap-8">
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
              <div className="flex justify-between items-center font-bold">
                <label
                  htmlFor="passwordCheckbox"
                  className="flex gap-2 items-center"
                >
                  <input
                    type="checkbox"
                    name="passwordCheckbox"
                    id=""
                    className="w-[18px] h-[18px]"
                  />{" "}
                  Remember me?
                </label>
                <Link to="/forgotPassword">Forgot Password</Link>
              </div>
              <button className="bg-[#2b2d42] p-4 text-white text-lg font-medium rounded-lg">
                Login
              </button>
            </div>
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-lg font-bold">
                Register
              </Link>{" "}
              here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
