"use client";
import AvatarComponent from "@/components/AvatarComponent";
import LeftNavBar from "@/components/LeftNavBar";
import RightNavBar from "@/components/RightNavBar";
import { Button } from "@/components/ui/button";
import React from "react";

const Notification = () => {
  return (
    <div className="flex justify-between p-5 rounded-lg">
      <div>
        <LeftNavBar />
      </div>
      <div className="bg-secondary w-[50vw] h-screen rounded-xl p-5 overflow-y-auto">
        <h1 className="text-xl font-semibold">All Notifications</h1>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-2">
            <div>
              <AvatarComponent
                imgSrc={"https://github.com/shadcn.png"}
                name={"fardeen"}
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">New friend Request</h2>
              <p>Add Fardeen as your friend</p>
              <p className="text-primary/50">2 Days ago</p>
              <div className="flex items-center gap-2">
                <Button>Accept Request</Button>
                <Button varient="outline">Decline</Button>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div>
              <AvatarComponent
                imgSrc={"https://github.com/shadcn.png"}
                name={"fardeen"}
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">Birthday</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, maiores ipsam? Eos itaque odit, aspernatur minus et
                magni provident eius blanditiis non porro necessitatibus
                inventore ad repudiandae repellendus perspiciatis quisquam?
              </p>
              <p className="text-primary/50">2 Days ago</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div>
              <AvatarComponent
                imgSrc={"https://github.com/shadcn.png"}
                name={"fardeen"}
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">New friend Request</h2>
              <p>Add Fardeen as your friend</p>
              <p className="text-primary/50">2 Days ago</p>
              <div className="flex items-center gap-2">
                <Button>Accept Request</Button>
                <Button varient="outline">Decline</Button>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <div>
              <AvatarComponent
                imgSrc={"https://github.com/shadcn.png"}
                name={"fardeen"}
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">New friend Request</h2>
              <p>Add Fardeen as your friend</p>
              <p className="text-primary/50">2 Days ago</p>
              <div className="flex items-center gap-2">
                <Button>Accept Request</Button>
                <Button varient="outline">Decline</Button>
              </div>
            </div>
          </div>{" "}
          <div className="flex items-start gap-2">
            <div>
              <AvatarComponent
                imgSrc={"https://github.com/shadcn.png"}
                name={"fardeen"}
              />
            </div>
            <div>
              <h2 className="text-lg font-medium">Birthday</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, maiores ipsam? Eos itaque odit, aspernatur minus et
                magni provident eius blanditiis non porro necessitatibus
                inventore ad repudiandae repellendus perspiciatis quisquam?
              </p>
              <p className="text-primary/50">2 Days ago</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RightNavBar />
      </div>
    </div>
  );
};

export default Notification;
