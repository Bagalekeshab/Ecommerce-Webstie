import React, { useEffect, useState } from 'react'
import Navbar from '../home/navbar'
import { useParams, } from 'react-router-dom'
import axios from 'axios';


function ProductProject() {

    const {id} = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (

    <div>
      <div>
      <Navbar/>
      </div>
      <div>
      {product ? (
        <div className='flex border-2 gap-1 mx-auto mt-20 w-3/4 h-96 px-10 py-5'>
          
          <div className='w-full'>
          <img className='w-screen' src={product.image} alt='' />
          <p className='text-center bg-green-600 text-white font-medium'>Price: Rs {product.price}</p>
          </div>
          <div>
          <h1 className='text-3xl text-center font-bold'>{product.title}</h1>
          <p className='mt-5 px-5 py-5 line-clamp-2 mx-2'><span className='font-bold'>Description:</span> {product.description}</p>
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
