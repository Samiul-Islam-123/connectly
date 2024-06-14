import { Story, comment, heart, post, post_img, share } from '@/app/assets'
import Image from 'next/image'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'

const ImagePost = ({ like, newCommentText, showPopup, comments, handleLike, handleCommentClick, handleSaveComment, setNewCommentText }) => {
    return (
        <div className='bg-white w-[700px] h-auto rounded-xl p-5'>
            <div className="head flex gap-3">
                <div>
                    <Image className='w-14 h-14' src={post} alt='' />
                </div>

                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col '>
                        <h1 className='font-medium'>Alexandro Vargas</h1>
                        <p className='text-xs text-[#656565]'>2h Ago</p>
                    </div>

                    <BsThreeDotsVertical size={22} />
                </div>
            </div>

            <div className='my-3 flex flex-col gap-2'>
                <div>
                    <p className='text-[#656565]'>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
                <div>
                    <Image src={post_img} alt='' />
                </div>
            </div>

            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <p className='text-[#656565]'>{like} likes</p>
                    <p className='text-[#656565]'>{comments.length} comments</p>
                </div>

                <p className='text-[#656565]text-xs'>2k share</p>
            </div>

            <hr className='my-2' />

            <div className='flex justify-between items-center'>
                <div className='flex gap-5 items-center'>
                    <p onClick={handleLike} className='flex items-center gap-2'><Image width={22} src={heart} /> Like</p>

                    <p onClick={handleCommentClick} className='flex items-center gap-2'><Image width={22} src={comment} /> Comment</p>
                </div>

                <p className='flex items-center gap-2'><Image width={22} src={share} /> Share</p>
            </div>

            {showPopup && (
                <div onClick={handleCommentClick}
                    className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="bg-white rounded-lg p-4 w-1/2 max-w-md mx-auto"
                        aria-label="Popup content"
                    >
                        <div className='flex items-center justify-between'>
                            <h2 className="text-lg font-bold">Comments</h2>
                            <button

                                onClick={handleCommentClick}
                            >
                                <RxCross1 size={22} />
                            </button>
                        </div>

                        <ul className="mt-4">
                            {comments.map((comment, index) => (
                                <li key={index} className="border border-gray-300 rounded-md p-2 mb-2">
                                    <p className="text-gray-700">{comment.text}</p>
                                    <p className="text-gray-500 text-sm">{new Date(comment.timestamp).toLocaleString()}</p>
                                </li>
                            ))}
                        </ul>

                    </div>

                </div>
            )}

            <hr className='my-2' />

            <div className='flex items-center gap-3'>
                <div>
                    <Image src={Story} className='rounded-full w-12 h-12' />
                </div>
                <div className='w-full'>
                    <form onSubmit={handleSaveComment}>
                        <input type="text" value={newCommentText} onChange={(e) => setNewCommentText(e.target.value)} placeholder="Write a Comment..." className='bg-[#FFEDED] rounded-xl w-full px-4 py-3' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ImagePost