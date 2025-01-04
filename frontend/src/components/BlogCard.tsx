import React from 'react'
import { postInputParams } from '../../../common/src'
import Avatar from './Avatar';
import { Link } from 'react-router';

interface BlogCardProps {
  blogId:string,
  authorName: string,
  title: string,
  content: string,
  publishedDate: Date
}
// border-[2px] border-black
const BlogCard = ({blogId, authorName, title, content, publishedDate}: BlogCardProps) => {
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  publishedDate = new Date(publishedDate);
  return (
    <div className='blogCard flex flex-col w-1/2 min-h-[50px] pt-[20px] px-5 rounded-lg gap-[8px] border-b-[2px] pb-[20px]'>
      <Link to={`/blog/${blogId.toString()}`}>
        <div className='flex gap-[15px] items-center'>
          <Avatar authorName={authorName} size="small" />
          <div className="flex gap-[3px] items-center justify-center text-sm">
            <div >{authorName} &#183;</div>
            <div className="time text-slate-400 ">{month[publishedDate.getMonth()].slice(0, 3)} {publishedDate.getDate()}, {publishedDate.getFullYear()}</div>
          </div>

        </div>
        <div className="body">
          <div className="about text-2xl font-bold">{title}</div>
          <div className="content text-slate-500">{content.slice(0, 200) + "..."}</div>
        </div>
      </Link>

    </div>
  )
}

export default BlogCard


