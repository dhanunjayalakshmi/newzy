import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NewsCategory from "./NewsCategory";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { checkValidData } from "../utils/validate";

const Register = () => {
  const [errorMesg, setErrorMesg] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const confirmPassword = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    if (password?.current?.value !== confirmPassword?.current?.value) {
      setErrorMesg("Passwords do not match");
      return;
    }
    const validationResult = checkValidData(
      email?.current?.value,
      password?.current?.value
    );

    setErrorMesg(validationResult);
    console.log(validationResult);

    if (validationResult) return;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      );
      const user = userCredential?.user;

      await updateProfile(user, {
        displayName: name?.current?.value,
      });

      const updatedUser = {
        ...user,
        displayName: name?.current?.value,
      };

      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: updatedUser?.uid,
          email: updatedUser?.email,
          displayName: updatedUser?.displayName,
        })
      );

      console.log("User registered and profile updated:", user?.displayName);

      if (email.current) email.current.value = "";
      if (password.current) password.current.value = "";

      navigate("/");
    } catch (error) {
      console.log(error?.message);
      setErrorMesg(error?.message);
    }
  };

  return (
    <div className="w-full max-w-screen-xl flex justify-center items-center mt-6 mx-auto ">
      <div className="flex flex-col gap-12 items-center">
        <div className="w-[48%] flex flex-col items-center gap-6">
          <h1 className="font-semibold text-5xl">
            Let's join as Newzy friends
          </h1>
          <p className=" leading-8 w-[90%] text-lg text-center text-[#888887]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown
          </p>
        </div>
        <div className="w-[45%] flex flex-col items-center">
          <div className="w-[90%] flex flex-col items-center p-8 border border-black gap-8">
            <p className="text-xl font-semibold text-red-500 px-4">
              {errorMesg}
            </p>
            <h2 className="text-4xl font-bold">Newzy</h2>
            <form
              onSubmit={handleButtonClick}
              className="w-[90%] flex flex-col gap-6"
            >
              <label htmlFor="email" className="flex flex-col gap-2">
                Name
                <input
                  ref={name}
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your Name"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
              <label htmlFor="email" className="flex flex-col gap-2">
                Email
                <input
                  ref={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
              <label htmlFor="password" className="flex flex-col gap-2">
                Password
                <input
                  ref={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>
              <label htmlFor="confirmPassword" className="flex flex-col gap-2">
                Confirm Password
                <input
                  ref={confirmPassword}
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter your password"
                  className="w-full p-4 border border-black rounded-lg outline-none"
                />
              </label>

              <button className="bg-[#2b2d42] p-4 text-white text-lg font-medium rounded-lg">
                Register
              </button>
            </form>
            <p className="text-sm">
              Do you already have an account??{" "}
              <Link to="/login" className="text-lg font-bold">
                Login
              </Link>{" "}
              Now
            </p>
          </div>
        </div>
        <NewsCategory category="general" />
      </div>
    </div>
  );
};

export default Register;
