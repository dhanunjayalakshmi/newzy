import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import NewsCategory from "./NewsCategory";
import useScrollToTop from "../hooks/useScrollToTop";
import { useParams } from "react-router-dom";
import { dateFormatting } from "../utils/dateformat";
import useFetchData from "../hooks/useFetchData";
import { NEWS_IMAGES } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";
import ErrorPage from "./ErrorPage";

const SingleBlog = () => {
  const [newsArticle, setNewsArticle] = useState();
  const params = useParams();
  const { category, id } = params;

  useScrollToTop();

  const { data, loading, error } = useFetchData(
    "https://api.currentsapi.services/v1/latest-news",
    {
      category: category,
      page_size: 30,
    }
  );
  useEffect(() => {
    if (data?.news?.length > 0) {
      const filteredArticle = data?.news?.find((article) => article?.id === id);
      setNewsArticle(filteredArticle);
    }
  }, [data, id]);

  if (error || data?.news?.length === 0) return <ErrorPage />;

  if (loading) return <ShimmerUI />;

  if (newsArticle === undefined)
    return (
      <div className="w-full max-w-screen-xl flex justify-center items-center mt-10 py-4 mx-auto">
        <div className="w-full flex flex-col items-center gap-6">
          <p className="font-bold text-4xl p-4">
            Sorry the article you are looking for is not available
          </p>
        </div>
      </div>
    );

  const {
    title: articleTitle,
    description,
    image,
    published,
    author,
  } = newsArticle;
  const { formattedDate, relativeTime } = dateFormatting(published);
  const [firstName, lastName] = author?.split(" ") || ["Unknown", "Author"];

  return (
    <div className="w-full max-w-screen-xl flex justify-center items-center mt-10 py-4 mx-auto">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-[65%] flex flex-col text-center gap-8">
          <h1 className="text-4xl font-bold">{articleTitle}</h1>
          <p className="text-lg font-bold">
            {formattedDate} -{" "}
            <span className="text-md font-normal text-[#3e3e3f]">
              {relativeTime}
            </span>
          </p>
        </div>
        <div className="w-[70%] flex flex-col gap-8 mt-6">
          <img
            src={image?.length > 10 ? image : NEWS_IMAGES[category]}
            alt=""
            className="w-full object-cover"
          />
          <p className="font-normal text-lg leading-8">{description}</p>
          <p className="font-normal text-lg leading-8">{description}</p>
          <p className="font-normal text-lg leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="font-normal text-lg leading-8">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
        <div className="w-[70%] h-px my-6 bg-black"></div>
        <div className="w-[30%] flex flex-col items-center gap-2">
          <div className="flex justify-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <div className="flex flex-col justify-center">
              <p className="font-bold text-2xl">{firstName}</p>
              <p className="font-bold text-2xl"> {lastName}</p>
            </div>
          </div>
          <p className="text-sm leading-8 text-center py-2">{description}</p>
          <p className="text-lg font-bold text-center py-2">
            Connect with Author
          </p>
          <div className="flex gap-6 text-xl py-2">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <NewsCategory category={params?.category} />
      </div>
    </div>
  );
};

export default SingleBlog;
