import React from 'react'
import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import { UseAllBlogs, UseBlogs } from '../hooks'
import { Link } from 'react-router';
import Shimmer from './Shimmer';

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
  const { blogs, loading } = UseAllBlogs();

  return (
    <>
      <Appbar />
      {loading && <Shimmer/>}
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

export default AllBlogs
