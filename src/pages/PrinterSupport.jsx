import React from "react";
import {
  LuDownload,
  LuFolderClock,
  LuHeadset,
  LuBotMessageSquare,
  LuSearch,
  LuCircleUserRound,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import TailwindCarousel from "../components/TailwindCarousel";

const PrinterSupport = () => {
  return (
    <>
      <div className="bg-[url('/src/assets/images/Print_banner_new.png')] bg-contain bg-no-repeat border-b-1 border-[#cccccc] bg-[right_center] ">
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
      <div className="container px-4 py-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center border-b border-[#cccccc]">
        <div className="flex flex-col items-center space-y-2 px-4 py-4 sm:border-r border-[#cccccc]">
          <LuDownload className="text-gray-500 text-5xl" />
          <Link to="/redirect" className="text-blue-400 text-lg md:text-lg hover:underline">
            Download Drivers <LuChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4 lg:border-r border-[#cccccc]">
          <LuFolderClock className="text-gray-500 text-5xl" />
          <Link to="/redirect" className="text-blue-400 text-lg md:text-2lg hover:underline">
            Check warranty status <LuChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4 sm:border-r border-[#cccccc]">
          <LuHeadset className="text-gray-500 text-5xl" />
          <Link to="/redirect" className="text-blue-400 text-lg md:text-2lg hover:underline">
            Contact us <LuChevronRight className="inline-block" />
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-2 px-4 py-4">
          <LuBotMessageSquare className="text-gray-500 text-5xl" />
          <Link to="/redirect" className="text-blue-400 text-lg md:text-lg hover:underline">
            Ask our virtual Assistant <LuChevronRight className="inline-block" />
          </Link>
        </div>
      </div>

      {/* 3rd section */}
      <div className="container mx-auto flex flex-col lg:flex-row py-4 items-center gap-10 border-b border-[#cccccc]">
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto max-h-80 object-contain mx-auto"
            src="/src/assets/images/Printer_feature.avif"
            alt="Printer Setup"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
          <h3 className="text-[28px] md:text-2xl leading-snug">How to setup your printer</h3>
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
          <Link to="/redirect" className="text-blue-400 text-base md:text-lg hover:underline">
            View unboxing and printer setup videos <LuChevronRight className="inline-block" />
          </Link>
          <br />
          <Link to="/redirect" className="text-blue-400 text-base md:text-lg hover:underline">
            Wireless Print Support <LuChevronRight className="inline-block" />
          </Link>
        </div>
      </div>

      {/* 4th section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div className="w-full text-center space-y-4 mx-auto">
          <img className="w-full max-h-48 object-contain " src="/src/assets/images/Windows 11 logo.avif" alt="" />
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
          <h5 className="text-sm text-gray-800 font-medium">More support options for this topic</h5>
          <Link to="/redirect" className="text-blue-400 text-base md:text-lg hover:underline ">
            Fix issues with MSFT updates <LuChevronRight className="inline-block" />
          </Link>
          <br />
          <Link to="/redirect" className="text-blue-400 text-base md:text-lg hover:underline">
            Windows 11 support page <LuChevronRight className="inline-block" />
          </Link>
        </div>

        {/* Section 2 */}
        <div className="w-full text-center space-y-4">
          <img className="w-full max-h-48 object-contain mx-auto" src="/src/assets/images/Printer_2.avif" alt="" />
          <h3 className="text-xl h-20">How to print, scan and fax</h3>
          <h5 className="text-md text-gray-700 h-20">
            Click Print Scan Fax for instructions on how to print, scan and fax
            with your HP Printer using Windows or Mac OS.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">Print Scan Fix</button>
          <h5 className="text-sm text-gray-800 font-medium">More support options for this topic</h5>
          <Link to="/redirect" className="text-blue-400 text-base md:text-lg hover:underline">
            View how to print video <LuChevronRight className="inline-block" />
          </Link>
        </div>

        {/* Section 3 */}
        <div className="w-full text-center space-y-4">
          <img className="w-full max-h-48 object-contain mx-auto" src="/src/assets/images/printeroffline.avif" alt="" />
          <h3 className="text-xl h-20">
            Printer offline or print job stuck in queue?
          </h3>
          <h5 className="text-md text-gray-700 h-20">
            Use this Windows automated tool to diagnose and fix printer problems
            such as printer offline and print jobs stuck in queue.
          </h5>
          <button className="bg-blue-900 text-white px-5 py-2 rounded-xl">Get HP Smart</button>
          <h5 className="text-sm text-gray-800 font-medium">More support options for this topic</h5>
          <Link to="/redirect" className="text-blue-400 text-base md:text-lg hover:underline">
            Use Diagnose & Fix in HP Smart to repair common printing issues
            (Windows, macOS) <LuChevronRight className="inline-block" />
          </Link>
        </div>
      </div>

      {/* 5th section */}
      <div className="container mx-auto bg-gray-50 py-8 md:py-12 px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center">
          <img
            src="/src/assets/images/identify_product_all.svg"
            alt="Magnifier Icon"
            className="hidden md:block w-20 h-20 object-cover"
          />
          <h2 className="text-xl md:text-2xl md:ml-6 text-gray-800 leading-tight">
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
                <button className="w-full sm:w-auto bg-gray-300 text-white px-6 py-2 rounded-md">Submit</button>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition whitespace-nowrap">
                  Or, let HP detect your product
                </button>
                <Link to="/redirect" className="text-blue-500 text-sm hover:underline text-center sm:text-left">
                  Find out more <LuChevronRight className="inline-block" />
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center sm:justify-start gap-2">
                <LuCircleUserRound className="text-blue-500" />
                <Link to="/redirect" className="text-blue-500 hover:underline text-sm">
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
                    Locate your product's information label <LuChevronRight className="inline-block" />
                  </Link>
                </li>
                <li>
                  <Link to="/redirect" className="hover:underline block">
                    Watch a video <LuChevronRight className="inline-block" />
                  </Link>
                </li>
                <li>
                  <Link to="/redirect" className="hover:underline block">
                    Samsung printer help <LuChevronRight className="inline-block" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 6th section */}
      <TailwindCarousel />
    </>
  );
};

export default PrinterSupport;
