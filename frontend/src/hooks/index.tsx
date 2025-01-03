import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { BlogParam } from '../pages/Blogs';

export const UseBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs]:any = useState([]);
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog`, {withCredentials:true}).then((res)=>{
      setBlogs(res.data);
      setLoading(false);
    })
  }, [])

  return {loading, blogs}
}
export const UseBlog = ({blogId}:{blogId:string}) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogParam>();
  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/v1/blog/${blogId}`, {withCredentials:true}).then((res)=>{
      // @ts-ignore
      setBlog(res.data.blog);
      setLoading(false);
    })
  }, [blogId])

  return {loading, blog}
}
