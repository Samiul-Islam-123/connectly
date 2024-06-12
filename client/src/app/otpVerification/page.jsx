import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const OtpVerification = () => {
  return (
    <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-primary-300 py-12">
      <div class="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div class="flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="text-xl font-bold text-primary">CONNECTLY</h1>
            <div class="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div class="flex flex-row text-sm font-medium text-gray-400">
              <p>
                We have sent a code to your email fardeenahamed2001@gmail.com
              </p>
            </div>
          </div>

          <div>
            <form action="" method="post">
              <div class="flex flex-col space-y-16">
                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs space-x-2">
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                    />
                  </div>
                  <div class="w-16 h-16 ">
                    <input
                      class="w-full h-full flex flex-col items-center justify-center text-center px-3 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-primary-700"
                      type="text"
                      name=""
                      id=""
                      maxLength={1}
                    />
                  </div>
                </div>

                <div class="flex flex-col space-y-5">
                  <div>
                    <Button class="flex flex-row items-center mx-auto justify-center text-center w-full border rounded-xl outline-none py-5  border-none  text-sm shadow-sm">
                      Verify Account
                    </Button>
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
