import React, { useContext } from 'react'
import { MdSearch } from "react-icons/md";
import LoginPage from '../login';
import { IoMdCart } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { ContextApp } from '../Context/ContextApp';

import HomePage from './HomePage';
import ProductCart from '../CartPage/CartPage';




function Navbar(props) {

    const {state} = useContext(ContextApp)


    const {id} = useParams()

  return (
    <div>
        <nav className='bg-stone-600 px-5 py-10 flex justify-between items-center'>
            <div>
                <p className='text-2xl text-white'><Link to='/' element={<HomePage/>}>Product</Link></p>
            </div>
            <div className='flex justify-center items-center -space-x-6'>
            <input className='w-96 px-2 py-1 rounded'
             type='search' 
             placeholder='Search...'
             onChange={props.changeToggle}/>
           <span className='text-xl cursor-pointer'> <MdSearch /></span>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex'>
                <div className="cart-icon text-white text-3xl">
                    <Link to={`/ProductCart/${id}`} element={<ProductCart/>}> <IoMdCart /> </Link>
                    
                </div>
                <div>

                    {/* {!state.showNumber ?<h1>{state.number}</h1> : null} */}
                    
                    {/* {cart.length} */}
                    

                   {!state.showNumber? <h1>{state.number}</h1>:null}
                    
                </div>
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
