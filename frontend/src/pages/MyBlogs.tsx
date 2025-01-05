import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { UseBlogs } from '../hooks'
import { Link, useNavigate } from 'react-router';
import Shimmer from './Shimmer';
import UserContext from '../utils/UserContext';
import Cookies from 'js-cookie'
import { BACKEND_URL } from '../config';
import axios from 'axios';

export interface BlogParam {
  id: string;
  content: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  author: {
    firstName: string;
    lastName: string;
  }

}

const MyBlogs = () => {
  
  const navigate = useNavigate();
  const {isLoggedInUser, setIsLoggedInUser}:any = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs]:any = useState([]);
    useEffect(()=>{
     axios.get(`${BACKEND_URL}/api/v1/blog/myBlogs`, {withCredentials:true}).then((res)=>{
        setBlogs(res.data);
        setLoading(false);
      }).catch((error)=>{
        setIsLoggedInUser(false);
        navigate("/unauthorized")
        return "Error";
      })
    }, [])
  

  return (
    <>
      <Appbar />
      {loading && <Shimmer />}
      <div className='min-h-screen w-full flex flex-col items-center mt-[140px]'>
        {!loading && blogs.map((b: BlogParam) => {
          return (
            <BlogCard key={b.id} blogId={b.id} authorName={b.author.firstName + " " + b.author.lastName} content={b.content} publishedDate={b.createdAt} title={b.title} />
          )
        })}
        {/* <BlogCard authorName='Peter V.' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore accusamus molestias nesciunt provident quasi veniam distinctio, cumque voluptatem aliquam quos sequi repellat aperiam dignissimos explicabo illo nostrum blanditiis atque.' publishedDate={new Date()} title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
      <BlogCard authorName='Peter V.' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore accusamus molestias nesciunt provident quasi veniam distinctio, cumque voluptatem aliquam quos sequi repellat aperiam dignissimos explicabo illo nostrum blanditiis atque.' publishedDate={new Date()} title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' />
      <BlogCard authorName='Peter V.' content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore accusamus molestias nesciunt provident quasi veniam distinctio, cumque voluptatem aliquam quos sequi repellat aperiam dignissimos explicabo illo nostrum blanditiis atque.' publishedDate={new Date()} title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.' /> */}

      </div>
    </>

  )
}

export default MyBlogs
