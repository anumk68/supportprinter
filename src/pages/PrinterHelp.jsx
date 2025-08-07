import React from "react";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

// Imported images
import ComputerLogo from "../assets/images/computerLogo.avif";
import Printersetup from "../assets/images/printersetup.svg";
import Printeroffline from "../assets/images/printeroffline.svg";
import Wirelessprinterissues from "../assets/images/wirelessprinterissues.svg";
import Scannerissues from "../assets/images/scannerissues.svg";
import ColorOrBlack from "../assets/images/colororblack.svg";
import Cartridge from "../assets/images/cartridge.svg";
import Printjobstuck from "../assets/images/printjobstuck.svg";
import Paperjam from "../assets/images/paperjamissues.svg";
import Carriagejam from "../assets/images/carriageisjammed.svg";
import Faxissues from "../assets/images/faxissues.svg";
import PrinterSmall from "../assets/images/printer-sm.svg";

export default function PrinterHelp() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-40 py-12">
        {/* Left image section */}
        <div className="w-full sm:w-1/2 hidden sm:block sm:mb-0">
          <img
            src={ComputerLogo}
            alt="Devices"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right text section */}
        <div className="w-full sm:w-1/2 sm:text-left text-center">
          <h1 className="font-hpsimplifiedlight leading-[42px] text-[38px] text-black mb-4">
            Diagnose and solve
          </h1>
          <p className="font-hpsimplifiedlight  text-[18px] leading-[24px] text-black">
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
          <img src={PrinterSmall} alt="printer" />
          <span className="text-[#035C84] leading-[22px] text-[23px]">
            Printer Issues
          </span>
        </div>

        {/* cards section */}
        <div className="py-10 bg-[linear-gradient(42deg,rgba(89,199,181,0.49)_19%,rgba(0,149,212,0.49)_83%)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-28 py-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Link to="/Printer-Setup">
              <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
                <img src={Printersetup} alt="Printer setup issues" className="mx-auto mb-4 h-16" />
                <p className="text-[#165DBA] font-medium">Printer setup issues</p>
              </div>
            </Link>

            {/* Card 2 */}
           <Link to={'/PrinterHelp/printer/printer-offline'}>
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Printeroffline} alt="Printer offline" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Printer offline</p>
            </div>

           </Link>
            {/* Card 3 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Wirelessprinterissues} alt="Wireless printer issues" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Wireless printer issues</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Scannerissues} alt="Scanner issues" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Scanner issues</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={ColorOrBlack} alt="Color or black-ink-not-printing" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Color or black-ink-not-printing</p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Cartridge} alt="Cartridge issues" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Cartridge issues</p>
            </div>

            {/* Card 7 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Printjobstuck} alt="Print job stuck in queue" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Print job stuck in queue</p>
            </div>

            {/* Card 8 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Paperjam} alt="Paper jam issues" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Paper jam issues</p>
            </div>

            {/* Card 9 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Carriagejam} alt="Carriage is jammed" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Carriage is jammed</p>
            </div>

            {/* Card 10 */}
            <div className="bg-white rounded-2xl shadow-md text-center p-8 hover:shadow-lg cursor-pointer hover:scale-105 transition">
              <img src={Faxissues} alt="Fax issues" className="mx-auto mb-4 h-16" />
              <p className="text-[#165DBA] font-medium">Fax issues</p>
            </div>
          </div>
        </div>

        {/* search section */}
        <div className="relative w-full mx-auto flex flex-col items-center px-4 sm:px-40 py-7 sm:py-28">
          <p className="font-[HPSimplified] text-[22px] leading-[1.4] tracking-[0.3px] mb-1.5">
            Search our support articles
          </p>

          <div className="relative w-full sm:w-1/2 text-center">
            <input
              type="search"
              id="location-search"
              className="block text-center p-2.5 w-full z-20 text-gray-900 bg-gray-50 rounded-e-lg text-xl border dark:bg-gray-700 dark:border-s-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="What can I help with you?"
              required
            />
            <button
              type="submit"
              className="absolute top-0 cursor-pointer end-0 h-full p-4 text-sm font-medium text-white bg-[#ccc] border-l border-black hover:bg-[#b9b9b9]"
            >
              <IoSearch className="grid items-center text-center text-2xl" />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
