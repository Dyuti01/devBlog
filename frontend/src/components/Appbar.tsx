import React from 'react'
import Avatar from './Avatar'
import { Link } from 'react-router'

const Appbar = () => {
  return (
    <div className='fixed top-0 z-10 h-[70px] flex items-center justify-between px-10 border-b w-full bg-white'>
      <div className='font-medium'>
        DevBlogs
      </div>
      <div className='flex items-center justify-center gap-6'>
      <Link to="/publish"><button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Publish</button></Link>
        <Avatar authorName="Peter V." size="large" />
      </div>
    </div>
  )
}

export default Appbar
