import React, { useEffect, useState } from "react";
import { faArrowTurnUp, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import { dateFormatting2 } from "../utils/dateformat";
import { truncateText } from "../utils/textTruncation";
import useFetchData from "../hooks/useFetchData";
import { COLOR_CODES, NEWS_IMAGES } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import ErrorPage from "./ErrorPage";
import Pagination from "./Pagination";

const NewsGrid = ({ article, categoryInfo }) => {
  useScrollToTop();
  const { category, newsColor } = categoryInfo;
  const { title, description, image, published } = article;

  const { formattedDate } = dateFormatting2(published);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[40%] relative">
        <img
          src={image?.length > 10 ? image : NEWS_IMAGES[category]}
          alt=""
          className="w-full h-48 object-cover"
        />
        <div className="w-full h-48 flex flex-col items-start absolute px-1 pt-3 gap-32 bottom-0 left-0 right-0 top-0 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-75">
          <button
            style={{ backgroundColor: `#${newsColor}` }}
            className="flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs"
          >
            {category[0].toUpperCase() + category?.slice(1)}
          </button>
          <p className="text-sm font-semibold">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="leading-0 text-lg font-semibold">
          {truncateText(title, 70)}
        </h3>
        <p className="leading-6 text-xs h-16 text-[#88888c]">
          {description
            ? truncateText(description, 150)
            : truncateText(
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus velit, inventore, ut culpa explicabo cupiditate tempora excepturi perferendis consequatur ea dignissimos corporis non unde soluta blanditiis perspiciatis animi nostrum?",
                150
              )}
        </p>
        <div className="py-2">
          <Link to={`/${category}/${title}`}>
            <button className="text-sm py-2 px-6 bg-black text-white border rounded-lg  text-center">
              Read More
              <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const AllBlog = () => {
  const [articles, setArticles] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const params = useParams();
  const { category } = params;

  const { data, loading, error } = useFetchData(
    "https://api.currentsapi.services/v1/latest-news",
    {
      category: category,
      page_size: 30,
    }
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (data) {
      setArticles(data?.news);
      setCurrentPage(1);
    }
  }, [data]);

  if (error || articles?.length === 0) return <ErrorPage />;

  if (loading) return <ShimmerUI />;

  if (articles) {
    const color = COLOR_CODES[category];
    const categoryInfo = { category: category, newsColor: color };

    const totalPages = Math.ceil(articles.length / 6);
    const indexOfLastItem = currentPage * 6;
    const indexOfFirstItem = indexOfLastItem - 6;
    const currentItems = articles.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <div className="w-full max-w-screen-xl flex justify-center items-center mt-10 py-4 mx-auto">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-[48%] flex flex-col gap-10 text-center">
            <h2 className="text-4xl font-semibold">
              Read the latest news from around the world
            </h2>
            <label
              htmlFor="search"
              className="flex justify-between p-6 bg-[#f8f7fc] text-lg rounded-lg"
            >
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search News here..."
                className="bg-[#f8f7fc] outline-none text-[#585f71]"
              />
              <button className="flex items-center gap-2 font-bold">
                <span>Filter</span>
                <FontAwesomeIcon icon={faFilter} />
              </button>
            </label>
          </div>
          <div className="flex justify-between gap-6 mt-10">
            <div className="flex flex-1">
              <div className="flex flex-col">
                <div className="grid grid-cols-3 gap-6">
                  {currentItems?.map((article) => (
                    <NewsGrid
                      key={article?.id}
                      article={article}
                      categoryInfo={categoryInfo}
                    />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
              {/* <div className="w-[28%] flex flex-col gap-2 items-center">
            <div className="flex justify-between gap-2">
              <NavLink
                to="latest"
                className={({ isActive }) =>
                  isActive ? "px-4 py-2 bg-blue-500" : "px-4 py-2 bg-[#908f8f]"
                }
              >
                <button>Latest</button>
              </NavLink>
              <NavLink
                to="hotTopic"
                className={({ isActive }) =>
                  isActive ? "px-4 py-2 bg-blue-500" : "px-4 py-2 bg-[#908f8f]"
                }
              >
                <button>Hot Topic</button>
              </NavLink>
              <NavLink
                to="popular"
                className={({ isActive }) =>
                  isActive ? "px-4 py-2 bg-blue-500" : "px-4 py-2 bg-[#908f8f]"
                }
              >
                <button>Popular</button>
              </NavLink>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              <Outlet />
            </div>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AllBlog;
