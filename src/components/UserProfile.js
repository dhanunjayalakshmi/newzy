import React from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-full max-w-screen-xl flex flex-col justify-center items-center py-4 mx-auto">
        <h1 className="font-bold text-4xl py-4 mt-4">User Profile</h1>
        <div className="flex justify-around gap-12 py-4 mt-4">
          <div className="w-40 h-40">
            <img
              src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-6 text-xl font-bold">
            <p>Name : {user?.displayName}</p>
            <p>Email : {user?.email}</p>
          </div>
        </div>
        <div className="flex justify-around gap-12 mt-8">
          <Link to="/updatePassword">
            <button className="px-6 py-3 bg-[#353852] font-bold text-white rounded hover:bg-[#292e67]">
              Update Password
            </button>
          </Link>
          <button className="px-6 py-3 bg-[#353852] font-bold text-white rounded hover:bg-[#292e67]">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
