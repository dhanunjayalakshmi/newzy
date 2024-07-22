import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { dateFormatting } from "../utils/dateformat";
import { truncateText } from "../utils/textTruncation";
import { NEWS_IMAGES } from "../utils/constants";

const SideArticle = ({ article }) => {
  const { title, urlToImage, publishedAt } = article;
  const { formattedDate, relativeTime } = dateFormatting(publishedAt);

  return (
    <Link to={`/General/${title}`}>
      <div className="w-full flex gap-2.5">
        <img
          src={urlToImage ? urlToImage : NEWS_IMAGES["General"]}
          alt=""
          className="w-[84px] h-[84px] object cover"
        />
        <div className="flex flex-1 flex-col items-start justify-between">
          <h6 className="text-lg font-bold leading-none">
            {truncateText(title, 60)}
          </h6>
          <div className="flex gap-2 items-center">
            <p className="text-xs font-bold">{formattedDate}</p>
            <p className="text-xs font-normal text-[#88888c]">
              - {relativeTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const HotTopic = ({ newsArticles, loading, error }) => {
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

  if (error) return <p className="font-bold text-4xl p-4">Please wait ....</p>;

  if (loading)
    return (
      <p className="h-screen text-center font-bold text-6xl">LOADING....</p>
    );

  if (articles) {
    const { title, urlToImage, publishedAt } = mainArticle;

    const { formattedDate } = dateFormatting(publishedAt);

    return (
      <div className="w-full flex justify-center mt-4">
        <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
          <h1 className="font-bold text-4xl py-4">Hot Topic</h1>
          <div className="w-full flex justify-around gap-6 py-4">
            <div className="w-[48%] h-[100%]">
              <img
                src={urlToImage ? urlToImage : NEWS_IMAGES["General"]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col gap-8 justify-center">
              <h2 className="text-4xl font-bold px-4">{title}</h2>
              <p className="text-xl font-bold p-4">{formattedDate}</p>
              <div className="px-4 py-2">
                <Link to={`/General/${title}`}>
                  <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
                    Read More
                    <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-10 mt-6 py-4">
            {sideArticles?.map((sideArticle, index) => (
              <SideArticle key={index} article={sideArticle} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default HotTopic;
