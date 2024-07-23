import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dateFormatting } from "../utils/dateformat";
import { truncateText } from "../utils/textTruncation";
import { NEWS_IMAGES } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import ErrorPage from "./ErrorPage";

const SideArticle = ({ article }) => {
  const { title, description, urlToImage, publishedAt } = article;

  const { formattedDate } = dateFormatting(publishedAt);
  return (
    <div className="flex justify-between gap-6">
      <img
        src={urlToImage ? urlToImage : NEWS_IMAGES["General"]}
        alt=""
        className="w-[45%] object-cover"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm pt-2">{formattedDate}</p>
        <h5 className="text-xl font-bold">{truncateText(title, 55)}</h5>
        <p className="leading-6 text-sm text-[#88888c]">
          {description
            ? truncateText(description, 150)
            : truncateText(
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus velit, inventore, ut culpa explicabo cupiditate tempora excepturi perferendis consequatur ea dignissimos corporis non unde soluta blanditiis perspiciatis animi nostrum?",
                150
              )}
        </p>
        <div className="py-4">
          <Link to={`/general/${title}`}>
            <button className="text-md py-2 px-6 bg-black text-white border rounded-lg">
              Read More
              <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const LatestRelease = ({ newsArticles, loading, error }) => {
  const [articles, setArticles] = useState(newsArticles);
  const [mainArticle, setMainArticle] = useState();
  const [sideArticles, setSideArticles] = useState();

  useEffect(() => {
    if (newsArticles) {
      setArticles(newsArticles);
      setMainArticle(newsArticles[0]);
      setSideArticles(newsArticles?.slice(1));
    }
  }, [newsArticles]);

  if (error) return <ErrorPage />;

  if (loading) return <ShimmerUI />;

  if (articles) {
    const { title, description, urlToImage, publishedAt } = mainArticle;

    const { formattedDate } = dateFormatting(publishedAt);

    return (
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-screen-xl flex flex-col justify-center mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-4xl py-4">Latest Release</h1>
            <div className="p-4">
              <Link to="/General/view-all">
                <button className="text-md py-2 px-8 bg-[#2b2d42] text-white border rounded-lg">
                  View All
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-around gap-12 py-4">
            <div className="w-[44%] flex flex-col gap-8">
              <div className="h-64 relative">
                <img
                  src={urlToImage ? urlToImage : NEWS_IMAGES["General"]}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-max flex flex-col items-start absolute px-6 py-4 gap-48 bottom-0 left-0 right-0 top-0 text-white">
                  <button className=" flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-xs bg-red-600">
                    Hot Topic
                  </button>
                  <p className="text-sm font-normal">{formattedDate}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="leading-6 text-sm text-[#88888c]">
                  {description
                    ? truncateText(description, 150)
                    : truncateText(
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus velit, inventore, ut culpa explicabo cupiditate tempora excepturi perferendis consequatur ea dignissimos corporis non unde soluta blanditiis perspiciatis animi nostrum?",
                        150
                      )}
                </p>
                <div className="py-4">
                  <Link to={`/General/${title}`}>
                    <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
                      Read More
                      <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-10">
              {sideArticles?.map((sideArticle, index) => (
                <SideArticle key={index} article={sideArticle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LatestRelease;
