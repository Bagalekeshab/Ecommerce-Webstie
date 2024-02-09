import React, { useContext, useEffect,} from 'react'
import Navbar from '../home/navbar'
import { ContextApp,} from '../Context/ContextApp'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import HomePage from '../home/HomePage'


function ProductCart() {



  const { state, dispatch } = useContext(ContextApp)


  const { id } = useParams();

  useEffect(() => {

    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
       
        dispatch({ type:'ADD_ITEM', payload:response.data});
      }

      catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();

  });


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="Container w-3/4 mx-auto mt-10 border-2">
        <div className="box1 flex justify-between bg-green-600 px-2 text-white">
          <div><p>Product</p></div>
          <div><p>Quantity</p></div>
          <div><p>SubTotal</p></div>
        </div>
        <div>

          {}

          {state.product ? (

            <div>

             {state.cart.map((item,id)=>(
              <li key={id}>
                 <div className='border-2 h-96 '>
                <div className="box2 border-2 flex justify-between items-center px-2 py-3">

                  <div>
                    <div className="div flex gap-3">
                      <img className='w-28' src={item.product.image} alt="" />
                      <p className='font-medium border-2 line-clamp-1'>{state.product.title}</p>
                    </div>
                  </div>
                  <div className='border-2 h-10 w-12'>
                    <h1 className='text-center items-center font-bold'>{state.number}</h1>
                  </div>
                  <div className='font-bold'><p>Rs {state.product.price}</p>

                  </div>


                </div>

                <div className='text-end font-bold'>

                  <h2>Total: {state.product.price}</h2>
                </div>
                <div className='text-center mt-10 space-x-5'>
                  <button className='bg-green-600 px-2 py-1 text-white rounded'>
                    <Link to='/' elements={<HomePage />}>Add Other</Link>
                  </button>
                  <button className='bg-blue-600 px-2 py-1 text-white rounded'>Continue</button>
                </div>
              </div>
              </li>
             ))}
            </div>

          ) : (
            <p>Your Cart Page is Empty</p>
          )}
        </div>


      </div>
      
    </div>

  )}

export default ProductCart
