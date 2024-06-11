"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import Image from "next/image";
import { sidebar_img, Img } from "../app/assets";

const ProfileSideBar = ({ setRequest, request }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="hidden md:w-[20vw] h-screen bg-primary-600 rounded-lg md:flex flex-col justify-between items-center p-5">
        <div>
          <h1 className="font-bold text-xl">CONNECTLY</h1>
        </div>
        <div>
          <ul className="flex items-start flex-col gap-2">
            <button
              className="text-xl font-bold flex items-center gap-2"
              onClick={toggleModal}
            >
              <FaUserEdit />
              Edit Profile
            </button>
          </ul>
        </div>
      </div>

      <div
        id="view"
        className="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          className="bg-white h-full md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-ee-md"
          x-show="sidenav"
        >
          <div className="py-5 px-1">
            <div id="menu" className="flex flex-col gap-2">
              <div className="w-32 h-14 mx-auto">
                <Image src={Img} className="object-cover" alt="Profile" />
              </div>
              <div className="py-5 flex flex-col gap-1">
                <Link
                  href="/"
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <MdOutlineInterests size={22} /> Interest
                </Link>
                <Link
                  href="/"
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <GrGroup size={22} /> Groups
                </Link>
                <Link
                  href="/"
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <LuPartyPopper size={22} /> Party
                </Link>
                <Link
                  href="/"
                  className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2"
                >
                  <LiaUserFriendsSolid size={22} /> Friends
                </Link>
              </div>
              <Image src={sidebar_img} alt="Sidebar Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileSideBar;
