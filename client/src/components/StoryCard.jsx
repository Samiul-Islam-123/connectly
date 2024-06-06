import Image from 'next/image'
import React from 'react'
import { Story, Story2, Story3, Story4, Story5, Story6, profile2, profile3, profile4, profile5, profile6 } from '../app/assets'

import { GoPlus } from "react-icons/go";


const StoryCard = () => {
    return (
        <>
            <div className='w-[9.5rem] h-[14rem] bg-white rounded-xl relative'>
                <div>
                    <Image src={Story} className='h-44' />
                </div>

                <div className='bg-[#FF578E] w-12 h-12 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2'>
                    <GoPlus className='text-white' size={30} />
                </div>

                <p className='absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-sm text-[#656565]'>Create Story</p>
            </div>
            <div className='w-[9.5rem] h-[14rem] bg-white rounded-xl relative'>
                <div>
                    <Image src={Story2} className='h-44' />
                </div>

                <div className='bg-[#FF578E] w-12 h-12 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2'>
                    <Image src={profile2} />
                </div>

                <p className='absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-sm font-medium'>Annette Black</p>
            </div>
            <div className='w-[9.5rem] h-[14rem] bg-white rounded-xl relative'>
                <div>
                    <Image src={Story3} className='h-44' />
                </div>

                <div className='bg-[#FF578E] w-12 h-12 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2'>
                    <Image src={profile3} />
                </div>

                <p className='absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-sm font-medium'>Cody Fisher</p>
            </div>
            <div className='w-[9.5rem] h-[14rem] bg-white rounded-xl relative'>
                <div>
                    <Image src={Story4} className='h-44' />
                </div>

                <div className='bg-[#FF578E] w-12 h-12 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2'>
                    <Image src={profile4} />
                </div>

                <p className='absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-sm font-medium'>Jane Cooper</p>
            </div>
            <div className='w-[9.5rem] h-[14rem] bg-white rounded-xl relative'>
                <div>
                    <Image src={Story5} className='h-44' />
                </div>

                <div className='bg-[#FF578E] w-12 h-12 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2'>
                    <Image src={profile5} />
                </div>

                <p className='absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-sm font-medium'>Jerome Bell</p>
            </div>
            <div className='w-[9.5rem] h-[14rem] bg-white rounded-xl relative'>
                <div>
                    <Image src={Story6} className='h-44' />
                </div>

                <div className='bg-[#FF578E] w-12 h-12 flex items-center justify-center rounded-full absolute left-1/2 top-[65%] -translate-x-[50%] border-2'>
                    <Image src={profile6} />
                </div>

                <p className='absolute left-1/2 top-[88%] -translate-x-[50%] w-full text-center text-sm font-medium'>Darrell Steward</p>
            </div>
        </>
    )
}

export default StoryCard