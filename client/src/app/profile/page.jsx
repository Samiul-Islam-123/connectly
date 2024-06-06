"use client";
import PendingRequest from "@/components/PendingRequest";
import ProfileSideBar from "@/components/ProfileSideBar";
import SentRequest from "@/components/SentRequest";
import React, { useEffect, useLayoutEffect, useState } from "react";

const Profile = () => {
  const [request, setRequest] = useState(false);
  const [activeTab, setActiveTab] = useState();

  async function fetchProfileData(){
    console.log("Fetching profileData...")
  }

  useEffect(()=>{
    fetchProfileData();
  },[])

  useLayoutEffect(() => {
    setActiveTab(request ? "pendingRequests" : "followers");
  }, [request]);
  return (
    <div className="flex">
      <ProfileSideBar setRequest={setRequest} request={request} />
      <div className="h-screen w-full bg-gray-200 overflow-y-auto">
        <div className=" w-full    bg-white  shadow-lg    transform   duration-200 easy-in-out">
          <div className=" h-32 overflow-hidden">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1632377082368-66155ad702d8?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="flex justify-center px-5  -mt-12">
            <img
              className="h-32 w-32 bg-white p-2 rounded-full   "
              src="https://images.unsplash.com/photo-1715615751025-e7ebe7f47eea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className=" ">
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">
                Fardeen Ahamed
              </h2>
              <a
                className="text-gray-400 mt-2 hover:text-blue-500"
                href="#"
                target="BLANK()"
              >
                @fardeen_19
              </a>
              <p className="mt-2 text-gray-500 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </div>
            <hr className="mt-6" />
            {!request && (
              <div className="flex  bg-gray-50 text-black">
                <div
                  className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setActiveTab("posts")}
                >
                  <p>
                    <span className="font-semibold">10</span> Posts
                  </p>
                </div>
                <div className="border"></div>
                <div
                  className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setActiveTab("followers")}
                >
                  <p>
                    <span className="font-semibold">2.5 k</span> Followers
                  </p>
                </div>
                <div className="border"></div>
                <div
                  className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={() => setActiveTab("following")}
                >
                  <p>
                    {" "}
                    <span className="font-semibold">2.0 k </span> Following
                  </p>
                </div>
              </div>
            )}
            {request && (
              <div className="flex  bg-gray-50 text-black">
                <div
                  className={`text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer ${
                    activeTab === "pendingRequests" &&
                    "border-b-2 border-b-black"
                  }`}
                  onClick={() => setActiveTab("pendingRequests")}
                >
                  <p>
                    <span className="font-semibold">15</span> Pending Requests
                  </p>
                </div>
                <div className="border"></div>
                <div
                  className={`text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer ${
                    activeTab === "sentRequests" && "border-b-2 border-b-black"
                  }`}
                  onClick={() => setActiveTab("sentRequests")}
                >
                  <p>
                    <span className="font-semibold">2</span> Sent Requests
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        {activeTab === "followers" && <div>Followers</div>}
        {activeTab === "following" && <div>Following</div>}
        {activeTab === "posts" && <div>Posts</div>}
        {activeTab === "pendingRequests" && (
          <div className="w-2/3 mx-auto h-auto">
            <PendingRequest />
          </div>
        )}
        {activeTab === "sentRequests" && (
          <div className="w-2/3 mx-auto h-auto">
            <SentRequest />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
