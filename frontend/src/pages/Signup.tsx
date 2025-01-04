import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'
import SignupForm from '../components/SignupForm'
import { Link } from 'react-router'

const Signup = () => {
  return (
    <div className='w-screen flex'>
      {/* <Auth type='signup'/> */}
      <Link to="/allBlogs" className='fixed ml-[20px] mt-[20px] left-[40px] font-semibold text-2xl'>
        dev<span className='underline'>Blogs</span>
      </Link>
      <Link to="/allBlogs" className='fixed ml-[20px] mt-[20px] right-[40px] font-semibold'>
      See all blogs
    </Link>
      <SignupForm/>
      <Quote />
    </div>
  )
}

export default Signup
