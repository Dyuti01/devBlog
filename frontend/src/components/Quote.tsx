import React from 'react'
import { Link } from 'react-router'

const Quote = () => {
  return (
    <>
    <div className='quote bg-slate-100 w-1/2 min-h-screen hidden sm:flex flex-col justify-center items-center justify-items-center'>

      <div className='w-[70%] flex flex-col gap-3'>

        <span className='font-bold text-xl'>"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum rerum optio ex id aspernatur pariatur, est quo aperiam libero voluptate aut vitae suscipit quia cum eaque adipisci corporis iure error"</span>
        <div className=' flex flex-col'>
        <span className='authorName font-medium'>Dyuti Ballav Paul</span>
        <span className='authorName text-slate-500 text-[13px]'>Pre-final, IIT(ISM) Dhanbad </span>
        </div>

      </div>

    </div>
    </>
    
  )
}

export default Quote
