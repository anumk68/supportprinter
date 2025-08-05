
import React from 'react'
import { useNavigate } from 'react-router-dom';


 const Signin = () => {
  const navigate = useNavigate();
  return (

    <div className='flex min-h-screen items-center justify-center bg-gray-200'>
      <div className='bg-white rounded-md w-[480px] h-[580px] p-8'>
        
        <div>
          <img src="/hp-logos.png" alt="Logo" className="h-10 w-10 mb-4" />
        </div>
        
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl md:text-4xl font-normal'>Sign in</h1> 
          <div onClick={() => navigate('/createaccount')} className='text-[rgb(41,115,168)] hover:underline mx-2 md:text-sm text-xs'>Create an account</div>
        </div>
       
        <div>
         <input type="text" placeholder="Username or Email Address" className="mt-4 border border-black w-full p-3 rounded-xl focus:border-[rgb(16,115,171)] focus:border-2 focus:outline-none transition-colors mb-4"
/>
        </div>
        
         <div className='flex justify-end mb-4'>
            <div onClick={()=>navigate('/signmobile')}  className='text-[rgb(41,115,168)] md:text-sm text-xs hover:underline mx-2'>
                Sign in with mobile number
            </div>
        </div>

        <button className='bg-[rgb(16,115,171)] text-white w-full p-3  rounded-xl mb-6 hover:bg-[rgb(1,89,133)]'>
          Use password
        </button>

        <div>
          <p className='text-center mb-6 text-[rgb(166,166,163)]'>or</p>
        </div>
        
        <button className='border border-[rgb(0,115,168)] w-full p-3 rounded-xl text-[rgb(0,115,168)] hover:bg-[rgb(206,239,254)] transition-colors mb-4'>
Send sign-in code
        </button>


        
          <label className='flex gap-3 items-center  mb-6' htmlFor="remember_user_mail">
<input type="checkbox" name="remember_user_mail" id="remember_user_mail" className='scale-155 font-thin' />Remember my username or email address
        </label>
        
        <div>
          <p className='text-center text-[rgb(0,115,168)] p-3 w-full hover:bg-[rgb(206,239,254)]  rounded-xl transition-colors '>Forgot your username?</p>
        </div>

      </div>

      
    </div>
  )
}

export default Signin

