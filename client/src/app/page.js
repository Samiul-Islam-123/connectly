import "./globals.css";
import {
  Navbar,
  Post,
  SideBar,
  StoryCard,
  CreatePost,
  RightNav,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>

      <div className="grid-container relative">
        <div className="p-5 flex items-center gap-5 justify-center story-card">
          <StoryCard />
        </div>
        <div className="sidebar-left">
          <SideBar />
        </div>
        <div className="sidebar-right p-5 fixed top-0 right-0">
          <RightNav />
        </div>
        <div className="feed-section">
          <div className="flex items-center justify-center flex-col ">
            <CreatePost />
            <Post />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
