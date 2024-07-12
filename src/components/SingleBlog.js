import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import mockData from "../utils/mockData.json";
import NewsCategory from "./NewsCategory";
import useScrollToTop from "../hooks/useScrollToTop";

const SingleBlog = () => {
  useScrollToTop();
  const newsCategory = mockData?.data[0];

  return (
    <div className="w-full max-w-screen-xl flex justify-center items-center mt-10 py-4 mx-auto">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="w-[48%] flex flex-col text-center gap-8">
          <h1 className="text-4xl font-bold">
            Miami Dolphins won the match and officially qualified for the final
          </h1>
          <p className="text-lg font-bold">
            New York, 22 Agust 2022 -{" "}
            <span className="text-md font-normal text-[#3e3e3f]">
              10 minutes ago
            </span>
          </p>
        </div>
        <div className="w-[70%] flex flex-col gap-8 mt-6">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/133/690/372/2011-cup-team-india-2011-world-cup-sports-other-hd-art-wallpaper-thumb.jpg"
            alt=""
            className="w-full object-cover"
          />
          <h2 className="text-4xl font-bold py-4">
            Officially Qualified for the Final
          </h2>
          <p className="font-normal text-md leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="font-normal text-md leading-8">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className="font-normal text-md leading-8">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
          <h2 className="text-4xl font-bold py-4">
            Best regards from Miami Dolphins
          </h2>
          <p className="font-normal text-md leading-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="font-normal text-md leading-8">
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
              <p className="font-bold text-2xl">Hermione</p>
              <p className="font-bold text-2xl"> Granger</p>
            </div>
          </div>
          <p className="text-sm leading-8 text-center py-2">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s.
          </p>
          <p className="text-lg font-bold text-center py-2">
            Connect with Author
          </p>
          <div className="flex gap-6 text-xl py-2">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
        <NewsCategory categoryInfo={newsCategory} />
      </div>
    </div>
  );
};

export default SingleBlog;
