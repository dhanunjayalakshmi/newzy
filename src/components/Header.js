import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage?.getItem("user"));

  const checkActive = (basePath) => {
    const currentPaths = location?.pathname?.split("/");
    return currentPaths[1] === basePath;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-full flex items-center bg-[#2b2d42]">
      <div className="w-full max-w-screen-xl flex justify-center items-center text-white py-8 mx-auto">
        <Link to="/">
          <h1 className="font-bold text-4xl cursor-pointer">Newzy</h1>
        </Link>

        <ul className="flex gap-4 text-lg font-semibold ml-40">
          <Link
            to="/business/view-all"
            className={
              checkActive("business")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Business</li>
          </Link>
          <Link
            to="/health/view-all"
            className={
              checkActive("health")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Health</li>
          </Link>
          <Link
            to="/science/view-all"
            className={
              checkActive("science")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Science</li>
          </Link>
          <Link
            to="/sports/view-all"
            className={
              checkActive("sports")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Sports</li>
          </Link>
          <Link
            to="/entertainment/view-all"
            className={
              checkActive("entertainment")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Entertainment</li>
          </Link>
          <Link
            to="/technology/view-all"
            className={
              checkActive("technology")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Technology</li>
          </Link>

          <Link
            to="/general/view-all"
            className={
              checkActive("general")
                ? "border-b-2 p-2"
                : "p-2 hover:scale-110 transform transition duration-300 ease-in-out"
            }
          >
            <li>Life</li>
          </Link>
        </ul>
        <div className="flex justify-between ml-20">
          {user ? (
            <div className="flex justify-between gap-6 text-md font-bold ml-16">
              <Link to="/userProfile">
                <p className="flex justify-between items-center gap-2">
                  <FontAwesomeIcon icon={faUser} />
                  {user?.displayName}
                </p>
              </Link>

              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="flex justify-between gap-6 text-md font-normal ml-16 ">
              <Link to="/login">
                <p className="hover:scale-110 transform transition duration-300 ease-in-out">
                  Login
                </p>
              </Link>
              <Link to="/register">
                <p className="hover:scale-110 transform transition duration-300 ease-in-out">
                  Register
                </p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
