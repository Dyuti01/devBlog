import React from 'react'
import Appbar from '../components/Appbar';

const Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Appbar />
      <div className='min-h-screen w-full flex flex-col items-center mt-[70px] bg-gray-100'>
        {arr.map((b) => {
          return (
            <SkeletonBlog key={b} />
          )
        })}
      </div>
    </>
  )
}

export default Shimmer

const SkeletonBlog = () => {
  return (
    <div className='blogCard flex flex-col w-1/2 min-h-[50px] pt-[20px] px-5 rounded-lg gap-[8px] border-b-[2px] pb-[20px]'>
      <div className='flex gap-[15px] items-center'>
        <div className={`relative inline-flex items-center justify-center h-6 w-6 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-200 animate-pulse`}>
          <span className="font-medium text-gray-400 dark:text-white">{""}</span>
        </div>


        <div className="flex gap-[3px] items-center justify-center text-sm">
          <div>{""}</div>
          <div className="time text-slate-400"></div>
        </div>

      </div>
      <div className="body bg-gray-100">
        <div className="about text-2xl font-bold w-[200px] h-[4px]"></div>
        <div className="content text-slate-500 flex flex-col gap-[5px] bg-gray-100">
          <div className='w-[50%] h-[15px] bg-slate-200 rounded-xl animate-pulse'></div>
          <div className='w-[70%] h-[15px] bg-slate-200 rounded-xl animate-pulse'></div>
        </div>
      </div>

    </div>
  )
}
