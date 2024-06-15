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
import { Img, sidebar_img } from "../app/assets"; // Ensure you have the correct imports for your images

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
            <Link href={"/"} className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2">
              <MdOutlineInterests size={22} /> Interest
            </Link>
            <Link href={"/"} className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2">
              <GrGroup size={22} /> Groups
            </Link>
            <Link href={"/"} className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2">
              <LuPartyPopper size={22} /> Party
            </Link>
            <Link href={"/"} className="font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2">
              <LiaUserFriendsSolid size={22} /> Friends
            </Link>
          </ul>
        </div>
        <div className="flex gap-5 flex-col">
          <div>
            <div className="bg-[#F45044] text-white px-5 py-3">
              <p className="w-32">How to get more views:</p>
            </div>
            <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
              <input type="checkbox" className="w-7 h-7 border-0 text-red-600" />
              <div className="flex flex-col">
                <p>Upload profile picture</p>
                <p className="text-xs">Get found more easily</p>
              </div>
            </div>
            <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
              <input type="checkbox" className="w-7 h-7 border-0" />
              <div className="flex flex-col">
                <p>Confirm email address</p>
                <p className="text-xs">Confirm your account</p>
              </div>
            </div>
            <div className="bg-[#FFEDED] border-b-[1px] px-5 py-3 flex gap-3 items-center">
              <input type="checkbox" className="w-7 h-7 border-0" />
              <div className="flex flex-col">
                <p>Fill in your profile info</p>
                <p className="text-xs">Complete your profile</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eaque necessitatibus suscipit!
            </p>
            <div className="w-full h-64">
              <Image src={sidebar_img} alt="" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl font-bold">Edit Profile</h2>
            <button onClick={toggleModal} className="text-red-500">Close</button>
            {/* Include your modal content here */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSideBar;
