import Image from 'next/image'
import React from 'react'
import { video, Story, photo, audio, text } from '../app/assets'

const CreatePost = () => {
    return (
        <>
            <div className='w-[700px] h-full bg-white p-4 rounded-xl'>
                <div className='flex items-center gap-3'>
                    <div>
                        <Image src={Story} className='rounded-full w-14 h-14' />
                    </div>
                    <div className='w-full'>
                        <input type="text" placeholder="What's on your mind ?" className='bg-[#FFEDED] rounded-full w-full px-4 py-5' />
                    </div>
                </div>

                <hr className='my-5 text-black' />

                <div className='flex items-center justify-between'>
                    <p className='flex items-center gap-1'><Image width={22} src={video} /> Video</p>
                    <p className='flex items-center gap-1'><Image width={22} src={photo} /> Photo</p>
                    <p className='flex items-center gap-1'><Image width={22} src={audio} /> Audio</p>
                    <p className='flex items-center gap-1'><Image width={22} src={text} /> Text</p>
                </div>
            </div>
        </>
    )
}

export default CreatePost