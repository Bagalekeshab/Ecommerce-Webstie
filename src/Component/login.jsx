import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {Link} from 'react-router-dom'
import ForgetFormPage from './forgetform';
import SignUpPage from './signup';




function LoginPage() {

  const[name, setName] = useState('')
  const[password, setPassword] = useState('')
  //  const[error, setError] = useState('')
  const [showPassword, setShowPassword] = useState('')

  const notify = () => {

    if (name === '' || password === '') {
      console.log('Provide all value')
      
      
    }
    else{
      toast("Login Succesfully");
    }
  }

  

  const HandleName = (e) =>{
    setName(e.target.value)
    
    }

    const HandlePassword = (e) =>{
      setPassword(e.target.value)
      
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        

        console.log(name, password)
      
      }

      const TogglePasswordVisibility =()=> {
        setShowPassword(!showPassword)
      }
       

      //  const ErrorPassword = name === '' && 'error:passwordd
  
  return (
    <div> 
        <div className="container text-center border-2 bg-gradient-to-r from-slate-500 to-yellow-100 flex flex-col space-y-2 w-fit h-96 m-auto px-10 shadow-lg rounded-xl relative top-20">
          <p className='text-3xl font-medium py-4 text-white'>Login</p>

          <form onSubmit={handleSubmit} className='space-y-3 '>
            <div >
            <input className='px-3 py-2 rounded-2xl border-blue-50' onChange={HandleName} type='text' placeholder='username..'/>
              
            </div>
            
           <div>
           
            <input className='px-3 py-2 rounded-2xl border-blue-50'
                 onChange={HandlePassword} 
                 type= {showPassword ? 'text':'password'} 
                 value={password}
                 placeholder='password..'/>
            
           </div>
           <div className='space-x-1'>
           <input onClick={TogglePasswordVisibility}
                  checked={showPassword}
                  type='checkbox'></input>
           <label>Show Password</label>
           </div>
          
          <p><span className="underline italic cursor-pointer py-2">
          
          <Link to = '/forgetform' element={<ForgetFormPage/>}>Forget Password?</Link>
            
             </span></p>
          <br/>
          
          <div>
          <button type='submit' className='bg-black text-white py-1 px-7 rounded-2xl w-fit m-auto' onClick={notify}>Login</button>
          <ToastContainer/>
          </div>
          </form>
          <div className="icons flex space-x-3 pl-16  text-white text-2xl ">
          <a href='#'><FaGoogle /></a>
          <a href='#'><FaFacebook /></a>
          <a href='#'><FaGithub /></a>


          </div>
          <p className='py-1'>or <span className='text-blue-200 cursor-pointer '><Link to='/signup' element = {<SignUpPage/>}>Signup </Link></span></p>
        </div>
        
      
    </div>
  )
  }
export default LoginPage

