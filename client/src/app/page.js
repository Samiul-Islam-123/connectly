import "./globals.css";
import { Navbar, Post, SideBar, StoryCard, CreatePost } from "../components";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="angry-grid bg-[#EDEDED] text-black">
        <div id="item-0">
          <div className="p-5 flex items-center gap-5 justify-end">
            <StoryCard />
          </div>
        </div>
        <div id="item-1">
          <SideBar />
        </div>
        <div id="item-2" className="relative top-48 left-16">
          <div className="flex items-center justify-center flex-col gap-5 ">
            <CreatePost />
            <Post />
          </div>
        </div>
      </div>

    </>
  );
}
