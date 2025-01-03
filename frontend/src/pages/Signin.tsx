import React from 'react'
import Quote from '../components/Quote'
import Auth from '../components/Auth'
import SigninForm from '../components/SigninForm'

const Signin = () => {
  return (
    <div className='w-screen flex'>
      {/* <Auth type='signin'/> */}
      <SigninForm/>
      <Quote />
    </div>
  )
}

export default Signin
