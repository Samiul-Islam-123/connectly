import Link from "next/link";
import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";
import { TiGroup } from "react-icons/ti";
import { FaUserFriends } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import EditProfileModal from "./EditProfileModal";
const ProfileSideBar = ({ setRequest, request }) => {
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

            <li
              className="text-xl font-bold flex items-center gap-2 cursor-pointer"
              onClick={() => setRequest(!request)}
            >
              <TiGroup />
              Requests
            </li>

            <Link href={"#"}>
              <li className="text-xl font-bold flex items-center gap-2">
                <FaUserFriends />
                Friends
              </li>
            </Link>
            <Link href={"#"}>
              <li className="text-xl font-bold flex items-center gap-2">
                <AiFillLike />
                Intrests
              </li>
            </Link>
            <Link href={"#"}>
              <li className="text-xl font-bold flex items-center gap-2">
                <SiEventstore />
                Events
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-800"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-white">
              Enable Location
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default ProfileSideBar;
