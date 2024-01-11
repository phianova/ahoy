'use client';
import React from 'react'; 
import {useState, useEffect} from 'react';
import {ThumbsUp} from 'lucide-react';

const SquawkCard = ({username, profilePic, postText, postImage, likes, user}) => {

    useEffect(() => {
        console.log('profilePic: ', profilePic);
    }, [
        profilePic,
    ])


    return (
        <div className='border border-amber-500 rounded-lg p-3 bg-amber-100 overflow-hidden relative mx-auto w-full'>
            <div className='top-3 left-3 pt-3 pl-3 flex flex-row'>
                {profilePic && <img src={profilePic} alt="Profile Picture" className='w-10 h-10 rounded-full w-10 h-10 mr-2' />}
                <p className='text-lg'><strong>{username}</strong></p>
                </div>
                <div className='p-3'>
                    <p>{postText}</p>
                    <div className='flex justify-center items-center w-full h-full '>
                    <img src={postImage} alt="Post Image" className='w-full h-full rounded-b-lg pt-3 pb-3 object-cover'/>
                    </div>
                    <p>{likes} likeys</p>
                    <div className='border-t-2 border-amber-500 pt-3'>
                    <button className='absolute bottom-2 right-3 bg-amber-200 w-24 h-auto rounded-lg flex flex-row p-2' onClick={() => likes++} >
                    <ThumbsUp className='text-green-500 '/>Like
                    </button> 
                    
                    
                    </div>
                
                </div>
        </div>
    )
}
export default SquawkCard