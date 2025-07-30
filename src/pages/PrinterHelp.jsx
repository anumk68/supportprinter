import React from "react";
import { IoSearch } from "react-icons/io5";


export default function PrinterHelp() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-40  py-12">
        {/* Left image section */}
        <div className="w-full sm:w-1/2 hidden sm:block  sm:mb-0">
          <img
            src="/src/assets/images/computerLogo.avif"
            alt="Devices"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right text section */}
        <div className="w-full sm:w-1/2 sm:text-left text-center">
          <h1 className="font-[HPSimplifiedLight] not-italic font-light text-[38px]  text-black mb-4">
            Diagnose and solve
          </h1>
          <p className="font-[HPSimplifiedLight] not-italic font-light text-[18px] leading-[24px] text-black">
            In this troubleshooting hub, you’ll find the top automated and
            self-service solutions for common computer and printer problems.
            Click the tabs to switch between computer and printer topics, then
            select an issue to view solutions.
          </p>
        </div>
      </div>

      {/* printer issues */}
      <div className="w-full py-4 text-center sm:py-7 bg-[#FAFAFA]">
        <div className="flex items-center justify-center gap-2 pb-5 hover:underline cursor-pointer">
          <img src="/src/assets/images/printer-sm.svg" alt="printer" />
          <span className="text-[#035C84] leading-[22px]  text-[23px]">
            Printer Issues
          </span>
        </div>

 {/* cards section */}
<div className="py-10 bg-[linear-gradient(42deg,rgba(89,199,181,0.49)_19%,rgba(0,149,212,0.49)_83%)]">
  <div className="max-w-7xl mx-auto px-4 sm:px-28 py-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/printersetup.svg"
        alt="Printer setup issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Printer setup issues</p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/printeroffline.svg"
        alt="Printer offline"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Printer offline</p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/wirelessprinterissues.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Wireless printer issues</p>
    </div>

    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/scannerissues.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Scanner issues</p>
    </div>

 {/* Card 5 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/colororblack.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Color or black-ink-not-printing</p>
    </div>

     {/* Card 6 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/cartridge.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Cartridge issues</p>
    </div>
     {/* Card 7 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/printjobstuck.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Print job stuck in queue</p>
    </div>

 {/* Card 8 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/paperjamissues.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Paper jam issues</p>
    </div>



 {/* Card 8 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/carriageisjammed.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Carriage is jammed</p>
    </div>

    
 {/* Card 8 */}
    <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
      <img
        src="/src/assets/images/faxissues.svg"
        alt="Wireless printer issues"
        className="mx-auto mb-4 h-16"
      />
      <p className="text-[#165DBA] font-medium">Fax issues</p>
    </div>

  </div>
</div>

{/* search section */}
<div className="relative w-full  mx-auto flex flex-col items-center px-4 sm:px-40 py-7 sm:py-28">
    <p className="font-[HPSimplified] text-[22px] leading-[1.4] tracking-[0.3px] mb-1.5">Search our support articles</p>
  
  <div className="relative w-1/2 text-center">
  <input type="search" id="location-search" class="block text-center p-2.5 w-full z-20  text-gray-900 bg-gray-50 rounded-e-lg  text-xl  border  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="What can I help with you?" required />
<button type="submit" class="absolute top-0 cursor-pointer end-0 h-full p-4 text-sm font-medium text-white bg-[#ccc]  border-l border-black hover:bg-[#b9b9b9]  ">
              
                <IoSearch className="grid items-center text-center text-2xl"/>

                <span class="sr-only">Search</span>
            </button>
  </div>
</div>
      </div>
    </div>
  );
}
