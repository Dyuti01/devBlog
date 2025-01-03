import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { SignInInputParams, SignUpInputParams } from '../../../common/src/index'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const Auth = ({type}:{type:"signup"|"signin"}) => {
  const [postSignupInputs, setPostSignupInputs] = useState<SignUpInputParams>({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })
  const [postSigninInputs, setPostSigninInputs] = useState<SignInInputParams>({
    userEmail:"",
    password:""
  })

  const navigate = useNavigate()

  async function sendReq(){
    try{
      const response = await axios.post(`${BACKEND_URL}/signup`, postSignupInputs, )
      navigate('/signin')
    }
    catch(err){

    }
  }

  return (
    <div className='flex flex-col justify-center items-center justify-items-center w-full sm:w-1/2 min-h-screen gap-[50px]'>
      <div className='flex flex-col w-[70%] items-center gap-[10px]'>
        <span className='text-5xl font-bold'>{type==="signup"?'Create an account':'Welcome back!'}</span>
        <span className='text-sm text-slate-500'>{type==="signup"?"Already have an account?":"Don't have account?"} <Link to={type==="signup"?"/signin":"/signup"} className='underline'>{type==="signup"?"Login":"Create account"}</Link></span>
      </div>
    <form className='flex flex-col justify-center items-center gap-[10px] w-1/2'>
      
      {/* <div className='flex flex-col w-full'>
      <label htmlFor="username" className='text-black font-medium'>Username</label>
      <input name='username' type="text" className='h-[40px] bg-white border-[1px] border-slate-300 px-2 py-1 rounded-lg' placeholder='Enter your username' />
      </div>

      <div className='flex flex-col w-full'>
      <label htmlFor="email" className='text-black font-medium'>Email</label>
      <input name='email' type="email" className='h-[40px] bg-white border-[1px] border-slate-300 px-2 py-1 rounded-lg' placeholder='abc@example.com' />
      </div>

      <div className='flex flex-col w-full'>
      <label htmlFor="password" className='text-black font-medium'>Password</label>
      <input name='password' type="password" className='h-[40px] bg-white border-[1px] border-slate-300 px-2 py-1 rounded-lg' />
      </div>

      <div className=' w-full'>
        <button type='submit' className='border-[2px] bg-black text-white w-full py-2 rounded-lg'>SignUp</button>
      </div> */}
      {/* <LabelledInput title='username' type='text' placeholder='Enter your username' onChange={()=>{
        
      }} /> */}
      
      {type==="signup" && <LabelledInput title='first name' type='text' placeholder='' onChange={(e)=>{
        setPostSignupInputs(c=>({
          ...c, firstName:e.target.value
        }))
      }} />}
      {type==="signup" && <LabelledInput title='last name' type='email' placeholder='' onChange={(e)=>{
        setPostSignupInputs(c=>({
          ...c, lastName:e.target.value
        }))
      }} />}
      <LabelledInput title='email' type='email' placeholder='abc@example.com' onChange={(e)=>{
        type==="signup"?setPostSignupInputs(c=>({
          ...c, email:e.target.value
        })):setPostSigninInputs(c=>({...c, userEmail:e.target.value}))
      }} />
      <LabelledInput title='password' type='password' onChange={(e)=>{
        type==="signup"?setPostSignupInputs(c=>({
          ...c, email:e.target.value
        })):setPostSigninInputs(c=>({...c, userEmail:e.target.value}))
      }} />
            <div className=' w-full'>
        <button type='submit' className='border-[2px] bg-black text-white w-full py-2 rounded-lg'>{type==="signup"?"SignUp":"Login"}</button>
      </div>
    </form>
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

export default Auth;
