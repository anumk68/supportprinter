import { useNavigate } from 'react-router-dom';
import TailwindCarousel from "../components/TailwindCarousel";
import { Link } from 'react-router-dom';
import React from 'react';

// Importing images
import ContactHome from "../assets/images/contact_home.avif";
import RepairImg from "../assets/images/Repair.png";
import WarrantyImg from "../assets/images/Warranty.png";
import Printersetup from "../assets/images/printersetup.svg"
function ContactAgent() {
  const navigate = useNavigate(); 
  return (
    <div className='font-hpsimplifiedlight'>
      <div className='container justify-center flex items-center gap-20'>
        <div>
          <img src={ContactHome} alt="Contact Home" />
        </div>

        <div className='w-[300px]'>
          <h1 className='text-[30px] leading-tight'>Let's get you some help</h1>
          <p className='mb-4'>
            Sign in and identify your product to see available support.
            Some contact options require an active warranty.
          </p>
          <p className='text-[#165dba] hover:underline mb-4'>Why should I sign in?</p>

          <div className='flex gap-5 mb-6'>
            <Link
              to="/signin"
              className="bg-[#165dba] text-white px-4 py-1 rounded-sm hover:bg-[#114284]"
            >
              Sign in
            </Link>

            <Link
              to="/createaccount"
              className="border border-[#165dba] text-[#165dba] hover:text-[#114284] px-3 py-1 rounded-sm hover:border-[#114284]"
            >
              Create an account
            </Link>
          </div>

         <Link 
            to="/contact/select-product" 
            className='text-[#165dba] hover:text-[#114284] hover:underline text-base cursor-pointer'>
            Get started before signing in
            </Link>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-gradient-to-t from-[#59c7b57d] to-[#0095d47d] w-full py-10">
        <div className='container'>
          <div className='text-center mb-10'>
            <h2 className='text-2xl'>Quick links</h2>
          </div>

          <div className='flex justify-center gap-6 flex-wrap cursor-pointer pb-8'>
            <div
              onClick={() => navigate('#')}
              className='bg-white rounded-xl shadow-md w-64 p-6 hover:shadow-lg transition hover:scale-105 text-[#195ebb] hover:underline text-center'
            >
              <div className='flex flex-col items-center'>
                <img src={RepairImg} alt="Repair" className='h-15 mb-4' />
              </div>
              <div>Look up a failure ID code and start a repair</div>
            </div>

            <div
              onClick={() => navigate('#')}
              className='bg-white rounded-xl shadow-md w-64 p-6 hover:shadow-lg transition hover:scale-105 text-[#195ebb] hover:underline text-center'
            >
              <div className='flex flex-col items-center'>
                <img src={WarrantyImg} alt="Warranty" className='h-15 mb-4' />
              </div>
              <div>Check service order</div>
            </div>

            <div
              onClick={() => navigate('/printersetup')}
              className='bg-white rounded-xl shadow-md w-64 p-6 hover:shadow-lg transition hover:scale-105 text-[#195ebb] hover:underline text-center'
            >
              <div className='flex flex-col items-center'>
                <img src={Printersetup} alt="Printers" className='h-15 mb-4' />
              </div>
              <div>Printer Setup</div>
            </div>
          </div>
        </div>
      </div>
      <TailwindCarousel />
    </div>
  );
}

export default ContactAgent;
