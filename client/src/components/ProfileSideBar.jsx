import Link from "next/link";
import React, { useState } from "react";
// import { FaUserEdit } from "react-icons/fa";
// import { SiEventstore } from "react-icons/si";
// import { TiGroup } from "react-icons/ti";
// import { FaUserFriends } from "react-icons/fa";
// import { AiFillLike } from "react-icons/ai";
// import EditProfileModal from "./EditProfileModal";
import { sidebar_img } from '../app/assets'
import Image from 'next/image'
import { Img } from '../app/assets'
import { MdOutlineInterests } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuPartyPopper } from "react-icons/lu";
import { LiaUserFriendsSolid } from "react-icons/lia";

const ProfileSideBar = ({ setRequest, request }) => {
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };
  return (
    <>

      {/* <!-- SideBar --> */}
      <div
        id="view"
        class="h-full flex flex-row"
        x-data="{ sidenav: true }"
      >
        <div
          id="sidebar"
          class="bg-white h-full md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-ee-md"
          x-show="sidenav"
        >
          <div class="py-5 px-1">

            <div id="menu" class="flex flex-col gap-2 ">
              <div className='w-32 h-14 mx-auto'>
                <Image src={Img} className='object-cover' alt="" />

              </div>

              <div className='py-5 flex flex-col gap-1'>
                <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><MdOutlineInterests size={22} /> Interest</Link>

                <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><GrGroup size={22} /> Groups</Link>

                <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><LuPartyPopper size={22} /> Party</Link>

                <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><LiaUserFriendsSolid size={22} /> Friends</Link>
              </div>

              <Image src={sidebar_img} />
            </div>

          </div>
        </div>

      </div >
    </>
  );
};

export default ProfileSideBar;
