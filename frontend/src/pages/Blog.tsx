import React, { useEffect } from 'react'
import { UseBlog } from '../hooks/index'
import { useParams } from 'react-router';
import { BlogParam } from './Blogs';
import Avatar from '../components/Avatar';

const Blog = () => {
  const { blogId } = useParams();
  const { blog, loading } = UseBlog({ blogId: blogId || "" })
  if (!blog) {
    return (
      <div>
        Loading
      </div>
    )
  }
  return (
    <div className='flex justify-center items-center min-h-screen w-full'>
      <div className='flex justify-center w-[80%]'>
        <div className='flex flex-col w-[50%] gap-[10px] justify-center'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-5xl font-bold w-1/2'>{blog.title}</h1>
            <span className='text-sm font-medium text-slate-500'>Posted on {new Date(blog.createdAt).toUTCString().split(' ').slice(1, 4).join(' ')}</span>
          </div>
          <span className='text-sm font-normal'>{blog.content}</span>
        </div>

        <div className="authorInfo w-[30%]flex flex-col gap-[5px]">
          <span className='font-medium text-slate-500'>Author</span>
          <div className='flex gap-2 items-center'>
            <Avatar authorName={blog.author.firstName + " " + blog.author.lastName} size='small' />
            <div className="authorAbout flex flex-col">
              <span className='text-xl font-semibold'>{blog.author.firstName + " " + blog.author.lastName}</span>
              <span className="text-sm font-medium text-slate-500">
                Pre-final, IIT(ISM) Dhanbad, Full-stack developer
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog
