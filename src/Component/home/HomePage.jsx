import React from 'react'
import { useState } from 'react';
import { MdSearch } from "react-icons/md";
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from '../login';
// import { useLayoutEffect } from 'react';



function HomePage() {

    const[showDate, setShowDate] = useState([])
    const [search, setSearch] = useState('')

    const changeToggle =(e)=>{
        setSearch(e.target.value)
    }

    
 useEffect(()=>{

        const url ='https://fakestoreapi.com/products'
    
   

    const data = async()=>{

    //     const options = {
    //         method: 'GET',
    //         url: 'https://therundown-therundown-v1.p.rapidapi.com/affiliates',

    //      headers: {
    //    'X-RapidAPI-Key': 'eca07ca807msh2201e9665259a5ep180f10jsnf9337e1d2339',
    //    'X-RapidAPI-Host': 'therundown-therundown-v1.p.rapidapi.com'
    // }
    //     }
        
        try{
            const respones = await axios.request(url)
            
                setShowDate(respones.data)
           
        // const response = await fetch(url);
        // const data = await response.json()
        // console.log(data)
        }
        catch (error){
             
                console.error('Error fetching data:', error);
            
        }

        if(search !== ''){
            
        }
        else {
            setShowDate([])
        }
    }
    data()

 },)
        
  
    

  return (
    <div>
        <nav className='bg-stone-600 px-5 py-10 flex justify-between items-center'>
            <div>
                <p className='text-2xl text-white'>Basketball</p>
            </div>
            <div className='flex justify-center items-center -space-x-6'>
            <input className='w-96 px-2 py-1 rounded'
             type='search' 
             placeholder='Search...'
             onChange={changeToggle}/>
           <span className='text-xl cursor-pointer'> <MdSearch /></span>
            </div>
            <div>
                <p className='text-white text-xl '>
                    <Link to='/login' element={<LoginPage/>}>Login</Link>
                </p>
            </div>
        </nav>
        <div className="container grid grid-cols-3 gap-2 px-10">
            
                   
            {showDate.map((item,index) =>(
               
                 <div key={index.id} className='border-2 h-auto w-60 mx-auto'>
                
                <h1 className='font-bold text-center px-2 bg-black text-white py-5'>{item.title}</h1>
                <img src={item.image} alt='' className='w-52 h-40 mt-3' />
                <h2 className='pl-5 mt-5 font-bold bg-cyan-500'>Rs {item.price}</h2>
                <p className='px-2'>{item.description}</p>
                
                
            </div>
               
            ))

            }
            
        </div>
      
    </div>
  )
}

export default HomePage
