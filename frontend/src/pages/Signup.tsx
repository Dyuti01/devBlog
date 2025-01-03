import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'
import SignupForm from '../components/SignupForm'

const Signup = () => {
  return (
    <div className='w-screen flex'>
      {/* <Auth type='signup'/> */}
      <SignupForm/>
      <Quote />
    </div>
  )
}

export default Signup
