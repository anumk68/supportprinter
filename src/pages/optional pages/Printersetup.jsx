// import React from 'react'
import { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";


const carouselImages = [
  "src/assets/images/HP-Sustainability.webp",
  "src/assets/images/HPSA_Carousel.avif",
  "src/assets/images/Poly_Carousel_Banner.avif",
  "src/assets/images/Printer_Setup_Landing.avif",
  "src/assets/images/contact_home.avif"
];

const Diag = () => {

    const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, []);



  return (
    <>
    <div className='container flex gap-5 py-20 items-center'>
      <div className='w-[600px]'>
        <h1 className='text-[30px] leading-tight'>We're here to help you set up your HP printer</h1>
          <p>Let's connect your printer to a Wi-Fi or wired network or to a computer using a USB cable, but first, we need to know your printer model.</p>
        </div>
        <div>
          <img src="src/assets/images/Printer_Setup_Landing.avif" alt="img" />
        </div>
    </div>


     <div className='bg-[#f7f7f7] py-20'>
        <div className='container flex gap-3 items-center'>
          <div className='w-[50%] '>
            <p className='mb-3'>Enter your serial number, product number or product name</p>
          <div className='flex gap-3'>
            <input type="text" placeholder='Example: HP DeskJet 2632 All-in-One printer' className='p-1 rounded-sm border              focus:outline-none focus:shadow-[blue] w-[60%]'/>

            <button disabled="disabled" className='bg-[#ccc] text-[#fff] px-4 py-1 rounded-sm'>Submit</button>
          </div>
          <div>

            <FaRegUserCircle />


          </div>
          </div>



        <div className="relative w-[50%] mx-auto overflow-hidden rounded-lg shadow-lg h-[300px]">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{
              width: `${carouselImages.length * 100}%`,
              transform: `translateX(-${current * (100 / carouselImages.length)}%)`
            }}
          >
            {carouselImages.map((src, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 h-full"
                style={{ width: `${100 / carouselImages.length}%` }}
              >
                <img src={src} className="w-full h-full object-cover" alt={`slide-${i}`} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white z-10">❮</button>
          <button onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 p-2 rounded-full hover:bg-white z-10">❯</button>

          {/* Dots
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {carouselImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full ${current === i ? 'bg-blue-600' : 'bg-gray-400'}`}
              ></button>
            ))}
          </div> */}
        </div>



        </div>
      




      </div>

    

    </>
  )
}
export default Diag