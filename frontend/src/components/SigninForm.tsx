import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { SignInInputParams, SignUpInputParams } from '../../../common/src/index'
import axios from 'axios'
import { BACKEND_URL } from '../config'

const SigninForm = () => {
  const [postSigninInputs, setPostSigninInputs] = useState<SignInInputParams>({
    userEmail:"srk@gmail.com",
    password:"Hello@12345"
  })

  const navigate = useNavigate()

  async function sendReq(){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/auth/signin`, postSigninInputs, {withCredentials:true})
      console.log(response)
      navigate('/blogs') 
    }
    catch(err){

    }
  }
  return (
    <div className='flex flex-col justify-center items-center justify-items-center w-full sm:w-1/2 min-h-screen gap-[50px]'>
      <div className='flex flex-col w-[70%] items-center gap-[10px]'>
        <span className='text-5xl font-bold'>Welcome back!</span>
        <span className='text-sm text-slate-500'>Don't have account? <Link to='/signup' className='underline'>Create account</Link></span>
      </div>
    <div className='flex flex-col justify-center items-center gap-[10px] w-1/2'>
      <LabelledInput title='userEmail' type='email' placeholder='abc@example.com' value={postSigninInputs.userEmail} onChange={(e)=>{
        setPostSigninInputs(c=>({
          ...c, userEmail:e.target.value
        }))
      }} />
      <LabelledInput title='password' type='password' value={postSigninInputs.password} onChange={(e)=>{
        setPostSigninInputs(c=>({
          ...c, password:e.target.value
        }))
      }} />
            <div className=' w-full'>
        <button type='submit' className='border-[2px] bg-black text-white w-full py-2 rounded-lg' onClick={sendReq}>Login</button>
      </div>
    </div>
    </div>
  )
}

interface LabelledInput{
  title:string,
  type:string,
  value:any,
  placeholder?: string,
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void
}

const LabelledInput = ({title, type, placeholder, value, onChange}:LabelledInput)=>{
  return (
    <>
      <div className='flex flex-col w-full'>
      <label htmlFor={title} className='text-black font-medium'>{title[0].toUpperCase() + title.slice(1)}</label>
      <input name={title} type={type || "text"} placeholder={placeholder} className='h-[40px] bg-white border-[1px] border-slate-300 px-2 py-1 rounded-lg' onChange={onChange} value={value} required/>
      </div>
    </>
  )
}

export default SigninForm;
