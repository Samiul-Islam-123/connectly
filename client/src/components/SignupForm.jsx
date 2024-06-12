"use client";
import axios from "axios";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
const SignupForm = ({ setIsAnimated, isAnimated }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const router = useRouter(); // Initialize the useRouter hook

  const submitHandler = async (e) => {
    e.preventDefault();
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    if (passwordValue === confirmPasswordValue) {
      const requestData = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
      };

      try {
        const response = await axios.post(
          `${apiURL}/api/auth/register`,
          requestData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        alert(response.data.message);

        // Redirect to OTP page
        router.push("/otpVerification");
      } catch (error) {
        console.error("Error response:", error.response);
        alert(`Error: ${error.response.data.message}`);
      }
    } else {
      alert("Please confirm your password");
    }
  };

  return (
    <div className="selection:bg-primary selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-primary-600">
                Create account
              </h1>
              <Button className="my-6   uppercase rounded-lg  text-secondary font-semibold text-center flex items-center justify-center gap-2 w-full ">
                <FaGoogle className="text-2xl" /> Sign In With Google
              </Button>
              <div className="w-full text-primary-600 flex flex-row before:flex-1 before:border before:border-primary-500 before:m-auto after:flex-1 after:border after:border-primary-500 after:m-auto before:mr-3 after:ml-3">
                OR CONTINUE WITH
              </div>
              <form className="mt-8" onSubmit={submitHandler}>
                <div className="relative">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-primary text-primary placeholder-transparent focus:outline-none focus:border-primary-600"
                    placeholder="Full Name"
                    required
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-primary text-primary placeholder-transparent focus:outline-none focus:border-primary-600"
                    placeholder="example@gmail.com"
                    required
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-primary text-primary placeholder-transparent focus:outline-none focus:border-primary-600"
                    placeholder="Password"
                    required
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    id="re-password"
                    type="password"
                    name="re-enter password"
                    className="peer h-10 w-full border-b-2 border-primary text-primary placeholder-transparent focus:outline-none focus:border-primary-600"
                    placeholder="Re-Enter Password"
                    required
                    value={confirmPasswordValue}
                    onChange={(e) => setConfirmPasswordValue(e.target.value)}
                  />
                  <label
                    htmlFor="re-password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Re-Enter Password
                  </label>
                </div>

                <Button
                  type="submit"
                  className="mt-10 uppercase  bg-primary font-semibold text-center  w-full"
                >
                  Sign Up
                </Button>
              </form>
              <div className="flex md:hidden gap-2 items-center justify-center my-4">
                <h1 className="text-primary">Already have an Account?</h1>
                <Button
                  className=" transition-transform ease-in"
                  onClick={(e) => {
                    setIsAnimated(!isAnimated);
                  }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
