"use client";
import { Navbar } from "@/components";
import PendingRequest from "@/components/PendingRequest";
import ProfileSideBar from "@/components/ProfileSideBar";
import SentRequest from "@/components/SentRequest";
import React, { useLayoutEffect, useState } from "react";
import './profile.css'
import { Pic, cover_profile } from "../assets";
import Image from "next/image";

const Profile = () => {
  const [request, setRequest] = useState(false);
  const [activeTab, setActiveTab] = useState();

  useLayoutEffect(() => {
    setActiveTab(request ? "pendingRequests" : "followers");
  }, [request]);

  return (
    <>
      <div className="relative flex flex-col">
        <div className="flex">
          <div className="">
            <ProfileSideBar setRequest={setRequest} request={request} />
          </div>
          <div className="w-full flex flex-col gap-5">
            <Navbar />
            <div className="bg-white w-[60rem] h-full mx-auto rounded-2xl">
              {/* <div className="">
                <Image src={cover_profile} />
                <div className="relative left-5 bottom-10 bg-black">
                  <Image src={Pic} className="w-[10rem] h-[10rem] " />
                </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>

      {/* <div class="grid-container">
        <div class="sidebar"><ProfileSideBar setRequest={setRequest} request={request} /></div>
        <div class="navbar"><Navbar /></div>
        <div class="create-post"><CreatePost /></div>
      </div> */}
    </>
  );
};

export default Profile;
