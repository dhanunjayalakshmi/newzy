import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-full flex items-center bg-[#2b2d42]">
      <div className="w-full max-w-screen-xl flex justify-center items-center text-white py-8 mx-auto">
        <h1 className="font-bold text-4xl">Newzy</h1>
        <ul className="flex gap-6 text-lg font-semibold ml-40">
          <li>Sport</li>
          <li>Health</li>
          <li>Political</li>
          <li>Business</li>
          <li>Finance</li>
          <li>Life</li>
          <li>Entertainment</li>
        </ul>
        <div className="flex justify-between ml-40">
          <p>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
          </p>

          <div className="flex justify-between gap-6 text-sm font-normal ml-16">
            <p>Login</p>
            <p>Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
