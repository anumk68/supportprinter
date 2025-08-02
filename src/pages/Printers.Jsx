import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { IoIosSearch } from "react-icons/io";

// Dummy product image and categories
const images = [
  "/src/assets/images/Deskjet.avif",
  "/src/assets/images/NSLaser.avif",
  "/src/assets/images/Envy.avif",
];
const popularPrinters = [
  [
    "HP DeskJet 2300 All-in-One Printer series",
    "HP DeskJet GT 5820 All-in-One Printer series",
    "HP Ink Tank 310 series",
    "HP Ink Tank Wireless 410 series",
    "HP Smart Tank 580 All-in-One Printer",
    "HP Smart Tank 520 All-in-One series",
    "HP Smart Tank 510 Wireless All-in-One series",
    "HP LaserJet M1005 Multifunction Printer series"
  ],
  [
   "HP LaserJet 1018 Printer",
    "HP LaserJet P1007 Printer",
    "HP Laser 100 Printer series",
    "HP Laser 1000 Printer series",
    "HP LaserJet 1020 Printer series",
    "HP Laser MFP 130 Printer series",
    "HP LaserJet Pro MFP M126 series",
    "HP LaserJet Pro MFP M128 series"
  ],
  [
   "HP LaserJet P1008 Printer",
    "HP LaserJet Pro M202 series",
    "HP Laser MFP 1000 Printer series",
    "HP LaserJet Pro MFP M226 series",
    "HP LaserJet M207-M212 Printer series",
    "HP LaserJet Tank MFP 1005 Printer series",
    "HP LaserJet Pro P1106/P1108 Printer series",
    "HP LaserJet Pro M1136 Multifunction Printer series"
  ],
 
];

