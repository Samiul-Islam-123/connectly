"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const OtpVerification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = "fardeenahamed2001@gmail.com";
    const otpCode = otp.join("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify-otp`,
        { email, otp: otpCode }
      );
      if (response.status === 200) {
        router.push("/editProfile");
      }
    } catch (error) {
      setError(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary-300 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="text-xl font-bold text-primary">CONNECTLY</h1>
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>
                We have sent a code to your email fardeenahamed2001@gmail.com
              </p>
            </div>
          </div>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.map((data, index) => (
                    <div key={index} className="w-16 h-16">
                      <input
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                        type="text"
                        maxLength="1"
                        value={data}
                        onChange={(e) => handleChange(e.target, index)}
                        onFocus={(e) => e.target.select()}
                      />
                    </div>
                  ))}
                </div>

                <div class="flex flex-col space-y-5">
                  <div>
                    <button class="flex text-black hover:text-white flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-primary-700 border-none  hover:bg-black bg-white transition-all duration-200 ease-in-out text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't recieve code?</p>{" "}
                    <Link
                      class="flex flex-row items-center text-primary-600"
                      href="#"
                    >
                      Resend
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
