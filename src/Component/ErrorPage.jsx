import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const ErrorPage = () => {
  return (
    <div className='bg-slate-600 p-14'>
        <div>
      <img className=' h-96 mx-auto' src="/images/errorlogo.png" alt="img" />
      
    </div>
        <div className='mt-5 text-center space-y-2'>
            <h1 className=' text-3xl font-bold'>404-PAGE NOT FOUND</h1>
            <p className='text-slate-950'>...maybe the page you're looking for is not found or never existed.
        
            </p>

            <button className='bg-black text-white px-5 py-2 rounded-2xl gap-3 flex items-center mx-auto hover:bg-slate-400 hover:text-black '>Back to Home <FaArrowRightLong /></button>

        </div>
    </div>
  )
}

export default ErrorPage
