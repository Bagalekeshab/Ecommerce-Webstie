import React, { useState } from 'react'



function SignUpPage() {

        const[name,setName] = useState('')
        const[email, setEmail] = useState('')
        const[password,setPassword] = useState('')
        const[isEmailValid, setIsEmailValid] = useState(false)

        const toggleName = (e)=>{
            setName(e.target.value)
            
        }
        
        const toggleEmail = (e) =>{
          setEmail(e.target.value)

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const isValid = emailRegex.test(e.target.value);

          setIsEmailValid(isValid)


          
        }

        const togglePassword = (e) =>{
          setPassword(e.target.value)
         
        }

        const handleSubmit =(e)=>{
          e.preventDefault();
          
          if(isEmailValid){
            console.log(email);
    } else {
      
      console.error('Invalid email address');
    }
    console.log(name,password)

            
          
          
            


        }





 

  return (

    <div>
      <div className="container bg-stone-300 w-96 h-96 mx-auto mt-20 rounded shadow-2xl"> 
        <h1 className='text-3xl text-center pt-5 font-bold text-stone-600'>Sign Up</h1>
        <div className='flex h-2/3 mt-5'>
        <form onSubmit={handleSubmit} className="  leftbox space-y-5 px-1  mx-5 flex flex-col mt-10 p-5">
          <div>
          <input className='rounded px-3 py-1' 
            onChange={toggleName}
          type='text' placeholder='Full Name...'/>
          </div>

          <div>
          <input className='rounded px-3 py-1'
           onChange={toggleEmail}
           type='text' 
           placeholder='example@gmail.com'/>
          </div>

          <div>
          <input className='rounded px-3 py-1'
           onChange={togglePassword}
           type='password' 
           placeholder='Password'/>
          </div>

          <div className='mx-auto'>
            <button type='submit' className='bg-blue-600 rounded px-3 py-1'>Next</button>
            
          </div>

        </form>
        <div className="rightbox  mt-14">
          <p className='text-xl text-slate-500'>Already have an
             Account?<span className='text-blue-800 underline cursor-pointer'>Log in</span></p>
        </div>

        </div>
      </div>
      
    </div> 
  )
}

export default SignUpPage
