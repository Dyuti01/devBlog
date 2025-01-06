import React, { useEffect } from 'react'
import { UseBlog } from '../hooks/index'
import { useParams } from 'react-router';
import { BlogParam } from './MyBlogs';
import Avatar from '../components/Avatar';
import BlogShimmer from './BlogShimmer';
import Appbar from '../components/Appbar';

const Blog = () => {
  const { blogId } = useParams();
  const { blog, loading } = UseBlog({ blogId: blogId || "" })
  if (!blog) {
    return (
      <BlogShimmer/>
    )
  }
  return (
    <>
    <Appbar/>
    <div className='flex justify-center min-h-screen w-full pt-32 relative top-0 bg-gray-100'>
      <div className='flex justify-center w-[80%]'>
        <div className='flex flex-col w-[50%] gap-[10px]'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-3xl font-bold'>{blog.title}</h1>
            <span className='text-sm font-medium text-slate-500 w-full'>Posted on {new Date(blog.createdAt).toUTCString().split(' ').slice(1, 4).join(' ')}</span>
          </div>
          <span className='text-sm font-normal flex items-center'>{blog.content}</span>
        </div>

        <div className="authorInfo w-[30%] flex flex-col gap-[5px] items-center">
          <span className='font-medium text-slate-500 flex w-[50%]'>Author</span>
          <div className='flex gap-2 items-center'>
            <Avatar authorName={blog.author.firstName + " " + blog.author.lastName} size='small' />
            <div className="authorAbout flex flex-col w-[200px]">
              <span className='text-xl font-semibold'>{blog.author.firstName + " " + blog.author.lastName}</span>
              <span className="text-sm font-medium text-slate-500">
                Pre-final, IIT(ISM) Dhanbad, Full-stack developer
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default Blog
