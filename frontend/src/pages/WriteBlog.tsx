import React, { useState } from 'react'
import Appbar from '../components/Appbar'
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router';
import axios from 'axios';

const WriteBlog = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <Appbar />
      <div className='WriteBlog flex mt-[70px] min-h-screen justify-center' >
        <div className='w-[70%] flex flex-col mt-12 gap-2'>
          <input type="text" className="title w-full font-serif px-10 text-6xl focus:outline-none" placeholder='Title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }} />
          {/* <input type="text" className="title w-full font-serif px-10 min-h-[70px] text-2xl break-words" placeholder='Tell your story...' /> */}
          {/* <textarea id="message" rows={4} className="block p-2.5 text-gray-900 bg-gray-50 rounded-lg border:none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black w-full font-serif px-10 min-h-[70px] text-2xl focus:outline-none" placeholder="Tell your story..."></textarea> */}
          <TextEditor handleChange={(e) => {
            setContent(e.target.value)
          }} />
          <button onClick={async () => {
            const res = await axios.post(`${BACKEND_URL}/api/v1/blog/createPost`, { title, content }, { withCredentials: true });
            navigate('/myBlogs');
          }}
            type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 w-[130px] justify-center">
            Publish post
          </button>


        </div>
      </div>
    </>

  )
}

export default WriteBlog

function TextEditor({ handleChange }: { handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }) {
  return (

    <form>
      <div className="w-full mb-4 border-none border-gray-200 rounded-lg bg-gray-50 dark:bg-white dark:border-gray-600">
        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
            {/* <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
              <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
                <span className="sr-only">Upload image</span>
              </button>

            </div>
            <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
              <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                  <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Download</span>
              </button>
            </div> */}
          </div>

        </div>
        <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-800">
          <label htmlFor="editor" className="sr-only">Publish post</label>
          <textarea id="editor" rows={8} className="block w-full px-0 text-gray-800 bg-white border-0 dark:bg-800 focus:ring-0 dark:text-black dark:placeholder-gray-400 focus:outline-none text-xl font-serif" placeholder="Tell your story..." onChange={(e) => handleChange(e)} required ></textarea>
        </div>
      </div>
    </form>

  )
}
