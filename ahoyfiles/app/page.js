'use client';
// import { Button } from 'flowbite-react'
import {useState, useEffect} from 'react';
import SquawkCard from '@/components/SquawkCard';



export default function Home() {
const [posts, setPosts] = useState(null);
const [user, setUser] = useState(null);

useEffect(() => {
  setUser(JSON.parse(localStorage.getItem('profile')));
  console.log(JSON.parse(localStorage.getItem('profile')));
}, []);

useEffect(() => {
  console.log(user)
}, [user]);


useEffect(() => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  setPosts(posts);
  if (!posts) return;
}, []);


// useEffect(() => {
//   const checkPosts = localStorage.getItem('posts');
//   if (!checkPosts) {
//     localStorage.setItem('posts', JSON.stringify([
//       {
//         username: 'Captain Jack Sparrow',
//         profilePic: 'https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         postText: 'Arr! I be the captain now!',
//         postImage: 'https://images.unsplash.com/photo-1594189683218-b5a9a346a43f?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         likes: 0
//       },
//     ]));
//   }
// }, [posts]);

// setPosts((prevPosts) => {
//   const updatedPosts = [...prevPosts, postObject];
//   localStorage.setItem('posts', JSON.stringify (updatedPosts));
//   return updatedPosts;
// }); 

if (!posts) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className='text-3xl font-bold text-center text-'>Squawks</h1> 
<p className="text-grey-300">Arr! Thar be no squawks!</p>
<div className='w-24 h-auto'>
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="currentColor" d="M227.4 34.7c-10.1 0-20.2.2-30.2.5l6.1 65.6l-61.1-62.5c-31.3 2.5-62.5 6.6-93.8 12.5l34.2 28.4l-48-.6c35.1 100.2 6.9 182.6-.3 292.1L130 476.5c10-1.3 19.9-2.4 29.6-3.3l21.5-42.2l18.6 28.8l41.5-33.5l.8 43c82.9-.2 157.7 9.1 235.7 7.9c-28.2-73-31.2-143.6-31.9-209.2l-33.3-19.1l32.7-33.9c-.4-21.3-1.3-42-3.6-61.9l-57.4.7l50.2-41.7c-3.8-15.5-9-30.4-16.1-44.7l-29.5-23.9C335 38 281.2 34.6 227.4 34.7m58.7 37c10.6 24.75 21.1 49.5 31.7 74.3c7.5-10.5 14.9-21 22.4-31.5c16 27.2 32 54.3 48 81.5l-16.2 9.5l-33.3-56.7l-42.5 59.4l-15.2-10.9l24-33.5l-21.9-51.5l-24.6 40.1l12 22.6l-16.5 8.8l-18.3-34.5l-24.8 58.2l-17.2-7.4l32.5-76.2l7.7-18c4.8 9.2 9.6 18.3 14.5 27.4c12.5-20.6 25.1-41.11 37.7-61.6M91.2 128c6.72 1.6 13.4 3.4 19.2 5.3c-2.1 5.9-4.1 11.8-6.2 17.6c-5.79-1.6-11.72-3.4-16.9-4.7c1.39-6 2.62-12.1 3.9-18.2m37.9 13.4c6.3 3.8 12 7.2 17 12.8L132.6 167c-4-3.7-8.6-7-12.8-9.4zm28.7 32.3c2.1 7.4 2.1 15.7 1.6 22.5l-18.5-2.4c.1-5.1.3-10-1-14.5zm-21.2 35.7l17.2 7.1c-3.3 6.6-5.1 12.7-8.6 17.8l-16.3-9c2.6-5.4 5.6-10.8 7.7-15.9m-16.5 34.1l17.7 6.1c-1.5 5.4-3 11.2-3.6 16.2l-18.6-2c1.3-7.5 2.1-14 4.5-20.3m207.8 17.4c8.5 1 14.6 3 21.7 7.1l-9.8 16c-4.1-2.8-9.4-3.8-13.5-4.5zm-21.2 1.5c1.1 6.1 2.5 12.2 3.9 18.3c-5.9 1.3-11.7 3.3-16.5 5.1l-6.8-17.4c6.7-2.4 13.5-4.7 19.4-6m-37.9 15.9l11 15.1c-5.6 4-11.8 7.8-16.8 10.6l-8.9-16.4c5.1-2.9 10.6-6.3 14.7-9.3M135.3 281c1.5 4.7 4.2 9.2 6.9 12.1l-13.8 12.6c-5.5-5.7-9.5-13.5-11.2-20.1zm230.3 3.3c3.5 6.4 6.8 12.7 8.7 19.1l-17.8 5.6c-2-5.4-4.3-10.8-6.8-14.8zm-127.4 10.9l6.9 17.3c-6.4 2.7-12.9 4.8-18.6 6.5l-5-18c5.9-1.6 11.3-3.8 16.7-5.8m-83.8 6.2c5.3 1.7 10.8 3.4 15.7 4.2c-1.2 6.1-2 12.3-2.8 18.5c-7-1-14.5-3.3-20.5-5.7zm50 3.5l2.8 18.5c-7.2 1.3-13.4 1.6-19.8 1.9l-.4-18.7c5.9-.2 11.6-.8 17.4-1.7m174.5 18c1 6.4 1.6 12.9 2.2 19.3l-18.7 1.5c-.4-6-.9-11.9-2-17.8zm-67.6 30.8c18.9 3.5 44.9 16.2 68.9 33.9c7.4-9.9 14.4-20.4 21.3-31.1l30.1 12.9c-4.7 12.3-15 25.6-28.6 37.2c17 16.2 30.9 34.5 37 53c-13.8-18.1-31.1-31.8-50.3-42.8c-23.4 15.8-52.7 25.9-79.6 20.4c22.9-4.4 40.6-16.6 55.8-32.6c-16.5-7.5-33.8-13.9-51.3-20.1z"/></svg>
</div> 
      </div>
    </main>
  )
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
      <div className='w-full'>
        <h1 className='text-3xl font-bold text-center'>Squawks</h1> 
      </div>
     

      <div className='w-3/4'>
        {/* background for posts */}
        <div className='flex flex-wrap gap-10 mt-10 w-full' >
          {posts && posts.map((post) => {
            return <SquawkCard username={user.username || 'anonymous'}
            profilePic={user.profilePic || 'https://i.pravatar.cc/300'}
            postText={post.postText || 'no text'}
            postImage={post.postImage || 'https://i.pravatar.cc/300'}
            likes={post.likes || 0} />
          })}
        </div>
        
      </div>
      
    </main>
  )
}
