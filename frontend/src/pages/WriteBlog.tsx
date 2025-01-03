import React from 'react'
import Appbar from '../components/Appbar'

const WriteBlog = () => {
  return (
    <>
      <Appbar />
      <div className='WriteBlog flex mt-[70px] min-h-screen justify-center' >
        <div className='w-[70%] flex flex-col mt-12 gap-2'>
          <input type="text" className="title w-full font-serif px-10 text-6xl focus:outline-none" placeholder='Title' />
          {/* <input type="text" className="title w-full font-serif px-10 min-h-[70px] text-2xl break-words" placeholder='Tell your story...' /> */}
          <textarea id="message" rows={4} className="block p-2.5 text-gray-900 bg-gray-50 rounded-lg border:none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black w-full font-serif px-10 min-h-[70px] text-2xl focus:outline-none" placeholder="Tell your story..."></textarea>


        </div>
      </div>
    </>

  )
}

export default WriteBlog
