import React from 'react'
import { Pic, bell, feed } from '../app/assets'
import { MdOutlineExplore } from 'react-icons/md'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5'
import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className='px-4 py-2 flex items-center justify-between bg-white'>

                <Link href={'/'} className='font-medium text-white py-2 px-2 hover:text-[#FF578E] hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><Image src={feed} className='text-black w-5 h-5' /> Feeds</Link>

                <Link href={'/'} className='font-medium text-gray-700 py-2 px-2 hover:text-[#FF578E] hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><MdOutlineExplore size={22} /> Explore</Link>

                <Link href={'/chat'} className='font-medium text-gray-700 py-2 px-2 hover:text-[#FF578E] hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><IoChatbubbleEllipsesOutline size={22} /> Chat</Link>

                <div className='flex items-center justify-center gap-3 text-black'>
                    {/* sideProfile links */}
                    <Image width={21} src={bell} />

                    {/* Profile */}
                    <Link href={'/profile'} className='font-medium text-gray-700 py-2 px-2 hover:text-[#FF578E] hover:text-base rounded-md transition duration-150 ease-in-out hover:no-underline flex items-center gap-2'><Image src={Pic} className='w-12 h-12 rounded-full' />
                        <span>Profile</span></Link>

                </div>
                
            </nav>
        </>
    )
}

export default Navbar