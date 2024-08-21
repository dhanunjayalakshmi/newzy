import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { deleteUser } from "firebase/auth";
import ToastAlert from "./ToastAlert";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const showAlert = (message, type) => {
    setAlertInfo({ show: true, message, type });
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const firebaseUser = auth?.currentUser;

  const handleDeleteAccount = async () => {
    setShowModal(false);

    if (user) {
      try {
        await deleteUser(firebaseUser);
        showAlert("Account deleted successfully.", "success");
      } catch (error) {
        alert(`Failed to delete account: ${error.message}`);
      }
    } else {
      console.log("No user logged in or session expired");
    }
  };

  useEffect(() => {
    if (alertInfo.show && alertInfo.type === "success") {
      setTimeout(() => {
        localStorage.removeItem("user");
        navigate("/");
      }, 3000);
    }
  }, [alertInfo, navigate]);

  return (
    <div className="w-full flex justify-center mt-20">
      <div className="w-full max-w-screen-xl flex flex-col justify-center items-center py-4 mx-auto">
        <h1 className="font-bold text-4xl py-4 mt-4">User Profile</h1>
        <div className="flex justify-around gap-12 py-4 mt-4">
          <div className="w-40 h-40">
            <img
              src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg"
              alt=""
              className="w-full h-full"
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
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-[#353852] font-bold text-white rounded hover:bg-[#292e67]"
          >
            Delete Account
          </button>
          {showModal && (
            <DeleteConfirmationModal
              onDeleteConfirm={handleDeleteAccount}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
        {alertInfo?.show && (
          <ToastAlert
            message={alertInfo.message}
            type={alertInfo.type}
            onClose={() => setAlertInfo({ ...alertInfo, show: false })}
          />
        )}
      </div>
    </div>
  );
};

export default UserProfile;
