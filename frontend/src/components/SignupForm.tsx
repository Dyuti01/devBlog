import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { SignInInputParams, SignUpInputParams } from '@dyuti_01/blog_common'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const SignupForm = () => {
  const [postSignupInputs, setPostSignupInputs] = useState<SignUpInputParams>({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  const navigate = useNavigate()

  async function sendReq(){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/auth/signup`, postSignupInputs, )
      navigate('/signin')
    }
    catch(err){
      alert("Enter valid inputs.\n" + err)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center justify-items-center w-full sm:w-1/2 min-h-screen gap-[50px]'>
      <div className='flex flex-col w-[70%] justify-center items-center gap-[10px]'>
        <span className='text-5xl font-bold text-center'>Create an account</span>
        <span className='text-sm text-slate-500 text-center'>Already have an account? <Link to="/signin" className='underline'>Login</Link></span>
      </div>
    <div className='flex flex-col justify-center items-center gap-[10px] w-1/2'>
      
      <LabelledInput title='first name' type='text' placeholder='' onChange={(e)=>{
        setPostSignupInputs((c:SignInInputParams)=>({
          ...c, firstName:e.target.value
        }))
      }} />
      <LabelledInput title='last name' type='text' placeholder='' onChange={(e)=>{
        setPostSignupInputs((c:SignInInputParams)=>({
          ...c, lastName:e.target.value
        }))
      }} />
      <LabelledInput title='email' type='email' placeholder='abc@example.com' onChange={(e)=>{
        setPostSignupInputs((c:SignInInputParams)=>({
          ...c, email:e.target.value
        }))
      }} />
      <LabelledInput title='password' type='password' onChange={(e)=>{
        setPostSignupInputs((c:SignInInputParams)=>({
          ...c, password:e.target.value
        }))
      }} />
            <div className=' w-full'>
        <button className='border-[2px] bg-black text-white w-full py-2 rounded-lg' onClick={sendReq}>SignUp</button>
      </div>
    </div>
    </div>
  )
}

interface LabelledInput{
  title:string,
  type:string,
  placeholder?: string,
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void
}

const LabelledInput = ({title, type, placeholder, onChange}:LabelledInput)=>{
  return (
    <>
      <div className='flex flex-col w-full'>
      <label htmlFor={title} className='text-black font-medium'>{title[0].toUpperCase() + title.slice(1)}</label>
      <input name={title} type={type || "text"} placeholder={placeholder} className='h-[40px] bg-white border-[1px] border-slate-300 px-2 py-1 rounded-lg' onChange={onChange} required/>
      </div>
    </>
  )
}

export default SignupForm;
