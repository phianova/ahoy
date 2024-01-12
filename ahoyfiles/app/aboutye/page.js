'use client'
import  { useState, useEffect } from 'react';
import { Trade_Winds } from 'next/font/google'
const tradeWinds = Trade_Winds({
  weight: '400',
  subsets: ['latin'] })

const UserProfile = () => {
  const placeholderImageUrl = 'https://static.vecteezy.com/system/resources/previews/009/399/229/original/pirate-clipart-design-illustration-free-png.png';

  const [isEditMode, setIsEditMode] = useState(false);
  const [profile, setProfile] = useState({
    username: '',
    description: '',
    available: false,
    profilePic: '',
  });
  const [isError, setIsError] = useState(false);





  useEffect(() => {
    const profileFromLS = localStorage.getItem('profile');
    if (!profileFromLS) return;
    setProfile(JSON.parse(profileFromLS));
  }, []);

  const handleInputChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
        localStorage.setItem('profile', 
        JSON.stringify(profile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    // For simplicity, just toggling the edit mode
    setIsEditMode(!isEditMode);
  };

  return (
    <div id="profilecard" className='container  mx-auto w-1/2 p-8'>
      <div className='mt-10'>
        <h1 className={`text-5xl font-bold text-center ${tradeWinds.className}`}>Edit User Profile</h1>
        <form
          className='mx-auto flex flex-col gap-10 w-1/2 mt-20'
          onSubmit={handleSubmit}
        >
          {isEditMode ? (
            <>
              {/* name */}
              <input 
                className="mx-auto text-xl  placeholder-top min-h-6"
                placeholder='Name'
                name='username'
                onChange={handleInputChange}
                value={profile.username}
              />
              {/* URL input for profile picture */}
              <input
                className="mx-auto text-xl object-contain bg-gray-300 placeholder-top min-h-6"
                placeholder='Profile image URL'
                name='profilePic'
                onChange={handleInputChange}
                value={profile.profilePic}
              />
              {/* Display profile picture */}
              {(profile.profilePic || placeholderImageUrl) && (
                <img
                  src={profile.profilePic || placeholderImageUrl}
                  alt='Profile'
                  className='w-60 h-60 object-contain bg-gray-300 rounded-full object-cover mx-auto'
                />
              )}

              <textarea
                className="min-h-20 placeholder-top "
                placeholder='Description'
                name='description'
                rows='6'
                onChange={handleInputChange}
                value={profile.description}
              />
              <div className='flex gap-4 mx-auto'>
                <label htmlFor='checkbox' className="font-bold">Make profile public?</label>
                <input
                  type='checkbox'
                  name='available'
                  onChange={handleInputChange}
                  checked={profile.available}
                />
              </div>
            </>
          ) : (
            <>
              <p  className={`text-3xl mx-auto placeholder-top min-h-6 font-bold text-center ${tradeWinds.className}`}>
                {profile.username || 'Add name'}
              </p>
              {/* Display profile picture */}
              {(profile.profilePic || placeholderImageUrl) && (
                <img 
                  src={profile.profilePic || placeholderImageUrl}
                  alt='Profile'
                  className='object-contain bg-gray-300 w-60 h-60  shadow-lg rounded-full mx-auto'
                />
              )}
              <p className="bg-white justify-center shadow-lg rounded-lg p-8 min-h-40 text-xl">
                {profile.description || 'Add description'}
              </p>
              <p className='text-x'>
                Public Profile: {profile.available ? 'Yes' : 'No'}
              </p>
            </>
          )}

          <button
            type='submit'
            className={`bg-${isEditMode ? 'green' : 'cyan'}-500 text-black p-2 rounded-md shadow-lg mx-auto min-w-40`}
          >
            {isEditMode ? 'Update Profile' : 'Edit Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;