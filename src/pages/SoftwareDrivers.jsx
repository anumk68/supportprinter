

import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Printer from "../assets/images/Printer.svg"
import Laptop from "../assets/images/Laptop.svg"
import Desktop from "../assets/images/desktop.png"
import Poly from "../assets/images/poly.svg"
import Other from "../assets/images/other.png"

const SoftwareDrivers = () => {
    const navigate=useNavigate();

  
    return (
        <>
        <div className=' mx-auto Drive_main py-8'>
        <div className='container breadcrum_drive mb-6'>
            <ul className='flex gap-3'>
              <li className='flex gap-2'>
                <span className='text-center text-white bg-black rounded-full h-6 w-6'>1</span>
                <span className='tracking-[0.5px]'>Identify</span>
              </li>
              <li className="text-gray-400">{<FaChevronRight />}</li>
              <li className='flex gap-2'>
                <span className='text-center text-[#737373] border border-[#737373] rounded-full h-6 w-6'>2</span>
                <span className='hidden sm:block outline-none text-sm tracking-[1px]'>Download</span>
              </li>
              <li className="text-gray-400">{<FaChevronRight/>}</li>
              <li className='flex gap-2'>
                <span className='text-center text-[#737373] border border-[#737373] rounded-full h-6 w-6'>3</span>
                <span className='hidden sm:block outline-none text-sm tracking-[1px]'>Install</span>
              </li>
            </ul>
        </div>

        <div className='bg-[#0278ab0d] py-4 mb-6'>
        <div className='container'>
        <p className='tracking-[0.5px]'>Already have an HP account? Select from the products you own.

        <Link to="/signin" className="text-blue-400 hover:underline mx-2">Sign in</Link>
         /
         <Link to="/createaccount" className="text-blue-400 hover:underline mx-2">Create an account </Link>
         
          {/* <Link to="/emailverify" className="text-blue-400 hover:underline mx-2">Email Verify </Link> */}
        </p>
        </div>
        </div>
        
        <div className='container mb-5'>
          <h1 className='text-[#1c7a17] text-xl sm:text-2xl '>Welcome to HP Software and Drivers</h1>
          <h2 className='text-2xl sm:text-4xl mb-10 py-4'>Select your product type below</h2>
        </div>


        <div className='container mb-6'>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
    <div onClick={() => navigate('/drivers/printers')} className='py-10 rounded-2xl hover:shadow-lg transition hover:bg-[#f8f8f8] shadow-[0_4px_16px_#2121211a] cursor-pointer'>
      <div className='flex justify-center mb-5'>
        <img src={Printer} alt="printer" className="h-14 w-14 " />
      </div>
      <p>Printer</p>
    </div>

    <div onClick={() => navigate('/laptop')} className='py-10 shadow-[0_4px_16px_#2121211a] rounded-2xl hover:shadow-lg transition hover:bg-[#f8f8f8] cursor-pointer'>
      <div className='flex justify-center mb-5'>
        <img src={Laptop} alt="printer" className="h-14 w-14 "/>

      </div>
      <p>Laptop</p>
    </div>

    <div onClick={() => navigate('/desktop')} className='py-10 shadow-[0_4px_16px_#2121211a] rounded-2xl hover:shadow-lg transition hover:bg-[#f8f8f8] cursor-pointer'>
      <div className='flex justify-center mb-5'>
        <img src={Desktop} alt="desktop"  />

      </div>
      <p>Desktop</p>
    </div>

    <div onClick={() => navigate('/drivers/printers')} className='py-10 shadow-[0_4px_16px_#2121211a] rounded-2xl hover:shadow-lg transition hover:bg-[#f8f8f8] cursor-pointer'>
      <div className='flex justify-center mb-5'>
        <img src={Poly} alt="poly"  />

      </div>
      <p>Poly</p>
    </div>

    <div onClick={() => navigate('/drivers/printers')} className='py-10 shadow-[0_4px_16px_#2121211a] rounded-2xl hover:shadow-lg transition hover:bg-[#f8f8f8] cursor-pointer'>
      <div className='flex justify-center mb-5'>
      <img src={Other} alt="other"/>
      </div>
      <p>Other</p>
    </div>
  </div>
</div>
    </div>
        </>
    );
}

export default SoftwareDrivers;
