
import React, { useEffect, useState } from "react";
import {
  Download,FolderClock, Headset, BotMessageSquare, Search,
 CircleUserRound, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const ComputerSupport = () => {
  const slides = [
    {
      image: "/images/PSF-21_Carousel.avif",
      title: "HP Support Assistant",
      subtitle: "Built-in support for your PCs and printers",
      button: "Download Now",
      link: "/redirect",
    },
    {
      image: "/images/SmartFriend_Home_Carousel.png",
      title: "Issue with your HP printer?",
      subtitle: "Use our diagnostic tools for help with common Printer issues",
      button: "Printer Diagnostic Tools",
      link: "/redirect",
    },
    {
      image: "/images/HPSA_Carousel.avif",
      title: "Check out our Weekly Deals",
      subtitle: "Get big savings on select HP products.",
      button: "Shop Now",
      link: "/redirect",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () =>
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <>
      <div className="bg-[url('/src/assets/images/Computer_banner_optimized.avif')] bg-contain bg-no-repeat border-b border-[#cccccc] bg-right bg-center">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-4 h-[168px]">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-[32px] text-[18px] md:text-[32px]  font-medium md:text-2xl text-black font-[HPSimplifiedLight]">
              HP Computer Support
            </h1>
          </div>
          <div className="w-0 md:w-1/2"/>
        </div>
      </div>

      {/* 2nd section */}

      <div className="container px-4 py-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center border-b border-[#cccccc] ">
        <div className="flex flex-col items-center space-y-2 px-4 py-4 sm:border-r border-[#cccccc]">
          <Download className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-lg hover:underline font-[HPSimplifiedLight]"
          >
            Download Drivers <ChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4 lg:border-r border-[#cccccc]">
          <FolderClock className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-2lg hover:underline"
          >
            Check warranty status <ChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4 sm:border-r border-[#cccccc]">
          <Headset className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-2lg hover:underline"
          >
            Contact us <ChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4">
          <BotMessageSquare className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-lg hover:underline"
          >
            Ask our virtual Assistant <ChevronRight className="inline-block" />
          </Link>
        </div>
      </div>

      

      {/* 3rd section */}
      {/* <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 py-5 border-b  border-[#cccccc]">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto max-h-80 object-contain mx-auto"
            src="/src/assets/images/Computer_feature.webp"
            alt="Printer Setup"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h3 className="text-[28px] md:text-2xl leading-snug font-[HPSimplifiedLight]">
           Thinking of upgrading to Windows 11?
          </h3>
          <p className=" text-sm sm:text-base md:text-lg text-gray-700 ">
            Before you do, you’ll need to see if your PC can run Windows 11. Some computers may have components that do not meet the Windows 11 minimum hardware requirements. Be sure to read the Windows 11 Upgrade Guide (see links below) for more information.
          </p>
          <button className="bg-[#114284] text-white px-5 py-2 rounded-xl text-base font-medium">
            Windows 11 Support
          </button>
          <h5 className="text-sm text-gray-800 font-medium">
            More support options for this topic
          </h5>
          <Link
            to="/redirect"
            className="text-blue-400 md:text-md hover:underline"
          >
            More support information around Windows 11 <ChevronRight className="inline-block" />
          </Link>
          <br />
          <Link
            to="/redirect"
            className="text-blue-400 md:text-md hover:underline leading-loose"
          >
            Need Windows 10 Support? <ChevronRight className="inline-block" />
          </Link>
        </div>
      </div> */}

      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border-b border-[#cccccc]">
  {/* Image Section */}
  <div className="w-full lg:w-1/2">
    <img
      src="/src/assets/images/Computer_feature.webp"
      alt="Printer Setup"
      className="w-full h-auto max-h-72 sm:max-h-80 md:max-h-[22rem] object-contain mx-auto"
    />
  </div>

  {/* Text Section */}
  <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-[HPSimplifiedLight] leading-snug">
      Thinking of upgrading to Windows 11?
    </h3>

    <p className="text-sm sm:text-base md:text-lg text-gray-700">
      Before you do, you’ll need to see if your PC can run Windows 11. Some computers may have components that do not meet the Windows 11 minimum hardware requirements. Be sure to read the Windows 11 Upgrade Guide (see links below) for more information.
    </p>

    <button className="bg-[#114284] text-white px-6 py-2 rounded-xl text-sm sm:text-base font-medium">
      Windows 11 Support
    </button>

    <h5 className="text-sm text-gray-800 font-medium">
      More support options for this topic
    </h5>

    <Link
      to="/redirect"
      className="block text-blue-500 hover:underline text-sm sm:text-base"
    >
      More support information around Windows 11{" "}
      <ChevronRight className="inline-block" />
    </Link>

    <Link
      to="/redirect"
      className="block text-blue-500 hover:underline text-sm sm:text-base"
    >
      Need Windows 10 Support? <ChevronRight className="inline-block" />
    </Link>
  </div>
</div>

    

      {/* 4th section */}

      <div className="container mx-auto py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full text-center space-y-4 mx-auto">
          <img
            className="w-full max-h-28 object-contain "
            src="/src/assets/images/nopower.avif"
            alt=""
          />
          <h3 className="text-2xl ">
            Fix problems booting or <br/>turning on your PC
          </h3>
          <h5 className="text-md text-gray-700 h-30">
           Learn what to do if you have a blank or<br/> black screen, flashing LEDs or beep<br/> codes, if the boot stops at the logo<br/>screen, or if you have an error<br/> message in a black or blue screen.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            Fix Boot issues
          </button>
          <h5 className="text-[12px] text-gray-800 font-medium">
            More support options for this topic
          </h5>

          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-md hover:underline"
          >
            Operating System Not Found Error<br/> Message Appears On Black Screen <ChevronRight className="inline-block" />
          </Link>
          <br />
          <br />
          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-md hover:underline"
          >
            Boot Device Not Found (3F0) or<br/> Automatic Repair Errors <ChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="w-full text-center space-y-4">
          <img
            className="w-full max-h-28 object-contain mx-auto"
            src="/src/assets/images/Computer_1.avif"
            alt=""
          />
          <h3 className="text-2xl ">Fix problems related to <br/>audio</h3>
          <h5 className="text-md text-gray-700 h-30">
            Use our quick and easy automated<br/> solution to resolve common audio<br/> problems with your PC. Find solutions<br/> to audio, speaker and headphone<br/> issues.
          </h5>
         
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            Fix audio issues
          </button>
          <h5 className="text-[12px] text-gray-800 font-medium">
            More support options for this topic
          </h5>

          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-md hover:underline"
          >
            No Audio Device is installed Message<br/> Displays<ChevronRight className="inline-block" />

          </Link>
          <br/>
          <br/>
          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-md hover:underline"
          >
           No Sound from the Speakers  <ChevronRight className="inline-block" />

          </Link>

        </div>

        <div className="w-full text-center space-y-4">
          <img
            className="w-full max-h-28 object-contain mx-auto"
            src="/src/assets/images/touch.avif"
            alt=""
          />
          <h3 className="text-2xl">
            Fix display and<br/> touchscreen problems
          </h3>
          <h5 className="text-md text-gray-700 h-30">
            Resolve problems with your display or<br/> touch panel, and learn how to<br/> configure it correctly.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            Fix Display issues
          </button>
          <h5 className="text-[12px] text-gray-800 font-medium">
            More support options for this topic
          </h5>

          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-md hover:underline"
          >
            Troubleshooting HDMI Display <br/>and Sound Issues (Windows 10, 8, 7)  <ChevronRight className="inline-block" />
          </Link>
          <br/>
          <br/>
          
          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-md hover:underline"
          >
            Diagnosing a Liquid Crystal Display<br/> (LCD) for Damage <ChevronRight className="inline-block" />
          </Link>
        </div>
      </div>

      {/* 5th section */}

     {/* <div className=" bg-gray-50 py-12 px-6">
           <div className="container mx-auto flex">
               <img
                src="/src/assets/images/identify_product_all.svg"
                alt="Magnifier Icon"
                className="w-20 h-20 object-cover"
              />
            <h2 className="text-2xl mx-20 font-light text-gray-800 leading-tight">
              Identify your printer for manuals and
              <br className="hidden md:block" />
              specific product information
            </h2>
           </div>
      <div className="w-full container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-100 ml-40">
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <button className="bg-blue-600 text-white border border-blue-600 px-4 py-1 rounded-md hover:bg-blue-50 transition">
              Let HP detect your product
            </button>
            <Link
              to="/redirect"
              className="text-blue-500 text-sm hover:underline mt-2 sm:mt-0"
            >
              Find out more <ChevronRight className="inline-block" />
            </Link>
          </div>

        <p className="text-gray-700 mt-6">
            Or, enter your serial number, product number or product name
          </p>

          <div className="flex items-center gap-4 mt-5">
            <input
              type="text"
              placeholder="Example: HU265BM18V, LaserJet"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-300 text-white px-6 py-2 rounded-md ">
              Submit
            </button>
          </div>


          <div className="mt-6 flex items-center gap-2">
            <CircleUserRound className="text-blue-500" />
            <Link
              to="/redirect"
              className="text-blue-500 hover:underline text-sm"
            >
              Sign in to select a saved product
            </Link>
          </div>
        </div>

        
        <div className="md:border-l md:pl-10 border-gray-300 mx-auto">
          <h3 className="text-xl font-light text-gray-800 mb-4">
            Select a product type for tips on finding your serial number
          </h3>
          <ul className="space-y-3 text-blue-600 text-sm">
            <li className="flex items-center gap-2">
            <img src="/src/assets/images/Laptop.svg" alt="" />
              <Link to="/redirect" className="hover:underline text-lg">
                Laptop
              </Link>
            </li>

            <li className="flex items-center gap-2">
            <img src="/src/assets/images/Desktop.svg" alt="" />
              <Link to="/redirect" className="hover:underline text-lg">
                Desktop
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>  */}

    <div className="bg-gray-50 py-12 px-4 sm:px-6">
  {/* Header Section */}
  <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-10">
    <img
      src="/src/assets/images/identify_product_all.svg"
      alt="Magnifier Icon"
      className="w-16 h-16 sm:w-20 sm:h-20 object-cover"
    />
    <h2 className="text-xl sm:text-2xl font-light text-gray-800 leading-tight text-center sm:text-left">
      Identify your printer for manuals and
      <br className="hidden md:block" />
      specific product information
    </h2>
  </div>

  {/* Content Grid */}
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
    {/* Left Column */}
    <div className="w-full px-2 sm:px-6">
      {/* Button + Link */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <button className="bg-blue-600 text-white border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Let HP detect your product
        </button>
        <Link
          to="/redirect"
          className="text-blue-500 text-sm hover:underline mt-2 sm:mt-0"
        >
          Find out more <ChevronRight className="inline-block" />
        </Link>
      </div>

      {/* Description Text */}
      <p className="text-gray-700 mt-6 text-sm sm:text-base">
        Or, enter your serial number, product number or product name
      </p>

      {/* Input Section */}
      <div className="flex flex-col sm:flex-row items-stretch gap-4 mt-5">
        <input
          type="text"
          placeholder="Example: HU265BM18V, LaserJet"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600">
          Submit
        </button>
      </div>

      {/* Sign In */}
      <div className="mt-6 flex items-center gap-2">
        <CircleUserRound className="text-blue-500" />
        <Link
          to="/redirect"
          className="text-blue-500 hover:underline text-sm"
        >
          Sign in to select a saved product
        </Link>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full md:border-l md:pl-10 border-gray-300 px-2 sm:px-6">
      <h3 className="text-lg sm:text-xl font-light text-gray-800 mb-4">
        Select a product type for tips on finding your serial number
      </h3>
      <ul className="space-y-4 text-blue-600 text-sm sm:text-base">
        <li className="flex items-center gap-3">
          <img src="/src/assets/images/Laptop.svg" alt="Laptop" className="w-6 h-6" />
          <Link to="/redirect" className="hover:underline text-base">
            Laptop
          </Link>
        </li>
        <li className="flex items-center gap-3">
          <img src="/src/assets/images/Desktop.svg" alt="Desktop" className="w-6 h-6" />
          <Link to="/redirect" className="hover:underline text-base">
            Desktop
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>


      {/* 6th section */}

      {/* <div className="w-full bg-white py-10 px-4 text-center">
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl font-medium mb-4">
            Search our knowledge library
          </h3>
          <div className="flex justify-center items-center gap-2 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-100 p-3 rounded-md hover:bg-gray-200">
              <Search />
            </button>
          </div>
        </div>

       
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-md mt-10">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${
                index === current
                  ? "opacity-100 relative"
                  : "opacity-0 absolute inset-0"
              }`}
            >
              <div
                className="w-full h-72 md:h-96 bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="bg-black/50 w-full h-full flex items-center px-6 md:px-14">
                  <div className="text-white space-y-2 text-start pl-5">
                    <h2 className="text-2xl md:text-4xl font-semibold">
                      {slide.title}
                    </h2>
                    <p className="text-md md:text-xl">{slide.subtitle}</p>
                    <a
                      href={slide.link}
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    >
                      {slide.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full z-10"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full z-10"
          >
            <ChevronRight />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === current ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ComputerSupport;
