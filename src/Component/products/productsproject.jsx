import React, { useContext, useEffect } from 'react'
import Navbar from '../home/navbar'
import { useParams, } from 'react-router-dom'
import axios from 'axios';
import { ContextApp } from '../Context/ContextApp';




function ProductProject() {

  const {state, dispatch} = useContext(ContextApp)


  // const clickAddCart = ()=>{
  //   // if (state.product ===)
  //   if(!state.showNumber===true){
  //     dispatch({type:'SET_SHOW_NUMBER', payload:state.number})
      
  //   }
    
  

//  const clickAddProduct=()=>{

//   dispatch({type:'ADD_CART', payload:{id}})      

// }


  const clickPositive =()=>{

    console.log(state.number + 1);
    dispatch({type:'SET_NUMBER', payload:state.number+1})

  }
  const clickNegative =()=>{
    
    console.log(state.number - 1);
    dispatch({type:'SET_NUMBER', payload:state.number-1})

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
  }, );

  return (

    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      {state.product? (
        <div className='flex border-2 mx-auto px-14 py-5'>
          <div className='left-box h-auto '>
          <img src={state.product.image} alt='' />
          <p className='text-center mx-auto bg-green-600 text-white font-medium'>Price: Rs {state.product.price}</p>
          </div>
          <div className='right-box py-5 text-center'>
          
          <h1 className='text-3xl font-bold'>{state.product.title}</h1>
          <div className='space-x-4 mt-10 '>
              <button className='bg-yellow-600 w-52 text-xl px-10 rounded font-medium text-white py-1'>BUY</button>
              <button className='bg-blue-600 w-52 text-xl px-10 rounded font-medium text-white py-1'>Go TO CART</button>
              </div>
          <p className='mt-5 line-clamp-2 mx-2'><span className='font-bold'>Description:</span> {state.product.description}</p>

          <div className='flex justify-center gap-5 mt-5'>
            <p className='font-medium'>Quantity:</p>
            <button onClick={clickNegative} className='bg-red-500 px-5 text-white text-xl'>-</button>{state.number}<button onClick={clickPositive} className='bg-green-500 px-5 text-white text-xl'>+</button>
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
