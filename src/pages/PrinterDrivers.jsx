import { Search, Weight } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import Printerhover from "../assets/icons/printer_hover.png"
import Laptop from "../assets/images/Laptop.svg"
import desktop from "../assets/icons/desktop.png"
import monitor from "../assets/images/Monitor.svg"
import poly from "../assets/images/poly.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


import Printer1 from "../assets/images/Envy.avif";
import Printer2 from "../assets/images/NSLaser.avif";
import { Link } from 'react-router-dom';
const popularPrinters = [
  [
    "HP DeskJet 2300 All-in-One Printer series",
    "HP DeskJet GT 5820 All-in-One Printer series",
    "HP Ink Tank 310 series",
    "HP Ink Tank Wireless 410 series",
    "HP Smart Tank 580 All-in-One Printer",
    "HP Smart Tank 520 All-in-One series",
    "HP Smart Tank 510 Wireless All-in-One series",
    "HP LaserJet M1005 Multifunction Printer series",
  ],
  [
    "HP LaserJet 1018 Printer",
    "HP LaserJet P1007 Printer",
    "HP Laser 100 Printer series",
    "HP Laser 1000 Printer series",
    "HP LaserJet 1020 Printer series",
    "HP LaserJet MFP 130 Printer series",
    "HP LaserJet Pro MFP M126 series",
    "HP LaserJet Pro M128 series",
  ],
  [
    "HP LaserJet P1008 Printer",
    "HP LaserJet Pro M202 series",
    "HP Laser MFP 1000 Printer series",
    "HP LaserJet Pro MFP M226 series",
    "HP LaserJet M207-M212 Printer series",
    "HP LaserJet Tank MFP 1005 Printer series",
    "HP LaserJet Pro P1106/P1108 Printer series",
    "HP LaserJet Pro M1136 Multifunction Printer series",
  ],
];

export default function PrinterDrivers() {
  // const [query, setQuery] = useState("");
   const printerImages = [Printer1, Printer2];

  return (
    <div className="min-h-screen  py-10">
      <div className=" px-4">
         {/* Step Indicator */}
        <div className="container flex items-center space-x-2 text-gray-500 text-sm mb-8">
          <div className="flex items-center ">
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">1</div>
            <span className='ml-[10px] font-[400] text-[18px] leading-[18px] text-[#212121]' style={{fontFamily:'Forma DJR Micro'}}>Identify</span>
          </div>
          <span className='text-[16px]'><ChevronRight /></span>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">2</div>
            <span className='mr-[18px] hidden md:block font-[400] text-[18px] leading-[17px] text-[#737373]' style={{fontFamily:'Forma DJR Micro'}}>Download</span>
          </div>
          <span><ChevronRight /></span>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-6 rounded-full border border-gray-500 flex items-center justify-center">3</div>
            <span className='mr-[18px] hidden md:block font-[400] text-[18px] leading-[20px] text-[#737373]' style={{fontFamily:'Forma DJR Micro'}}>Install</span>
          </div>
        </div>
       


        <div className='bg-[#0278ab0d] py-5'>
           <p className='container text-[16px] font-[400] leading-[24px] text-black tracking-[1px] '>Already have an HP account? Select from the products you own. <span className='text-[#0278ab]'>Sign in / <span> Create an account</span></span>  </p>
        </div>

        <div className='container flex flex-col sm:flex-row py-10 items-center justify-between'>
          <h1 className="text-[19px] md:text-[24px] font-[400] leading-[32px] text-[#1c7a17] mb-0 tracking-[1px]">Welcome to HP Software and Drivers</h1>

        <div className='flex flex-col md:flex-row items-center gap-5'>
          <span className='text-[#404040] leading-[20px] text-[14px] font-[400] tracking-[1px]'>Select a different product type:</span>
         <div className='flex items-center   gap-3 '>
          <img src={Printerhover} alt="" className='bg-[#0278ab] p-3 rounded-full h-14 w-14 bg-cover bg-center'/>
          <img src={Laptop} alt="" className='p-2 h-14 w-14 shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full'/>
          <img src={desktop} alt="" className='p-2 h-14 w-14 shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full'/>
          <img src={poly} alt="" className='p-2 h-14 w-14 shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full'/>
          <img src={monitor} alt="" className='p-2 h-14 w-14 shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full'/>
         </div>

        </div>
      </div>
  <hr className='container text-gray-300'/>


       


 <div className="w-full bg-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Search Section */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-[25px] sm:text-[32px] text-gray-900">
            Let’s identify your printer
          </h2>
          <p className="text-[16px] font-[300] text-black tracking-[0.5px]">
            Enter your serial number, product number or product name
          </p>

          <div className="relative w-full max-w-md mx-auto md:mx-0">
            <input
              type="text"
              placeholder="Example: HP OfficeJet 4630"
              className="w-full border border-gray-300 rounded-lg py-3 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#ccc]">
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT: Image Slider Section */}
        <div className="text-center">
          <h3 className="text-sm text-black font-[400] font-roboto tracking-[0.5px]  mb-4">
            Examples of where to find your product name
          </h3>

          <div className="relative max-w-xs sm:max-w-sm md:max-w-md mx-auto group">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop
              navigation
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className=" overflow-hidden"
            >
              {printerImages.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Printer ${i + 1}`}
                    className="w-full h-45 object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Style arrows smaller */}
            <style>{`
              .swiper-button-prev,
              .swiper-button-next {
                width: 24px;
                height: 24px;
                border-radius: 9999px;
                padding: 4px;
                color: #0278ab;
              }
              .swiper-button-prev::after,
              .swiper-button-next::after {
                font-size: 18px;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
 




          

        <h2 className="container text-[27px] leading-[30px] tracking-[0.25px] text-black py-8">Or select your product from popular printers</h2>
       <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
  {popularPrinters.map((column, colIdx) => (
    <ul key={colIdx} className="space-y-3">
      {column.map((printer, printerIdx) => (
        <li key={printerIdx}>
          <Link
            to="/drivers/products"
            className="text-[16px] leading-[20px] font-[400] text-[#0278ab] font-roboto tracking-[0.5px]"
          >
            {printer}
          </Link>
        </li>
      ))}
    </ul>
  ))}
</div>

        
      </div>
    </div>
  );
}
