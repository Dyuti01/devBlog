import React, { ChangeEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { SignInInputParams, SignUpInputParams } from '@dyuti_01/blog_common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import UserContext from '../utils/UserContext'

const SigninForm = () => {
  const [postSigninInputs, setPostSigninInputs] = useState<SignInInputParams>({
    userEmail:"srk@gmail.com",
    password:"Hello@12345"
  })

  const navigate = useNavigate()

  const {isLoggedInUser, setIsLoggedInUser, authorName, setAuthorName}:any = useContext(UserContext);

  async function sendReq(){
    try{
      const response:any = await axios.post(`${BACKEND_URL}/api/v1/auth/signin`, postSigninInputs, {withCredentials:true})
      const {message}:any = response.data;
      if (message!=="Invalid credentials"){
        setIsLoggedInUser(true)
        const author = response.data.safeData.firstName+" "+response.data.safeData.lastName;
        localStorage.setItem("authorName", author);
        setAuthorName(author);
        
      // console.log({response, isLoggedIn, message})
      }
      navigate('/allBlogs') 
    }
    catch(err){
      alert("Invalid credentials!")
    }
  }
  return (
    <div className='flex flex-col justify-center items-center justify-items-center w-full sm:w-1/2 min-h-screen gap-[50px]'>
      <div className='flex flex-col w-[70%] items-center gap-[10px]'>
        <span className='text-5xl font-bold text-center'>Welcome back!</span>
        <span className='text-sm text-slate-500 text-center'>Don't have account? <Link to='/signup' className='underline'>Create account</Link></span>
      </div>
    <div className='flex flex-col justify-center items-center gap-[10px] w-1/2'>
      <LabelledInput sendReq={sendReq} title='userEmail' type='email' placeholder='abc@example.com' value={postSigninInputs.userEmail} onChange={(e)=>{
        setPostSigninInputs((c:SignInInputParams)=>({
          ...c, userEmail:e.target.value
        }))
      }} />
      <LabelledInput sendReq={sendReq} title='password' type='password' value={postSigninInputs.password} onChange={(e)=>{
        setPostSigninInputs((c:SignInInputParams)=>({
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
  sendReq: ()=>void
}

const LabelledInput = ({title, type, placeholder, value, onChange, sendReq}:LabelledInput)=>{
  return (
    <>
      <div className='flex flex-col w-full'>
      <label htmlFor={title} className='text-black font-medium'>{title[0].toUpperCase() + title.slice(1)}</label>
      <input name={title} type={type || "text"} placeholder={placeholder} className='h-[40px] bg-white border-[1px] border-slate-300 px-2 py-1 rounded-lg' onChange={onChange} value={value} onKeyDown={(e) => {
        if (e.key === "Enter")
            sendReq();
        }} required/>
      </div>
    </>
  )
}

export default SigninForm;
