import React from 'react'
import { sidebar_img } from '../app/assets'
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {
    return (
        <div>
            {/* <!-- component --> */}
            <div
                id="view"
                class="h-full w-screen flex flex-row"
                x-data="{ sidenav: true }"
            >
                <div
                    id="sidebar"
                    class="bg-white h-full md:block shadow-xl px-3 w-30 md:w-72 overflow-x-hidden transition-transform duration-300 ease-in-out rounded-ee-md"
                    x-show="sidenav"
                >
                    <div class="py-5 px-1">

                        <div id="menu" class="flex flex-col gap-2">
                            <Link
                                href=""
                                class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#FF578E] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                            >

                                <span class="">My Preferences</span>
                            </Link>
                            
                            <Image src={sidebar_img} />
                        </div>

                    </div>
                </div>

            </div >

        </div >
    )
}

export default SideBar