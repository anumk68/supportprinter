

import React from 'react';
import { useNavigate } from 'react-router-dom';

import Printersetup from '../assets/icons/Printer-setup.svg';
import Printerofflineorprint from '../assets/icons/Printer-offline-or-print-job-stuck-in-queue.svg';
import Wirelessprinterconnectivity from '../assets/icons/Wireless-printer-connectivity.svg';
import InkcartrideIssue from '../assets/icons/Ink-cartride-issue.svg';
import ScanningOrFaxing from '../assets/icons/Scanning-or-faxing.svg';
import Paperjam from '../assets/icons/Paper-jam.svg';
import Colororblack from '../assets/icons/Color-or-black-ink-not-printing.svg';
import CarriageJamIssue from '../assets/icons/carriage_issue_shadow.svg';
import Other from '../assets/icons/other.svg';

const products = [
  { name: 'Printer Setup', icon: Printersetup, route: '/subscriptions' },
  { name: 'Printer offline or print job stuck in queue', icon: Printerofflineorprint, route: '/PrinterSetup' },
  { name: 'Wireless Printer Connectivity', icon: Wirelessprinterconnectivity, route: '/Wirelessprinterconnectivity' },
  { name: 'Ink Cartridge or Toner Issue', icon: InkcartrideIssue, route: '/desktops' },
  { name: 'Scanning and faxing', icon: ScanningOrFaxing, route: '/monitors' },
  { name: 'Paper jam issue', icon: Paperjam, route: '/poly' },
  { name: 'Color or black ink not printing', icon: Colororblack, route: '/poly' },
  { name: 'Carriage Jam issue', icon: CarriageJamIssue, route: '/poly' },
  { name: 'Other', icon: Other, route: '/poly' },
];

export default function PrintersContactHelp() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className="container min-h-screen bg-white flex flex-col items-center">
      {/* Title */}
      <div className="w-full text-center py-30">
        <h1 className="text-[28px] md:text-[38px] leading-[33px] ">Which printer question can we help you with?</h1>
      </div>

      {/* Tile Grid */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            onClick={() => handleClick(product.route)}
            className="relative  rounded-lg shadow-[0px_0px_20px_#00000029] cursor-pointer flex flex-col items-center px-2  md:p-9 py-10  transition-transform duration-300 hover:scale-115"
          >
            {/* Icon Circle */}
            <div className="absolute -top-14 ">
              <img src={product.icon} alt="icon" className="w-28 h-28 rounded-full   flex items-center justify-center" />
            </div>

            {/* Text */}
            <p className="text-center text-[#165DBA]  font-medium mt-14">
              {product.name}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="w-full max-w-md px-4 flex items-center justify-center mt-16 mb-12">
        <button
          onClick={() => navigate('/')}
          className="text-blue-800 text-base hover:underline transition-colors"
        >
          Choose a different product type
        </button>
      </div>
    </div>
  );
}
