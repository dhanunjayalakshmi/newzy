import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { dateFormatting } from "../utils/dateformat";
import { truncateText } from "../utils/textTruncation";
import { NEWS_IMAGES } from "../utils/constants";

const NewsItem = ({ newsInfo, categoryInfo }) => {
  const { title, description, urlToImage, publishedAt } = newsInfo;

  const { category, newsColor } = categoryInfo;

  const { formattedDate } = dateFormatting(publishedAt);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="h-[44%] relative">
        <img
          src={urlToImage ? urlToImage : NEWS_IMAGES[category]}
          alt=""
          className="w-full h-64 object-cover"
        />
        <div className="w-full h-64 flex flex-col items-start absolute px-6 pt-4 gap-44 bottom-0 left-0 right-0 top-0 text-white bg-gradient-to-t from-black via-transparent to-transparent opacity-75">
          <button
            style={{ backgroundColor: `#${newsColor}` }}
            className={`flex self-end font-bold items-center justify-center text-center cursor-pointer py-1 px-3 text-md `}
          >
            {category}
          </button>
          <p className="text-sm font-normal">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">{truncateText(title, 55)}</h3>
        <p className="leading-6 text-sm h-16 text-[#88888c]">
          {description
            ? truncateText(description, 150)
            : truncateText(
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos minus velit, inventore, ut culpa explicabo cupiditate tempora excepturi perferendis consequatur ea dignissimos corporis non unde soluta blanditiis perspiciatis animi nostrum?",
                150
              )}
        </p>
        <div className="py-4">
          <Link to={`/${category}/${title}`}>
            <button className="text-md py-2 px-4 bg-black text-white border rounded-lg">
              Read More
              <FontAwesomeIcon icon={faArrowTurnUp} className="mx-2" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
