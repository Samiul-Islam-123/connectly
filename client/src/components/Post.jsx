'use client'
import React, { useState } from 'react'
import ImagePost from './ImagePost';
import TextPost from './TextPost';
import DiffPost from './DiffPost';
import Image2Post from './Image2Post';
import AudioPost from './AudioPost';

const Post = () => {

    const [like, setLike] = useState(0);
    const [newCommentText, setNewCommentText] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [comments, setComments] = useState([]);


    const handleLike = () => {
        setLike(like + 1);
    };

    const handleCommentClick = () => {
        setShowPopup(!showPopup);
    };

    const handleSaveComment = (e) => {
        e.preventDefault();
        // this helps to check if the input has any character in it
        if (newCommentText.length > 1) {
            const newComment = { text: newCommentText, timestamp: new Date().toISOString() };
            setComments([...comments, newComment]);
            setNewCommentText("");
            setShowPopup(true);
        }
    };

    return (
        <>
            <div className='flex flex-col gap-5 py-5'>

                {/* Image */}
                <ImagePost like={like} newCommentText={newCommentText} showPopup={showPopup} comments={comments} handleLike={handleLike} handleCommentClick={handleCommentClick} handleSaveComment={handleSaveComment} setNewCommentText={setNewCommentText} />

                {/* Text */}
                <TextPost like={like} newCommentText={newCommentText} showPopup={showPopup} comments={comments} handleLike={handleLike} handleCommentClick={handleCommentClick} handleSaveComment={handleSaveComment} setNewCommentText={setNewCommentText} />

                {/* post */}
                <DiffPost like={like} newCommentText={newCommentText} showPopup={showPopup} comments={comments} handleLike={handleLike} handleCommentClick={handleCommentClick} handleSaveComment={handleSaveComment} setNewCommentText={setNewCommentText} />

                {/* Image2 */}
                <Image2Post like={like} newCommentText={newCommentText} showPopup={showPopup} comments={comments} handleLike={handleLike} handleCommentClick={handleCommentClick} handleSaveComment={handleSaveComment} setNewCommentText={setNewCommentText} />

                {/* Audio */}
                <AudioPost like={like} newCommentText={newCommentText} showPopup={showPopup} comments={comments} handleLike={handleLike} handleCommentClick={handleCommentClick} handleSaveComment={handleSaveComment} setNewCommentText={setNewCommentText} />

            </div>
        </>
    )
}

export default Post