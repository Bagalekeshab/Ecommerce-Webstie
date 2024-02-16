import React, { useContext, useEffect, } from 'react'
import Navbar from '../home/navbar'
import { useParams, } from 'react-router-dom'
import axios from 'axios';
import { ContextApp } from '../Context/ContextApp';
import Rating from './Rating';





function ProductProject() {

  const {state, dispatch, addToCart} = useContext(ContextApp)




 
 const handleAddProduct=(value)=>{

  const product = {...value, quantity: state.number}
  addToCart(product)
   
 }
    const {id} = useParams();
  useEffect(() => {
    
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);


        dispatch({type:'SET_PRODUCT', payload:response.data});
        
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  },[id, dispatch] );

  return (

    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      {state.product? (
        <div>
        <div className='box flex flex-row w-3/5 mx-auto mt-10 h-96 py-5 '>
        <div className='w-full h-auto'>
        <img className='object-fill h-80 w-96 ' src={state.product.image} alt='' />
        </div>
        <div className='text-center '>
          <h2 className='uppercase font-medium text-2xl opacity-25'>{state.product.category}</h2>
        
        <h1 className='text-3xl font-bold mt-5'>{state.product.title}</h1>
        <div className='flex gap-4 justify-center py-1.5'>
         <p className='opacity-80'>Rating: {state.product.rating.rate}</p>
         <Rating value={state.product.rating.rate} maxValue={5} />
          </div>

        <p className='mt-3 line-clamp-2 px-10 opacity-75'><span className='font-bold'>Description:</span> {state.product.description}</p>

        <div className='space-x-4 mt-10 flex'>
        <p className='font-medium text-3xl'>${state.product.price}</p>
          
            <button className='bg-yellow-700 w-52 text-xl px-10 rounded font-medium text-white py-1'>BUY</button>
            <button onClick={()=>handleAddProduct(state.product)} className='bg-blue-600 w-52 text-xl px-10 rounded font-medium text-white py-1'>
             GO TO CART 
            
            </button>
            </div>

      
        </div>

        </div>
        
        
        
      </div>
    ) : (
      <p>Loading product details...</p>
      )}

        
      </div>
      
    </div>
  )
}

export default ProductProject
