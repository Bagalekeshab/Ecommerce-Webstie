import React from 'react'
import { MdSearch } from "react-icons/md";
import LoginPage from '../login';
import { IoMdCart } from "react-icons/io";
import { Link } from 'react-router-dom';




function Navbar(props) {
  return (
    <div>
        <nav className='bg-stone-600 px-5 py-10 flex justify-between items-center'>
            <div>
                <p className='text-2xl text-white'>Product</p>
            </div>
            <div className='flex justify-center items-center -space-x-6'>
            <input className='w-96 px-2 py-1 rounded'
             type='search' 
             placeholder='Search...'
             onChange={props.changeToggle}/>
           <span className='text-xl cursor-pointer'> <MdSearch /></span>
            </div>
            <div className='flex items-center gap-5'>
                <div className="cart-icon text-white text-3xl">
                    <span><Link to='/login' element={<LoginPage/>}><IoMdCart /></Link></span>
                </div>
                <p className='text-white text-2xl '>
                    <Link to='/login' element={<LoginPage/>}>Login</Link>
                </p>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
