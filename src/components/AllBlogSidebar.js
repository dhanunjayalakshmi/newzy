import React from "react";
import { Link } from "react-router-dom";

const NewsSmallGrid = () => {
  return (
    <div className="w-full flex gap-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GvxD5PPEPafQDfOVb9qBwuhQmwwG-H0hvg&s"
        alt=""
        className="w-[76px] h-[76px] object cover"
      />
      <div className="flex flex-1 flex-col items-start justify-between">
        <h6 className="text-sm font-bold">
          Miami Dolphins won the match and officially qualified for the final
        </h6>
        <div className="flex gap-2 items-center">
          <p className="text-xs font-bold">New York, 22 August 2022</p>
          <p className="text-xs font-normal text-[#88888c]">- 10 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

const AllBlogSidebar = () => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
      <Link to="/singleBlog">
        <NewsSmallGrid />
      </Link>
    </div>
  );
};

export default AllBlogSidebar;
