import React from 'react'
import Quote from '../components/Quote'
import SigninForm from '../components/SigninForm'
import { Link } from 'react-router'

const Signin = () => {
  return (
    <div className='w-screen flex'>
      {/* <Auth type='signin'/> */}
      {/* <Link to="/allBlogs" className='fixed ml-[20px] mt-[20px] left-[40px] font-semibold text-2xl'>
        dev<span className='underline'>Blogs</span>
      </Link> */}
      <div className='fixed ml-[20px] mt-[20px] left-[40px] font-semibold text-2xl'>
        dev<span className='underline'>Blogs</span>
      </div>
      {/* <Link to="/allBlogs" className='fixed ml-[20px] mt-[20px] right-[40px] font-semibold'>
      See all blogs
    </Link> */}
      <SigninForm/>
      <Quote />
    </div>
  )
}

export default Signin
