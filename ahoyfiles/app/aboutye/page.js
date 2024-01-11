'use client'
import  { useState, useEffect } from 'react';

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

  const audioElement = document.createElement('audio');




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
    <div className='container bg-blue-100 mx-auto p-8'>
      <div className='mt-10'>
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
                className="mx-auto text-xl  placeholder-top min-h-6"
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
                  className='w-60 h-60  rounded-full object-cover mx-auto'
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
                <label htmlFor='checkbox'>Make profile public?</label>
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
              <p  className="mx-auto text-2xl font-bold min-h-6">
                {profile.name || 'Add name'}
              </p>
              {/* Display profile picture */}
              {(profile.profilePic || placeholderImageUrl) && (
                <img 
                  src={profile.profilePic || placeholderImageUrl}
                  alt='Profile'
                  className='w-60 h-60 object-cover shadow-lg rounded-full mx-auto'
                />
              )}
              <p className="bg-white justify-center shadow-lg rounded-lg p-8 min-h-40">
                {profile.description || 'Add description'}
              </p>
              <p>
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