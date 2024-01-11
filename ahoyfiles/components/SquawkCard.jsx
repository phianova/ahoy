'use client';
import React from 'react'; 
import {useState, useEffect} from 'react';
import {ThumbsUp} from 'lucide-react';
import { Calligraffitti } from 'next/font/google'
import { Trade_Winds } from 'next/font/google'

const calligraffitti = Calligraffitti({ 
    weight: '400', 
    subsets: ['latin'] })

    const tradeWinds = Trade_Winds({
         weight: '400', 
         subsets: ['latin'] })

const SquawkCard = ({username, profilePic, postText, postImage, likes, user}) => {

    useEffect(() => {
        console.log('profilePic: ', profilePic);
    }, [
        profilePic,
    ])

    const [likeCount, setLikeCount] = useState(0)

    const handleIncrement = () => {
      setLikeCount(likeCount+1)
    }
  

    return (
        <div className='border border-amber-500 rounded-lg p-3 bg-amber-100 overflow-hidden relative mx-auto w-1/2 h-1/2'>
            <div className='top-3 left-3 pt-3 pl-3 flex flex-'>
                {profilePic && <img src={profilePic} alt="Profile Picture" className='w-16 h-16 rounded-full mr-2' />}
                <p className={`font-bold text-xl ${tradeWinds.className}`}><strong>{username}</strong></p>
                </div>
                <div className='p-3'>
                    <p classname="text-6xl">{postText}</p>
                    <div className='flex justify-center items-center w-full h-80'>
                    <img src={postImage} alt="Post Image" className='w-full h-full shadow-lg rounded-lg pt-3 pb-3 object-cover overflow-hidden'/>
                    </div>
                    <p>{likeCount} People hooked</p>
                    <div className='border-t-2 border-amber-500 pt-3'>
                    <button className=' bottom-2 right-3 bg-amber-200 w-24 h-auto rounded-lg flex flex-row p-2 gap-2 shadow-md' onClick={handleIncrement} >Hooked
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="M378.095 20.322c34.035-.38 61.06 18.682 75.365 44.432c15.26 27.467 18.663 54.957 5.458 85.535c-.823 1.904-3.993 14.39-3.395 21.108c.48 5.396 3.53 27.773.846 29.18c-1.433 1.14-11.05-18.545-14.056-23.332c-5.136-8.18-12.894-18.784-8.16-29.746c9.785-22.657 7.77-49.972-3.422-70.12c-11.193-20.146-29.84-33.194-57.29-30.815c-29.632 2.567-46.207 11.872-57.257 24.796c-11.05 12.926-16.824 30.83-20.016 51.652c-6.383 41.642.04 92.605-22.4 128.912c-.26.42-.543.825-.85 1.213l-34.538 43.814c-3.714.45-6.83.52-9.275.267c-4.443-.46-6.53-1.636-8.043-3.213c-1.874-1.953-3.33-6.086-3.67-12.584c.032.013.066.022.098.035l34.39-43.627c14.326-23.78 11.526-72.68 18.588-118.756c3.55-23.167 10.218-46.2 25.953-64.605c15.736-18.405 40.29-30.82 74.774-33.807c2.33-.202 4.63-.312 6.898-.338zM199.078 278.008c.035 0 .07.003.105.004c-.242 11.4 1.905 21.17 8.895 28.455c4.834 5.038 11.675 7.875 19.172 8.652c5.648.585 11.8.17 18.693-1.094c1.59 4.98 2.696 10.352 3.36 16.1c2.022 17.458-.235 37.965-4.944 58.556c-5.345 23.368-13.753 46.676-21.968 66.2c-59.667-12.71-112.163-55.15-150.262-115.952c16.522-13.195 37.502-28.216 59.393-40.012c18.782-10.12 38.147-17.76 55.256-20.11c4.276-.586 8.375-.865 12.298-.8zm-140.91 72.504c39.234 61.705 93.608 106.474 156.816 121.162c-3.164 6.837-6.137 12.883-8.688 17.824c-2.686 1.485-6.664 2.413-12.337 2.137c-6.73-.327-15.344-2.327-24.822-5.842c-18.955-7.03-41.36-19.988-61.728-35.492c-20.368-15.503-38.77-33.628-50.168-50.366c-10.84-15.92-14.417-29.478-11.256-38.434c3.198-3.048 7.347-6.81 12.183-10.988z"/></svg>
                    </button> 
                    
                    
                    </div>
                
                </div>
        </div>
    )
}
export default SquawkCard