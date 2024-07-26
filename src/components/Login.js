import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { dateFormatting2 } from "../utils/dateformat";
import { NEWS_IMAGES } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import ErrorPage from "./ErrorPage";

const NewsComponent = ({ article }) => {
  const { title, description, image, published } = article;

  const { formattedDate } = dateFormatting2(published);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="h-44 relative">
        <img
          src={image ? image : NEWS_IMAGES["General"]}
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
          <p className="text-sm font-normal">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="leading-6 text-xs text-[#88888c]">{description}</p>
        <div className="py-4">
          <Link to={`/general/${title}`}>
            <button className="text-sm py-2 px-6 bg-black text-white border rounded-lg">
              Read More
              <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Login = () => {
  const [articles, setArticles] = useState(null);

  const { data, loading, error } = useFetchData(
    "https://api.currentsapi.services/v1/latest-news",
    {
      category: "general",
      page_size: 2,
    }
  );

  useEffect(() => {
    if (data) {
      setArticles(data?.news);
    }
  }, [data]);

  if (error) return <ErrorPage />;

  if (loading) return <ShimmerUI />;

  if (articles) {
    return (
      <div className="w-full max-w-screen-xl flex justify-center mt-6 py-4 mx-auto ">
        <div className="flex items-center gap-12">
          <div className="flex flex-1 flex-col">
            <h1 className="text-5xl font-semibold py-4">
              Welcome back, there is the latest news today !!
            </h1>
            <div className="flex justify-between gap-4 py-8">
              {articles?.map((article) => (
                <NewsComponent key={article?.id} article={article} />
              ))}
              {/* <NewsComponent />
              <NewsComponent /> */}
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
  }
};

export default Login;
