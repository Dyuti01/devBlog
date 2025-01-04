import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { BlogParam } from '../pages/MyBlogs';
import { useNavigate } from 'react-router';

export const UseBlogs = ({setIsLoggedInUser}:any) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs]:any = useState([]);
  useEffect(()=>{
    try{
          axios.get(`${BACKEND_URL}/api/v1/blog/myBlogs`, {withCredentials:true}).then((res)=>{
      setBlogs(res.data);
      setLoading(false);
    })
    }catch(err){
      setIsLoggedInUser(false)
      setLoading(false)
    }
  }, [])

  return {loading, blogs}
}
export const UseBlog = ({blogId}:{blogId:string}) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogParam>();
  useEffect(()=>{
    try{
          axios.get(`${BACKEND_URL}/api/v1/blog/blogs/${blogId}`, {withCredentials:true}).then((res)=>{
      // @ts-ignore
      setBlog(res.data.blog);
      setLoading(false);
    })
    }
    catch(err){
      alert("Something went wrong!")
    }

  }, [blogId])

  return {loading, blog}
}

export const UseAllBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs]:any = useState([]);
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {withCredentials:true}).then((res)=>{
      setBlogs(res.data);
      setLoading(false);
    })
  }, [])

  return {loading, blogs}
}