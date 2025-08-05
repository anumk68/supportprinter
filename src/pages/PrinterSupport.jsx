import React, { useEffect, useState } from "react";
import {
  Download,
  FolderClock,
  Headset,
  BotMessageSquare,
  Search,
  CircleUserRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Printbannernew from "../assets/images/Print_banner_new.avif"
import Printerfeature from "../assets/images/Printer_feature.avif"
import IdentiyProduct from "../assets/images/identify_product_all.svg"
import Weeklydeals from "../assets/images/WeeklyDeals_Home_Carousel.png"
import Psf21 from "../assets/images/PSF-21_Carousel.avif"
import Hpsa from "../assets/images/HPSA_Carousel.avif"
import SmartFriend from "../assets/images/SmartFriend_Home_Carousel.png"
const PrinterSupport = () => {
  const slides = [
    {
      image: Hpsa,
      title: "HP Support Assistant",
      subtitle: "Built-in support for your PCs and printers",
      button: "Download Now",
      link: "/redirect",
    },
    {
      image: SmartFriend,
      title: "Issue with your HP printer?",
      subtitle: "Use our diagnostic tools for help with common Printer issues",
      button: "Printer Diagnostic Tools",
      link: "/redirect",
    },
    {
      image:  Weeklydeals,
      title: "Check out our Weekly Deals",
      subtitle: "Get big savings on select HP products.",
      button: "Shop Now",
      link: "/redirect",
    },
    {
      image:  Psf21,
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
      <div  className="banner p-7 bg-contain bg-no-repeat border-b border-[#cccccc] bg-[right_center]"
      style={{ backgroundImage: `url(${Printbannernew})` }}>
        <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-4 h-[168px]">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-[32px] font-medium md:text-2xl text-black font-[HPSimplifiedLight]">
              HP Printer Support
            </h1>
          </div>
          <div className="w-0 md:w-1/2" />
        </div>
      </div>

      {/* 2nd section */}

      <div className="container px-4 py-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center divide-y divide-gray-300 sm:divide-y-0 sm:divide-x">
        <div className="flex flex-col items-center space-y-2 px-4 py-4">
          <Download className="text-gray-500 text-5xl" />

          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-lg hover:underline"
          >
            Download Drivers
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4">
          <FolderClock className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-2lg hover:underline"
          >
            Check warranty status
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4">
          <Headset className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-2lg hover:underline"
          >
            Contact us
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4">
          <BotMessageSquare className="text-gray-500 text-5xl" />
          <Link
            to="/redirect"
            className="text-blue-400 text-lg md:text-lg hover:underline"
          >
            Ask our virtual Assistant
          </Link>
        </div>
      </div>

      <hr className="border border-gray-300 my-4 w-[80%] mx-auto" />

      {/* 3rd section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto max-h-80 object-contain mx-auto"
            src={Printerfeature}
            alt="Printer Setup"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h3 className="text-[28px] md:text-2xl leading-snug">
            How to setup your printer
          </h3>
          <p className="md:text-xl text-gray-700 leading-relaxed">
            Click Printer Setup for step by step guidance on how to setup,
            configure and register your printer.
          </p>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl text-base font-medium">
            Printer Setup
          </button>
          <h5 className="text-sm text-gray-800 font-medium">
            More support options for this topic
          </h5>
          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-lg hover:underline"
          >
            View unboxing and printer setup videos
          </Link>
          <br />
          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-lg hover:underline"
          >
            Wireless Print Support
          </Link>
        </div>
      </div>
      {/* </div> */}

      <hr className="border border-gray-300 my-4 w-[80%] mx-auto" />

      {/* 4th section */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="w-full text-center space-y-4 mx-auto">
          <img
            className="w-full max-h-48 object-contain "
            src="/images/Windows 11 logo.avif"
            alt=""
          />
          <h3 className="text-xl h-20">
            Scan / Print stopped
            <br /> working after upgrading
            <br /> to Windows 11?
          </h3>
          <h5 className="text-md text-gray-700 h-20">
            Try these troubleshooting steps to fix <br />
            the scan and/or print issues.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            Fix Scan/Print
          </button>
          <h5 className="text-sm text-gray-800 font-medium">
            More support options for this topic
          </h5>

          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-lg hover:underline "
          >
            Fix issues with MSFT updates
          </Link>
          <br />
          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-lg hover:underline"
          >
            Windows 11 support page
          </Link>
        </div>

        <div className="w-full text-center space-y-4">
          <img
            className="w-full max-h-48 object-contain mx-auto"
            src="/images/Printer_2.avif"
            alt=""
          />
          <h3 className="text-xl h-20">How to print, scan and fax</h3>
          <h5 className="text-md text-gray-700 h-20">
            Click Print Scan Fax for instructions on how to print, scan and fax
            with your HP Printer using Windows or Mac OS.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            Print Scan Fix
          </button>
          <h5 className="text-sm text-gray-800 font-medium">
            More support options for this topic
          </h5>

          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-lg hover:underline"
          >
            View how to print video
          </Link>
        </div>

        <div className="w-full text-center space-y-4">
          <img
            className="w-full max-h-48 object-contain mx-auto"
            src="/images/printeroffline.avif"
            alt=""
          />
          <h3 className="text-xl h-20">
            Printer offline or print job stuck in queue?
          </h3>
          <h5 className="text-md text-gray-700 h-20">
            Use this Windows automated tool to diagnose and fix printer problems
            such as printer offline and print jobs stuck in queue.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">
            Get HP Smart
          </button>
          <h5 className="text-sm text-gray-800 font-medium">
            More support options for this topic
          </h5>

          <Link
            to="/redirect"
            className="text-blue-400 text-base md:text-lg hover:underline"
          >
            Use Diagnose & Fix in HP Smart to repair common printing issues
            (Windows, macOS)
          </Link>
        </div>
      </div>

      

      <div className="container mx-auto bg-gray-50 py-8 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src={IdentiyProduct}
            alt="Magnifier Icon"
            className="hidden md:block w-20 h-20 object-cover"
          />
          <h2 className="text-xl md:text-2xl md:ml-6  text-gray-800 leading-tight">
            Identify your printer for manuals and
            <br className="hidden md:block" />
            specific product information
          </h2>
        </div>
        <div className="container mx-auto">
          <div className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
            <div>
              <p className="text-gray-700 mb-3 sm:mb-2">
                Enter your serial number, product number or product name
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                <input
                  type="text"
                  placeholder="Example: HU265BM18V, LaserJet"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full sm:w-auto bg-gray-300 text-white px-6 py-2 rounded-md">
                  Submit
                </button>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition whitespace-nowrap">
                  Or, let HP detect your product
                </button>
                <Link
                  to="/redirect"
                  className="text-blue-500 text-sm hover:underline text-center sm:text-left"
                >
                  Find out more
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center sm:justify-start gap-2">
                <CircleUserRound className="text-blue-500" />
                <Link
                  to="/redirect"
                  className="text-blue-500 hover:underline text-sm"
                >
                  Sign in to select a saved product
                </Link>
              </div>
            </div>

            <div className="md:border-l md:pl-8 lg:pl-10 border-gray-300">
              <h3 className="text-lg sm:text-xl text-gray-800 mb-3 sm:mb-4">
                How to find a serial number for a printer
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-blue-600 text-sm">
                <li>
                  <Link to="/redirect" className="hover:underline block">
                    Locate your product's information label
                  </Link>
                </li>
                <li>
                  <Link to="/redirect" className="hover:underline block">
                    Watch a video
                  </Link>
                </li>
                <li>
                  <Link to="/redirect" className="hover:underline block">
                    Samsung printer help
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6th section */}

      <div className="w-full bg-white py-10 px-4 text-center">
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

        {/* carousel */}
        <div className="relative w-full h-60 max-w-6xl mx-auto overflow-hidden rounded-md mt-10">
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
                className="p-10 bg-cover bg-center"
                 style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className=" w-full h-full flex items-center px-6 md:px-14">
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
        
      </div>
    </>
  );
};

export default PrinterSupport;
