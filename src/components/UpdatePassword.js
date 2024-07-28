import React, { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { updatePassword } from "firebase/auth";

const UpdatePassword = () => {
  const [errorMesg, setErrorMesg] = useState(null);
  const [successMesg, setSuccessMesg] = useState(null);
  const newPassword = useRef(null);
  const confirmNewPassword = useRef(null);
  const user = auth?.currentUser;

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (newPassword?.current?.value !== confirmNewPassword?.current?.value) {
      setErrorMesg("Passwords do not match");
      return;
    }
    try {
      await updatePassword(user, newPassword?.current?.value);

      if (newPassword.current) newPassword.current.value = "";
      if (confirmNewPassword.current) confirmNewPassword.current.value = "";

      setSuccessMesg("Password updated successfully!");
    } catch (error) {
      setErrorMesg(error?.message);
    }
  };

  return (
    <div className="w-full max-w-screen-xl flex justify-center my-20 py-4 mx-auto ">
      <div className="flex justify-center">
        <div className="flex flex-1 flex-col gap-6">
          <h1 className="text-5xl font-semibold py-4">
            Enter your new password to update the old password
          </h1>
          <p className=" leading-10 w-[90%] text-lg text-[#888887]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>
        </div>
        <div className="w-[45%] flex flex-col items-end gap-4">
          <div className="w-[90%] flex flex-col items-center p-8 border border-black gap-8">
            {errorMesg && (
              <p className="text-xl font-semibold text-red-500">{errorMesg}</p>
            )}
            {successMesg && (
              <p className="text-xl font-semibold text-green-500">
                {successMesg}
              </p>
            )}
            <h2 className="text-4xl font-bold">Newzy</h2>
            <form
              onSubmit={handleUpdatePassword}
              className="w-[90%] flex flex-col gap-6"
            >
              <label htmlFor="password" className="flex flex-col gap-2">
                Password
                <input
                  ref={newPassword}
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  placeholder="Enter your password"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                  required
                />
              </label>
              <label htmlFor="confirmPassword" className="flex flex-col gap-2">
                Confirm Password
                <input
                  ref={confirmNewPassword}
                  type="password"
                  name="confirmNewPassword"
                  id="confirmNewPassword"
                  placeholder="Enter your password"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                  required
                />
              </label>
              <div className="flex justify-center"></div>
              <button className="bg-[#2b2d42] p-4 text-white text-lg font-medium rounded-lg">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
