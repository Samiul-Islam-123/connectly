"use client";
import PendingRequest from "@/components/PendingRequest";
import ProfileSideBar from "@/components/ProfileSideBar";
import SentRequest from "@/components/SentRequest";
import { RightNav } from "@/components";
import { Img, Pic, cover_profile } from "../assets";
import Link from "next/link";
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";

const Profile = () => {
  const [request, setRequest] = useState(false);
  const [activeTab, setActiveTab] = useState();

  useLayoutEffect(() => {
    setActiveTab(request ? "pendingRequests" : "followers");
  }, [request]);

  return (
    <>
      {/* <div className="relative flex flex-col">
        <div className="flex">
          <div className="">
            <ProfileSideBar setRequest={setRequest} request={request} />
          </div>
          <div className="w-full flex flex-col gap-5">
            <Navbar />
            
          </div>
        </div>

      </div> */}

      <div className="grid-container relative">
        {/* Image */}
        <div className="px-5 py-5 flex items-center gap-5 story-card relative">
          <div className="bg-white rounded-2xl">
            <Image src={cover_profile} />
            <div className="relative left-5 bottom-10 flex items-center">
              <Image src={Pic} className="w-[10rem] h-[10rem] " />

              <div className="flex items-center justify-between px-8 w-full">
                <h1 className="">Alexandro Vargas</h1>

                <div className="flex flex-col gap-1 mt-8">
                  <h3>Post</h3>
                  <p>55</p>
                </div>
                <div className="flex flex-col gap-1 mt-8">
                  <h3>Friends</h3>
                  <p>12k</p>
                </div>
                <div className="flex flex-col gap-1 mt-8">
                  <h3>Followers</h3>
                  <p>57k</p>
                </div>

              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-2">
              <Link href={'/profile/timeline'} className="font-semibold hover:text-[#F45044] text-[#F45044] border-b-[1px] border-[#F45044]">TimeLine</Link>
              <Link href={'/profile/about'} className="font-medium hover:text-[#F45044] focus:font-semibold focus:text-[#F45044]">About</Link>
              <Link href={'/profile/media'} className="font-medium hover:text-[#F45044] focus:font-semibold focus:text-[#F45044]">Media</Link>
            </div>

          </div>

        </div>

        <div className="sidebar-left">
          <div
            id="view"
            className="h-full flex flex-row"
            x-data="{ sidenav: true }"
          >
            <div
              id="sidebar"
              className="bg-white h-96 md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-ee-md"
              x-show="sidenav"
            >
              <div className="py-5 px-1">
                <div id="menu" className="flex flex-col gap-2 ">
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
            <div className="w-[44rem] h-full bg-white h-full rounded-lg px-4 py-2 flex items-center justify-between">

            </div>

            {/* Images */}
            <div className="py-3">

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
