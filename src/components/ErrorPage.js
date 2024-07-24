import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold mb-4">Error</h1>
      <p className="text-xl mb-8">
        Sorry, the page you are looking for does not exist
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#353852] font-bold text-white rounded hover:bg-[#292e67]"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
