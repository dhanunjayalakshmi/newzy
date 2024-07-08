import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full flex justify-center bg-black text-white">
      <div className="w-full max-w-screen-xl flex flex-col justify-center py-4 mx-auto">
        <div className="flex items-start justify-between py-10 gap-56">
          <div className="w-[25%] flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Newzy</h2>
            <p className="text-sm font-normal leading-10">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="w-[50%] flex grow justify-center gap-24 leading-10">
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">World</h4>
              <ul className="text-xs font-normal leading-10">
                <li>Politics</li>
                <li>Health</li>
                <li>Business</li>
                <li>Tech</li>
                <li>Entertainment</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Tech</h4>
              <ul className="text-xs font-normal leading-10">
                <li>Siance</li>
                <li>Magazine</li>
                <li>Start Up</li>
                <li>Crypto</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Life</h4>
              <ul className="text-xs font-normal leading-10">
                <li>Food</li>
                <li>Style</li>
                <li>Sport</li>
                <li>Movie</li>
                <li>Music</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Magezine</h4>
              <ul className="text-xs font-normal leading-10">
                <li>Fashion</li>
                <li>Blogger</li>
                <li>People</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h4 className="text-md font-semibold">Other</h4>
              <ul className="text-xs font-normal leading-10">
                <li>About</li>
                <li>Contact Us</li>
                <li>Terms&Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-px bg-white"></div>
          <div className="flex justify-between pt-8 pb-4">
            <p className="text-sm">Copyright © All Rights Reserved</p>
            <div className="flex gap-6 text-xl">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
