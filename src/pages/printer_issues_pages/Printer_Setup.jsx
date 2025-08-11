import { useState, useEffect } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

import image1 from "../../assets/images/Deskjet.webp"
import image2 from "../../assets/images/Envy.webp"
import image3 from "../../assets/images/Laserjet.webp"
import image4 from "../../assets/images/NSLaser.avif"

import printersetuplanding from "../../assets/images/Printer_Setup_Landing.webp"


const carouselImages = [
  image1,
  image2,
image3,
 image4,
];

const PrinterSetup = () => {
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
     <div className="min-h-screen bg-white text-gray-800 pt-10 px-4 sm:px-6 lg:px-8 font-hpsimplifiedlight tracking-[1px]">
             <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
                 <div className="flex-1 text-left">                     <h1 className="text-[32px] font-hpsimplifiedlight text-gray-900 mb-3">                         We're here to help you set up your HP printer
                    </h1>
                     <p className="text-[20px]  max-w-xl">
                        Let's connect your printer to a Wi-Fi or wired network or to a computer using a USB cable, but first, we need to know your printer model.                     </p>                 </div>
 
                <div className="flex-1 flex justify-center items-center">
                     <img
                        src={printersetuplanding}
                        alt="Printer"
                        className="w-full max-w-[500px] h-auto object-contain"
                    />
                </div>
            </div>
 
            <div className="border-t border-gray-300 py-10 bg-gray-50 mt-10">
                <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-4 py-10">
                    <div className="flex justify-center md:justify-start px-4 items-center">
                        <div className="w-full max-w-md">
                            <label className="block text-[18px] font-medium mb-2">
                                Enter your serial number, product number or product name
                            </label>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                <input
                                    type="text"
                                    placeholder="Example: HP DeskJet 2632 All-in-One printer"
                                    className="w-full px-4 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button className="bg-gray-300 text-white px-5 py-2 rounded-md cursor-not-allowed">
                                    Submit
                                </button>
                            </div>
                             <Link to="/signin">
                            <div className="mt-4 flex items-center text-[16px] gap-1 text-[#165dba] hover:text-[#114284] hover:underline cursor-pointer">
                               <FaRegUserCircle />
                                Sign in to select a saved product
                            </div>
                            </Link>
                        </div>
                    </div>
 
                    <div className="px-4 relative ">
                        <p className="font-medium mb-4 text-center md:text-left">
                            Examples of where to find your printer model
                        </p>
 
                    <div className="mx-auto overflow-hidden rounded-lg  h-[300px]">
                        <div
                            className="flex transition-transform duration-700 ease-in-out h-full"
                        style={{width: `${carouselImages.length * 100}%`, transform: `translateX(-${current * (100 / carouselImages.length)}%)`}}
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

          <button onClick={goPrev} className="absolute -left-5 top-1/2 text-[#0096d6] text-4xl font-thin -translate-y-1/2 p-2 rounded-full z-10"><BsChevronLeft /></button>
          
          <button onClick={goNext} className="absolute -right-5 top-1/2 text-[#0096d6] text-4xl font-thin -translate-y-1/2 p-2 rounded-full z-10"><BsChevronRight /></button>

                    </div>

                    </div>
                </div>
            </div>
            <div className=" max-w-xl text-[15px] font-sans px-4 mt-10 text-left text-[16px] ml-10 font-hpsimplifiedlight mb-8">
                <p>
                    We've made it easy to download HP printer software to set up your printer.
                    Enter your product name and we’ll get you the right printer setup software and drivers.
                    We support all major desktop and mobile operating systems, including Windows, MacOS, iOS, and Android.
                </p>
            </div>
        </div>
  )
}

export default PrinterSetup