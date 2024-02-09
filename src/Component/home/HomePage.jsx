
import { useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Navbar from './navbar';
import { Link} from 'react-router-dom';
import { ContextApp } from '../Context/ContextApp';







function HomePage() {

        const {state, dispatch} = useContext(ContextApp)

    // const [search, setSearch] = useState('')


    // const changeToggle =(e)=>{
    //     setSearch(e.target.value)
    // }

    
 useEffect(()=>{

        const url ='https://fakestoreapi.com/products'
    
    const data = async()=>{
        try{
            const respones = await axios.request(url)
            
                dispatch({type:'SET_SHOW_DATE', payload:respones.data})
           
        }
        catch (error){
             
                console.error('Error fetching data:', error);
            
        }

        // if(search !== ''){
            
        // }
        // else {
        //     setShowDate([])
        // }
    }
    data()

 },)
  return (

    
    <div>
        <div>
            <Navbar/>
        </div>
        <div className="container grid grid-cols-4 gap-10 px-20 bg-stone-400">
            
                   
            {state.showDate.map((item) =>(
               
                 <div className=' auto w-60 mx-auto hover:shadow-2xl hover:translate-x-0'>
               
               <div key={item.id}>
                 
               <h1 className='font-bold text-center px-2 py-5 line-clamp-1'>{item.title}</h1>
                <img src={item.image} alt='' className='w-52 h-40 mt-5 ' />
                <h2 className='pl-3 mt-5 font-bold'>Rs {item.price}</h2>
                <p className='px-2 mt-5 line-clamp-3'>{item.description}</p>
                <Link to={`/ProductCart/${item.id}`} className='flex justify-center gap-5 mt-2'>
                    <button className='bg-yellow-600 text-white hover:bg-green-500 px-3 py-2 rounded w-full font-bold '>BUY</button>
                    </Link>
                <Link to={`/product/${item.id}`} className='flex justify-center gap-5 mt-2'>
                    <button className='bg-blue-600 text-white hover:bg-blue-600 px-3 py-2 rounded w-full font-bold '>Detail</button>
                    </Link>    
               </div>
                
                
            </div>
               
            ))

            }
            
        </div>
      
    </div>
  )
}

export default HomePage