export default function Printers() {
  // const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);

  return (
    <div className=" min-h-screen bg-white text-[#1a1a1a]">
      <div className="container flex items-center py-8 space-x-4">
        {/* Step 1 - Active */}
        <div className="flex items-center text-gray-600 font-medium">
          <a
            href="javascript:void(0)"
            title="Identify"
            className="flex items-center space-x-2"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white ">
              1
            </span>
            <span className="text-black">Identify</span>
          </a>
        </div>

        {/* Arrow */}
        <span className="text-gray-400 text-sm">
          <SlArrowRight />
        </span>

        {/* Step 2 */}
        <div className="flex items-center text-gray-500">
          <a
            href="javascript:void(0)"
            title="Download"
            className="flex items-center space-x-2"
          >
            <span className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 ">
              2
            </span>
            <span>Download</span>
          </a>
        </div>

        {/* Arrow */}
        <span className="text-gray-400 text-sm">
          <SlArrowRight />
        </span>

        {/* Step 3 */}
        <div className="flex items-center text-gray-500">
          <a
            href="javascript:void(0)"
            title="Install"
            className="flex items-center space-x-2"
          >
            <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 ">
              3
            </span>
            <span>Install</span>
          </a>
        </div>
      </div>

      {/* Account Info */}
      <div className="py-5  text-[16px] leading-6 text-black bg-[#0278ab0d]">
        <div className="container">
          Already have an HP account? Select from the products you own.{" "}
          <a href="#" className="underline text-[#0278ab]">
            Sign in
          </a>{" "}
          /{" "}
          <a href="#" className="underline  text-[#0278ab]">
            Create an account
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        {/* Title */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-7 border-b-gray-300">
          <h1 className="text-[20px] md:text-[24px] leading-8 font-formadjrui mb-4 text-[#1c7a17]">
            Welcome to HP Software and Drivers
          </h1>
          <div className="flex flex-col md:flex-row  items-center ">
            <span className="text-[15px]  font-medium font-formadjrui  text-black pr-3">
              Select a different product type:
            </span>
            <div className="flex items-center space-x-6 pt-4 md:pt-0">
              <div className="shadow-[0_1px_4px_1px_#21212133] bg-[#0278ab] flex items-center justify-center rounded-full  p-2 cursor-pointer">
                <img
                  className="w-10 h-10 p-1 "
                  src="/src/assets/images/icons/printer_hover.png"
                  alt="printer"
                />
              </div>
              <div className="shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full  p-2 cursor-pointer">
                <img
                  className="w-10 h-10 p-1 "
                  src="/src/assets/images/icons/desktop.png"
                  alt="desktop"
                />
              </div>
              <div className="shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full  p-2 cursor-pointer">
                <img
                  className="w-10 h-10 p-1 "
                  src="/src/assets/images/icons/laptop.png"
                  alt="printer"
                />
              </div>
              <div className="shadow-[0_1px_4px_1px_#21212133] bg-white flex items-center justify-center rounded-full  p-2 cursor-pointer">
                <img
                  className="w-10 h-10 p-1 "
                  src="/src/assets/images/icons/monitor.png"
                  alt="monitor"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 py-10 border-b border-gray-300 mb-28">
          {/* Left Search Box */}
          <div className="w-full lg:w-1/2 bg-white ">
            <h2 className="text-[32px] font-medium leading-[40px] mb-4">
              Let's identify your printer
            </h2>
            <label
              htmlFor="searchQuery"
              className="block text-[17px] font-medium  text-black mb-1 leading-[24px]"
            >
              Enter your serial number, product number or product name
            </label>
            <div className="relative">
              <input
                id="searchQuery"
                type="text"
                placeholder="Example: HP OfficeJet 4630"
                className="w-full border border-gray-400 rounded-md py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
              <button
                type="submit"
                className="absolute top-1/2 right-3 -translate-y-1/2 p-1"
                disabled
              >
                <IoIosSearch className="h-8 w-8 text-gray-400" />
              </button>
            </div>
            {/* <div className="mt-4 flex lg:hidden">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md"
            disabled
          >
            Submit
          </button>
        </div> */}
          </div>

          {/* Right Auto Slider with gray nav icons */}
          <div className="w-full lg:w-1/2 bg-white relative border-l px-5 md:px-20 border-gray-400">
            <h3 className="text-[16px] mb-4 font-formadjrui leading-[24px]  text-black">
              Examples of where to find your product name
            </h3>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              spaceBetween={16}
              slidesPerView={1}
              className="rounded-lg"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <img
                      src={src}
                      alt={`Product ${index + 1}`}
                      className="h-56 object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <button className="custom-prev absolute top-1/2 left-2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-[#0278ab] hover:text-[#0278abe8] z-10">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="custom-next absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-full shadow p-2 text-[#0278ab] hover:text-[#0278ab] z-10">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>





  <div className="border-b border-gray-300">
 <h1 className="text-[24px] leading-6">
  Or select your product from popular printers
 </h1>
 <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   space-y-4  text-[#0278ab] text-[16px] leading-5 pt-10 mb-16 ">
  {popularPrinters.map((col,colIdx)=>(
  <div key={colIdx} className="space-y-4  ">
{col.map((printer,i)=>
  printer ?(
    <a
    key={i}
    href="#"
    className="block hover:underline hover:text-[#0f4aa1] gap-10"
    >
      {printer}
      </a>
  ):(
    <span key={i} className="block h-5 "></span>
  )
)}
  </div>
  ))}
 </div>
    </div>

  <div className="mt-10">
    <div className="flex items-center border border-gray-200 rounded-lg gap-4 shadow">
      <div className="img-container">
        <img
          src=" /src/assets/images/product.avif"
          alt="Check on compatibility, upgrades and available fixes from HP and Microsoft."
          loading="eager"
          className="w-full object-cover rounded"
        />
      </div>

   <div>
   <h3 className="font-hpsimplifiedregular text-[20px] tracking-[0.25px] leading-[23px] text-black">Need windows 11 help?</h3>
      <p className="my-[10px] font-[Forma_DJR_Micro] text-[19px] font-light leading-[24px] text-[#737373]">
        Check on compatibility, upgrades and available fixes from HP and Microsoft.
      </p>
      <a
        href="https://support.hp.com/in-en/help/windows-10-support-center?jumpid=in_r11839_in/en/WIN11Support/SWDPrint"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#0278ab] hover:bg-[#0278ab] text-white font-medium py-2 px-4 rounded transition"
        id="Win11PrintContact"
        title="Get Support"
      >
        Get Support
      </a>
   </div>
      
      <div>

      </div>
    </div>
    <div></div>
  </div>


      </div>
    </div>
  );
}
