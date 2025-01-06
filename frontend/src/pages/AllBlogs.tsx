import React, { useContext, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { UseAllBlogs, UseBlogs } from '../hooks'
import { Link, useNavigate } from 'react-router';
import Shimmer from './Shimmer';
import { BACKEND_URL } from '../config';
import UserContext from '../utils/UserContext';

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

const AllBlogs = () => {
  const navigate = useNavigate();
  const {isLoggedInUser, setIsLoggedInUser, setAuthorName}:any = useContext(UserContext);
    useEffect(()=>{
      // if(!isLoggedInUser){
      // navigate("/unauthorized")
      // }
      axios.get(`${BACKEND_URL}/api/v1/blog/check`, {withCredentials:true}).then((res)=>{
        setIsLoggedInUser(true)
        setAuthorName(localStorage.getItem("authorName")||"")
       }).catch((error)=>{
         setIsLoggedInUser(false);
         navigate("/unauthorized")
       })
    }, [])
  const { blogs, loading } = UseAllBlogs(setIsLoggedInUser);

  return (
    <>
      <Appbar />
      {loading && <Shimmer/>}
      <div className='min-h-screen w-full flex flex-col items-center mt-[70px] bg-gray-100'>
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

export default AllBlogs
