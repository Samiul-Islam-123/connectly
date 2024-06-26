"use client";

import BlockList from "@/components/BlockList";
import EditProfileModal from "@/components/EditProfileModal";
import LeftNavBar from "@/components/LeftNavBar";
import NotificationEdit from "@/components/NotificationEdit";
import RightNavBar from "@/components/RightNavBar";
import Security from "@/components/Security";
import React, { useState } from "react";

const EditProfile = () => {
  const [activeTab, setActiveTab] = useState("edit");
  return (
    <div className="flex justify-between p-5 rounded-lg">
      <div>
        <LeftNavBar />
      </div>
      <div className="flex flex-col h-screen w-[50vw] mx-auto bg-secondary rounded-xl ">
        <div className="w-full h-[10vh] p-5">
          <h1 className="text-2xl font-medium">Account Settings</h1>
        </div>
        <div className="w-full h-[10vh] p-5 ">
          <ul className="flex w-full border-b border-b-black gap-5">
            <li
              className={`cursor-pointer ${
                activeTab === "edit"
                  ? "text-red-500 font-semibold border-b border-b-red-500"
                  : ""
              }`}
              onClick={() => setActiveTab("edit")}
            >
              Edit Profile
            </li>
            <li
              className={`cursor-pointer  ${
                activeTab === "security"
                  ? "text-red-500 font-semibold border-b border-b-red-500"
                  : ""
              }`}
              onClick={() => setActiveTab("security")}
            >
              Security
            </li>
            <li
              className={`cursor-pointer  ${
                activeTab === "notification"
                  ? "text-red-500 font-semibold border-b border-b-red-500"
                  : ""
              }`}
              onClick={() => setActiveTab("notification")}
            >
              Notification
            </li>
            <li
              className={`cursor-pointer  ${
                activeTab === "blocklist"
                  ? "text-red-500 font-semibold border-b border-b-red-500"
                  : ""
              }`}
              onClick={() => setActiveTab("blocklist")}
            >
              Blocklist
            </li>
          </ul>
        </div>
        <div className="h-[80vh] overflow-y-auto">
          {activeTab === "edit" && <EditProfileModal />}
          {activeTab === "security" && <Security />}
          {activeTab === "notification" && <NotificationEdit />}
          {activeTab === "blocklist" && <BlockList />}
        </div>
      </div>
      <div>
        <RightNavBar />
      </div>
    </div>
  );
};

export default EditProfile;
