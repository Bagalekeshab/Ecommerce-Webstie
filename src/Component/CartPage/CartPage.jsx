import React, { useContext, useEffect, useState, } from 'react'
import Navbar from '../home/navbar'
import { ContextApp, } from '../Context/ContextApp'
import { Link, useParams } from 'react-router-dom'
import HomePage from '../home/HomePage'
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";


function ProductCart() {



  const { state, dispatch } = useContext(ContextApp)

  

  const { id } = useParams();

  const handleProducNumber = (operation) => {

    if (operation === 'increase') {

      dispatch({ type: 'SET_NUMBER', payload: state.number + 1 })

    } else{
      dispatch({ type: 'SET_NUMBER', payload: state.number - 1 })
    }



  }

  // const updatedCart = state.cart.map(item => ({
  //   ...item,
  //   totalPrice: item.price * item.quantity
  // }));

  if (state.product){
   const taxPrice = state.product.price * 0.12;
  const shippingPrice = state.product.price > 2000 ? 0 : 10;
  const totalPrices  = state.product.price + taxPrice + shippingPrice;
  


  // const taxPrice = ()=>{
  //   if(state.price)
  // }

  // dispatch({type:'UPDATE_CART', payload:state.product})



  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="Container w-3/4 mx-auto mt-10 flex flex-col justify-between">
        <div className="box1 flex justify-between bg-green-600 px-2 text-white">
          <div><p>Product</p></div>
          <div><p>Quantity</p></div>
          <div><p>SubTotal</p></div>
        </div>
        <div className='border-2'>


          <ul>
            {state.cart.map(item => (
              <li key={item.id}>

                {state.product ? (
                  <div>

                    <div className='border-2  '>
                      <div className="box2 border-2 flex justify-between items-center px-2 py-3">
                        <div>
                          <div className="div flex gap-2">
                            <img className='w-32' src={state.product.image} alt="" />
                            <p className='font-medium border-2 line-clamp-1 w-40 text-center mt-5'>{state.product.title}</p>
                          </div>
                        </div>
                        <div className='flex gap-3'>
                          <p></p>
                          <button onClick={() => handleProducNumber('decrease')}
                            className='bg-gray-200 px-5 text-xl'><GrFormSubtract />
                          </button>{state.number}<button onClick={() => handleProducNumber('increase')} className='bg-gray-200 px-5 text-xl'><IoMdAdd /></button>

                        </div>
                        <div className='font-bold'>
                          <h1>Rs{state.product.price}</h1>
                        </div>
                      </div>

                    </div>
                    

                  </div>

                ) : (
                  <p>Your Cart Page is Empty</p>
                )}
              </li>
              
            ))}
            <div className='text-end font-medium'>
                    <p>Product Price: {state.product.price}</p>
                    <p>Shipping Cost Price:{shippingPrice}</p>
                          <p>Tax Price:{taxPrice}</p>
                      <h1>Total:$ {totalPrices} </h1>
                    </div>
            </ul>
            </div>
            
                <div className="btn flex justify-center gap-4 mt-5">
                <button className='bg-green-600 px-2 py-1 text-white rounded'>
            <Link to='/' elements={<HomePage />}>Add Other</Link>
          </button>
          <button className='bg-blue-600 px-2 py-1 text-white rounded'>Continue</button>
                </div>
        
     
           </div >
        


      

    </div >

  )
                }
}

export default ProductCart
