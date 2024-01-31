import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {ToastContainer, toast } from 'react-toastify';


function ForgetFormPage() {

  const[password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const[isOldPassword, setIsOldPassword] = useState(false)
  const[isNewPassword, setIsNEwPassword] = useState(false)
  const[isConfirmPassword, setIsConfirmPassword] = useState(false)

  

  const HandlePassword = (name, value)=>{
    setPassword((prev)=> ({...prev, [name]:value }))
  }

  // const handleChange = (e) => {
    
  //   setPassword({...password, [e.target.name]: e.target.value})
  
  // }


  const PasswordVisibility = (name)=>{

    if (name === 'oldPassword') {
      setIsOldPassword((prev) => !prev);
    } 
    else if (name === 'newPassword') {
      setIsNEwPassword((prev) => !prev);
    }
    else if (name === 'confirmPassword') {
      setIsConfirmPassword((prev) => !prev);
    }

}

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password.newPassword)) {

      console.log('Password regex test failed');
      return toast("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.");
      
    }

  
    if(password.oldPassword === password.confirmPassword){
      return toast("Old and new password can't be same")
    }
    if(password.password !== password.confirmPassword) return toast("Password don't match")
    
  
    
    
  };


  return (
    <>
    
    <div className="container text-center border-2 bg-gradient-to-r bg-stone-300 flex flex-col space-y-2 w-fit h-[23rem] m-auto px-10 shadow-lg rounded-xl relative top-20">

        <div className='py-5'>
        <h1 className='font-medium text-3xl py-2  '>Reset Password</h1>
        
        </div>


        <form onSubmit={handleSubmit} className='space-y-5'>
        
            <div>
            <input 
            className='rounded px-9 py-1 outline-none relative'
            value={password.oldPassword}
            onChange={(e) => HandlePassword('oldPassword', e.target.value)} 
  
             type={isOldPassword?'text':'password'}
             placeholder='Old Password'/>
             <span onClick={()=>PasswordVisibility('oldPassword')} className='absolute right-12 mt-2 hover:cursor-pointer '>{isOldPassword? <FaEye/>:<FaEyeSlash/> }</span>
             
            </div>


            <div>
            <input className='rounded px-9 py-1 outline-none '
            value={password.newPassword}
            onChange={(e) => HandlePassword('newPassword', e.target.value)}
             type={isNewPassword?'text':'password'}
              placeholder='New Password'/>
             <span onClick={()=>PasswordVisibility('newPassword')} className='absolute right-12 mt-2 hover:cursor-pointer '>{isNewPassword? <FaEye/>:<FaEyeSlash/> }</span>             
            </div>


            <div>
            <input className='rounded px-9 py-1 outline-none '
            value={password.confirmPassword}
            onChange={(e) => HandlePassword('confirmPassword', e.target.value)}           
             type={isConfirmPassword?'text':'password'}
             placeholder='Confirm Password'/>
            <span onClick={()=>PasswordVisibility('confirmPassword')} className='absolute right-12 mt-2 hover:cursor-pointer '>{isConfirmPassword? <FaEye/>:<FaEyeSlash/> }</span>
          
            </div>
        
        <div className="submitbtn mt-8">
        <button type='submit' className='bg-blue-600 font-medium  text-white py-1 px-4 rounded-2xl hover:bg-blue-500' >  <ToastContainer/>Submit</button>
        
        </div>
        
        </form>

    </div>
        
      

    </>
  )
}

export default ForgetFormPage
