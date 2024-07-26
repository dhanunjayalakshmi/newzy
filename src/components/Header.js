import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const checkActive = (basePath) => {
    const currentPaths = location?.pathname?.split("/");
    return currentPaths[1] === basePath;
  };

  return (
    <div className="w-full flex items-center bg-[#2b2d42]">
      <div className="w-full max-w-screen-xl flex justify-center items-center text-white py-8 mx-auto">
        <Link to="/">
          <h1 className="font-bold text-4xl cursor-pointer">Newzy</h1>
        </Link>

        <ul className="flex gap-2 text-lg font-semibold ml-40">
          <Link
            to="/business/view-all"
            className={
              checkActive("Business") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Business</li>
          </Link>
          <Link
            to="/health/view-all"
            className={
              checkActive("Health") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Health</li>
          </Link>
          <Link
            to="/science/view-all"
            className={
              checkActive("Science") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Science</li>
          </Link>
          <Link
            to="/sports/view-all"
            className={
              checkActive("Sports") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Sports</li>
          </Link>
          <Link
            to="/entertainment/view-all"
            className={
              checkActive("Entertainment") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Entertainment</li>
          </Link>
          <Link
            to="/technology/view-all"
            className={
              checkActive("Technology") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Technology</li>
          </Link>

          <Link
            to="/general/view-all"
            className={
              checkActive("General") ? "bg-white p-2 text-black" : "p-2"
            }
          >
            <li>Life</li>
          </Link>
        </ul>
        <div className="flex justify-between ml-40">
          <p>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
          </p>

          <div className="flex justify-between gap-6 text-sm font-normal ml-16">
            <Link to="/login">
              <p>Login</p>
            </Link>
            <Link to="/register">
              <p>Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
