'use client'
import { Menu } from 'lucide-react'
import '../app/globals.css'
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import Link from 'next/link';
import {useState, useEffect} from 'react';
import AddPostModal from "@/components/AddPostModal";


const Navibar = ({ profilePic}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleModal = () => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    }
    const handleCloseModal = () => {
      setIsModalOpen(false);
    }
    if (isModalOpen === false){
      handleOpenModal()
    } else {
      handleCloseModal()
    }
  }
  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  // };



  
  const placeholderImageUrl = 'https://static.vecteezy.com/system/resources/previews/009/399/229/original/pirate-clipart-design-illustration-free-png.png';
  const [user, setUser] = useState(null);

  
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    console.log(JSON.parse(localStorage.getItem('profile')));
  }, []);
  useEffect(() => {
    console.log('profilePic: ', profilePic);
}, [
    profilePic,
]);



  return (
    <div className='sticky top-0 z-50'>
      <div>
<Navbar id="Navbar" className ='bg-base py-5'>
<NavbarBrand>
  <Dropdown className="bg-yellow-100 " label={
    
      <Menu className="text-black hover:text-white"/>
  } arrowIcon={false} >
    
  
    
    <DropdownItem><Link href="" onClick={handleModal}>New Plunder</Link></DropdownItem>
    <DropdownItem> <Link href="/">Squawks</Link></DropdownItem>
    <DropdownItem><Link href="/addmatey">Add Matey</Link></DropdownItem>
    <DropdownItem><Link href="/aboutye">About Ye</Link></DropdownItem>
  </Dropdown>
</NavbarBrand>
<div className='flex justify-center gap-40'>
<button className="px-4 py-2  text-white rounded-full hover:bg-yellow-950" onClick={handleModal}>
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 512 512" style={{ verticalAlign: "middle" }}><path fill="#f3f5b1" d="M410.365 101.005c8.21-22.26 16.21-31.12 20.33-34.45c3.06-2.48 5.73-3.42 7.92-2.81c4 1.13 8.49 7.45 11.88 16.89c10.89 30.34 10 84.28-.93 129.51zm-286 72.92c7.52-31 10.28-66.13 7.77-94.92l-43.6-4.86zm289.46-113l-301.2-33.53c-2.5-.28-5.24 1.46-7.11 3c-3.67 3-10.42 10.32-17.66 27.64l308.68 34.34c5.16-13.25 11.02-23.89 17.31-31.43zm-228.78 298.71v-70.72l10.76 1.19l42.24 5.18v70.51zm16-40.34a13 13 0 0 0 5.34 10.29l-2.34 24.42l17 1.74l-4-25a9.54 9.54 0 0 0 5-9.15a13.64 13.64 0 0 0-11.06-12.59s.17.1.13.1c-5.95-.68-11.07 3.9-10.07 10.1zm53 64.45l-85-9.84v-86.72l-1.05-.09a8.14 8.14 0 0 1-7.27 6.71a8 8 0 0 1 5.23 8.9a8 8 0 0 1-8 6.66c8.453 4.004 4.341 16.778-4.86 15.1a8 8 0 0 1-8 13.8a8.01 8.01 0 0 1-12.28 10.29v.09a8 8 0 0 1-3.86 8.37l9.13 5.35v14.25l-12 7.13l-12-7.12v-14.26l8.15-4.82a8.21 8.21 0 0 1-5.07-5.92a.418.418 0 0 1 0-.1a8 8 0 0 1-15.18-5c-6.851 7.214-18.094-2.065-12.31-10.16c-8.346 4.519-16.217-6.676-9.14-13c-9.17 2.661-14.453-10.083-6.09-14.69a8 8 0 0 1-3.21-15.67c-9.294-1.047-9.548-14.463-.3-15.86c-.669-.164-1.264-.473-1.83-.76l-17.24-1.86l.6 167.11l309.18 34.49l-.6-165.83l-107-13.05zm140.06-164l4.72 1.91l.91.58l38.72 4.31l-23.26-64.77l-12.82 37c-.16.46-3.41 9.8-8.27 20.99zm-208.54-39.74l5 5.49l12.75-11.15l21.45-2.28l16.61 15.35l10.51 8.73l18.54-9.29l3.44.5c.12-.67.25-1.34.38-2c3.08-16.1 7.35-30.16 7.53-30.75l13.39-43.91l16.88 42.71l8.42 21.42l10.66-12.39l22.14-25.73l5.78 33.45l3.29 19.1l17.1-9.64l35.09-19.79l-18.48-51.4l-247.86-27.61c2.51 34.94-1.85 77.32-12.39 112h2.32l7-12.86h40.46zm-111.29 97.39c7.6 2.1 7.9 12.766.43 15.29c7.737.867 9.802 11.153 3 14.94c7.653-.548 11.614 8.947 5.84 14c7.313-2.115 13.168 6.216 8.7 12.38c6.288-3.518 13.657 2.417 11.56 9.31c4.53-4.723 12.506-2.304 13.65 4.14c2.057-5.713 9.48-7.141 13.51-2.6c-1.285-6.404 5.23-11.566 11.17-8.85c-4.564-5.77.425-14.123 7.67-12.84c-6.419-4.541-3.122-14.648 4.74-14.53c-7.316-3.503-5.375-14.415 2.7-15.18a8 8 0 0 1-5.38-8l-76.43-8.26c-.41.19-.746.15-1.16.2m367.54 139.08l-.59-163.86l-8.67 7l-55.51 46.79l.58 162zm-26.23-165.2l-24.11-15.27l-4.18-1.69c-5.91 11.52-13.39 23-22.66 27.88c-5.44 2.88-12.22 4.34-20.16 4.34c-11.13 0-24.75-2.91-37.35-8c-10-4-23.3-11-30.26-21.34c-4.9-7.29-6.64-17.77-5.31-32.92l-21.78 10.93l-19-15.8l-11.42-10.53l-9.16 1l-20.45 17.83l-11-11.7h-24.21l-17.61 32l-5.7-7.2l-4.42 4.85l-10.76 16.35"/></svg>
</button>
  <button id="Squawks" className="px-4 py-2  text-white rounded-full hover:bg-yellow-950 inline-block">
  <Link href="/">
<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 375 512"><path fill="#f3f5b1" d="M39.755 140.93C33.007 72.327 59.163 31.293 96 12.874c18.067-9.033 47.043-16.543 94.747-10.953c84.912 9.95 165.708 124.871 183.6 291.841c-45.32 10.125-55.001 54.48-85.857 116.191c-31.352 62.706-80.593 97.942-116.634 101.75c-40.087 4.663-100.954-46.217-120.926-108.986c-9.093-28.58-.047-64.214 9.033-82.463c30.91 9.034 69.428 7.806 93.68-12.165c8.559-80.839-11.413-159.3-113.888-167.16m134.056-69.588c-14.273 0-25.844 11.722-25.844 26.183s11.57 26.184 25.844 26.184s25.845-11.723 25.845-26.184s-11.571-26.183-25.845-26.183m0 8.473c-9.874 0-17.879 7.93-17.879 17.71s8.005 17.71 17.88 17.71c9.874 0 17.879-7.929 17.879-17.71s-8.005-17.71-17.88-17.71"/><path fill="#f3f5b1" d="M36.114 149.04C6.004 160.415-10.724 256.1 7.677 317.658c.332.813.954 1.48 1.672 1.004c30.11-19.07 26.682-98.779 98.361-88.993c-16.477 33.373-33.913 56.515-65.156 65.992c-3.307.94-2.056 4.406-1.37 5.313c16.115 21.307 82.899 23.625 106.004 1.964c3.648-74.407-10.354-149.951-111.074-153.898"/></svg>        <path fill="#f3f5b1" d="M39.755 140.93C33.007 72.327 59.163 31.293 96 12.874c18.067-9.033 47.043-16.543 94.747-10.953c84.912 9.95 165.708 124.871 183.6 291.841c-45.32 10.125-55.001 54.48-85.857 116.191c-31.352 62.706-80.593 97.942-116.634 101.75c-40.087 4.663-100.954-46.217-120.926-108.986c-9.093-28.58-.047-64.214 9.033-82.463c30.91 9.034 69.428 7.806 93.68-12.165c8.559-80.839-11.413-159.3-113.888-167.16m134.056-69.588c-14.273 0-25.844 11.722-25.844 26.183s11.57 26.184 25.844 26.184s25.845-11.723 25.845-26.184s-11.571-26.183-25.845-26.183m0 8.473c-9.874 0-17.879 7.93-17.879 17.71s8.005 17.71 17.88 17.71c9.874 0 17.879-7.929 17.879-17.71s-8.005-17.71-17.88-17.71"/><path fill="black" d="M36.114 149.04C6.004 160.415-10.724 256.1 7.677 317.658c.332.813.954 1.48 1.672 1.004c30.11-19.07 26.682-98.779 98.361-88.993c-16.477 33.373-33.913 56.515-65.156 65.992c-3.307.94-2.056 4.406-1.37 5.313c16.115 21.307 82.899 23.625 106.004 1.964c3.648-74.407-10.354-149.951-111.074-153.898"/>
      
  </Link>
</button>
<button id="Add Matey" className="inline-block px-4 py-2  text-white rounded-full hover:bg-yellow-950">
  <Link href="/addmatey">
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#f3f5b1" d="M8.2 12.1c-.3.2-.5.6-.4.9c0 .7.7 1.2 1.3 1.2c.6 0 1.2-.5 1.2-1.2c-.6-.4-1.3-.7-2.1-.9M22 11l1-4s-2 0-5-2s-3-4-6-4s-3 2-6 4s-5 2-5 2l1 4h.1c-.1.3-.1.7-.1 1c0 3.5 1.8 6.6 4.5 8.4l-.5.9c6.4 4.1 12 0 12 0l-.5-.9c2.7-1.8 4.5-4.9 4.5-8.4zM11.3 4.5L9.9 3.1l.7-.7L12 3.8l1.4-1.4l.7.7l-1.4 1.4l1.4 1.4l-.7.7L12 5.2l-1.4 1.4l-.7-.7zm-2 4c1-.3 2-.5 2.7-.5c2.2 0 5.9 1.6 7.8 2.4c.1.3.1.6.1.9zm4.3 10.6c-.7.4-1.4.7-2.2.8c-.5-.4-.5-1.2 0-1.6c.4-.4 1.3-.6 1.8-.1c.3.1.4.6.4.9m6.4-5.7c-.5 2.1-1.8 4-3.5 5.2L15 16H9l-1.5 2.6C5.4 17.2 4 14.8 4 12c0-.5.1-1 .2-1.5c.5-.2 1.1-.5 1.8-.8l7.1 1.9V14c0 .5.4 1 1 1h2c.5 0 1-.4 1-1v-1.4z"/></svg>  
  </Link>
</button>
   <button id="About ye" href="./Aboutye" active='false' className=" text-white rounded-full hover:bg-yellow-950 inline-block" style={{ verticalAlign: "middle" }}>
  <Link href="/aboutye">
    {user && user.profilePic ? (
      <img src={user.profilePic} alt="Profile Picture" className='w-16 h-16 rounded-full object-cover mx-2' />
    ) : (
      <img src={placeholderImageUrl} alt="Placeholder" className='w-16 h-16 rounded-full  mx-2 object-contain bg-gray-300' />
    )}
  </Link>
</button>




<NavbarToggle className="hidden" />
</div>
<NavbarCollapse  >
 
</NavbarCollapse>

</Navbar>
</div>
<div className='top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed z-50' >
<AddPostModal className="z-50" id='AddPostModal'isOpen={isModalOpen} onClose={handleModal}/>
</div>
</div>
)
}


export default Navibar