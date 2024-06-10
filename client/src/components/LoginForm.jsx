import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginForm = ({ setIsAnimated, isAnimated }) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    const apiURL = process.env.NEXT_PUBLIC_API_URL;

    const requestData = {
      email: emailValue,
      password: passwordValue,
    };

    try {
      const response = await fetch(`${apiURL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      if (responseData.token) {
        Cookies.set("token", responseData.token, {
          expires: 29,
        });
        localStorage.setItem("token", responseData.token);
        router.push("/");
      } else {
        alert(responseData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error response:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="selection:bg-primary-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-primary-600">
                Welcome back!
              </h1>
              <button className="my-6 p-4 uppercase rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-semibold text-center flex items-center justify-center gap-2 w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-primary-500 focus:ring-opacity-80 cursor-pointer">
                <FaGoogle className="text-2xl" /> Sign In With Google
              </button>
              <div className="w-full text-primary-600 flex flex-row before:flex-1 before:border before:border-primary-500 before:m-auto after:flex-1 after:border after:border-primary-500 after:m-auto before:mr-3 after:ml-3">
                OR CONTINUE WITH
              </div>
              <form className="mt-8" onSubmit={submitHandler}>
                <div className="relative">
                  <input
                    id="signin-email"
                    name="email"
                    type="email"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary-600"
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
                    id="signin-password"
                    type="password"
                    name="password"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-primary-600"
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

                <button
                  type="submit"
                  className="mt-10 px-8 py-4 uppercase rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-primary-500 focus:ring-opacity-80 cursor-pointer"
                >
                  {loading ? "Signing You In..." : "Sign In"}
                </button>
              </form>
              <Link
                href="#"
                className="mt-4 block text-sm text-center font-medium text-primary-600 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                Forgot your password?
              </Link>
              <div className="flex md:hidden gap-2 items-center justify-center my-4">
                <button
                  type="button"
                  className="text-primary-500 transition-transform ease-in"
                  onClick={() => {
                    setIsAnimated(!isAnimated);
                  }}
                >
                  Don't have an Account? Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
