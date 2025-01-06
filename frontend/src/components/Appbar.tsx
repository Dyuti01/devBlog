import React, { useContext, useEffect, useState } from 'react'
import Avatar from './Avatar'
import { Link, useNavigate } from 'react-router'
import { all } from 'axios';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import UserContext from '../utils/UserContext';

const Appbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown)
  }
  const navigate = useNavigate();
  const { isLoggedInUser, setIsLoggedInUser, authorName}: any = useContext(UserContext);

  const handleLogout = async () => {
    await axios.get(`${BACKEND_URL}/api/v1/auth/logout`, { withCredentials: true });
    setIsLoggedInUser(false);
    localStorage.clear();
    navigate("/signin")
  }
  return (
    <div className='fixed top-0 z-10 h-[70px] flex items-center justify-between px-10 border-b w-full bg-white'>
      <div className='font-semibold text-xl'>
      dev<span className='underline'>Blogs</span>
      </div>
      {isLoggedInUser && <div className='flex items-center justify-center gap-6 relative'>
        <Link to="/publish"><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button></Link>
        <Link to="/myBlogs">
          My blogs
        </Link>
        <Link to="/allBlogs">
          All blogs
        </Link>
        <button onClick={handleShowDropDown}>
          <Avatar authorName={authorName} size="large" />

        </button>
        <div id="dropdown" className={`z-10 ${showDropDown ? "" : "hidden"} rounded-lg backdrop:blur-[20px] top-[50px] right-[20px] fixed`}>
          <button className="block px-4 py-2 text-Black font-semibold hover:bg-slate-100 rounded-lg" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </div>}
      {!isLoggedInUser && <div className='flex items-center justify-center gap-6 relative'>
        <Link to="/signup" className='hover:scale-95 hover:text-green-700 transition-all ease-in-out h-[70px] flex justify-center items-center font-medium'>
          Create account
        </Link>
        <Link to="/signin" className='hover:scale-95 hover:text-green-700 transition-all ease-in-out h-[70px] flex justify-center items-center font-medium'>
          Login
        </Link>
      </div>}
    </div>
  )
}

export default Appbar
