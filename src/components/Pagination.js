import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 font-bold text-[#2b2d46] ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {pageNumbers?.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-8 py-2 border rounded ${
            number === currentPage
              ? "bg-[#2b2d46] text-white"
              : "text-gray-800 hover:bg-gray-200"
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        // className={`px-4 py-2 text-gray-800 border rounded ${
        className={`px-4 py-2 font-bold text-[#2b2d46] ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default Pagination;
