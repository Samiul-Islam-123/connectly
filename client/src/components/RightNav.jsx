import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Pic, feed } from '../app/assets'
import { MdOutlineExplore } from 'react-icons/md'
import { IoChatbubbleEllipsesOutline, IoNotificationsOutline } from 'react-icons/io5'

const RightNav = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div
                id="view"
                className="h-full flex flex-row"
                x-data="{ sidenav: true }"
            >
                <div
                    id="sidebar"
                    className="bg-white h-full md:block shadow-xl px-3 w-[14rem] overflow-x-hidden transition-transform duration-300 ease-in-out rounded-lg "
                    x-show="sidenav"
                >
                    <div className="py-3 px-1">

                        <div id="menu" className="flex flex-col gap-2">

                            <div>
                                <Link href={'/profile'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><Image src={Pic} className='w-12 h-12 rounded-full' />
                                    <span>Profile</span></Link>

                            </div>

                            <Link href={'/'} className='font-medium text-white py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><Image src={feed} className='text-black w-5 h-5' /> Feeds</Link>

                            <Link href={'/explore'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><MdOutlineExplore size={22} /> Explore</Link>

                            <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><IoChatbubbleEllipsesOutline size={22} /> Chat</Link>

                            <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><IoNotificationsOutline size={22} /> Notification</Link>

                        </div>

                    </div>
                </div>

            </div >

        </div >
    )
}

export default RightNav