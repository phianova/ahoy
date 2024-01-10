'use client';
// import MediaCard from '@/components/MediaCard';
import { useState } from 'react';

const UserProfile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [propertyObject, setPropertyObject] = useState({
    name: '',
    description: '',
    available: false,
  });
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    setPropertyObject({
      ...propertyObject,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic goes here
    // For simplicity, just toggling the edit mode
    setIsEditMode(!isEditMode);
  };

  return (
    <div className='container mx-auto'>
      <div className='mt-10'>
        {isError && <p className='text-red-500'>Yer missin' some info!</p>}
        <form
          className='mx-auto mt-10 flex flex-col gap-10 w-1/2 mt-20'
          onSubmit={handleSubmit}
        >
          {isEditMode ? (
            <>
              <input
                placeholder='Name'
                name='name'
                onChange={handleInputChange}
                value={propertyObject.name}
              />
              <input
                placeholder='Description'
                name='description'
                onChange={handleInputChange}
                value={propertyObject.description}
              />
              <div className='flex gap-4 mx-auto'>
                <label htmlFor='checkbox'>Make profile public?</label>
                <input
                  type='checkbox'
                  name='available'
                  onChange={handleInputChange}
                  checked={propertyObject.available}
                />
              </div>
            </>
          ) : (
            <>
              <p>Name: {propertyObject.name}</p>
              <p>Description: {propertyObject.description}</p>
              <p>
                Make profile public: {propertyObject.available ? 'Yes' : 'No'}
              </p>
            </>
          )}

          <button
            type='submit'
            className={`bg-${isEditMode ? 'blue' : 'green'}-500 text-white p-2 rounded-md`}
          >
            {isEditMode ? 'Update Profile' : 'Edit Profile'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
// rafce