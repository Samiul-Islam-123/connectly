"use client";
import React, { useState } from "react";
import { RightNav } from "@/components";
import Image from "next/image";
import { Img, Pic, cover_profile, explore_grid1 } from "../assets";
import { MdEdit } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import ImageExplore from "@/components/ImageExplore";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="grid-container relative">
        {/* Image */}
        <div className="px-5 py-5 flex items-center gap-5 story-card relative">
          <Image src={cover_profile} className="w-full rounded-2xl" />
          <div className="absolute left-1/2 -translate-x-[50%] flex flex-col items-center justify-center gap-3 w-[47rem] h-[11.2rem] rounded-2xl">
            <Image src={Pic} className=" w-20 h-20" />
            <div className="flex items-center gap-2 text-white">
              <p className="text-lg text-white font-medium">Kolkata</p>
              <MdEdit size={22} />
            </div>
          </div>
        </div>

        <div className="sidebar-left">
          <div
            id="view"
            class="h-full flex flex-row"
            x-data="{ sidenav: true }"
          >
            <div
              id="sidebar"
              class="bg-white h-fit md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-ee-md"
              x-show="sidenav"
            >
              <div class="py-5 px-1">
                <div id="menu" class="flex flex-col gap-2 ">
                  <div className="w-32 h-14 mx-auto">
                    <Image src={Img} className="object-cover" alt="" />
                  </div>

                  <div className="py-5 flex flex-col gap-1">
                    <Link
                      href={"/"}
                      className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                    >
                      <MdOutlineInterests size={22} /> Interest
                    </Link>

                    <Link
                      href={"/"}
                      className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                    >
                      <GrGroup size={22} /> Groups
                    </Link>

                    <Link
                      href={"/"}
                      className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                    >
                      <LuPartyPopper size={22} /> Party
                    </Link>

                    <Link
                      href={"/"}
                      className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                    >
                      <LiaUserFriendsSolid size={22} /> Friends
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-right py-2">
          <RightNav />
        </div>

        <div className="feed-section mx-5">
          <div className="flex items-center justify-center flex-col px-6 gap-5">
            {/* Filter */}
            <div className="w-[44rem] bg-white h-full rounded-lg px-4 py-2 flex items-center justify-between">
              <div className=" flex items-center bg-[#FFEDED] px-2 py-1 rounded-md">
                <CiSearch size={22} />
                <input
                  type="text"
                  placeholder="Search for vibe, friend or interest..."
                  className="px-3 py-1 w-[18rem] bg-transparent focus:outline-none placeholder:text-gray-600"
                />
              </div>

              <div className="flex items-center relative">
                <div className="text-gray-600 font-medium mr-4">
                  Looking for
                </div>
                <button
                  onClick={handleToggle}
                  className="bg-pink-100 py-2 px-4 rounded-md flex items-center gap-2"
                >
                  <span className="text-gray-600">Vibe Together</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="absolute top-10 left-20 rounded-md shadow-lg bg-white w-48 z-50">
                    <ul className="py-2 text-sm">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          👫 Friends
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          🎶 Vibe Together
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          ❤️ Date
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link
                          href={"/explore"}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          💼 Work
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Images */}
            <div className="py-3">
              <ImageExplore />

              <div className="flex items-center justify-center py-3 text-white">
                <button className="px-5 py-2 bg-[#F45044] rounded-md">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
