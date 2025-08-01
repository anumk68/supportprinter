import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";

// Dummy product image and categories
const deviceTypes = [
  { name: "Printer", icon: "🖨️", image: "/images/printer.png" },
  { name: "Laptop", icon: "💻", image: "/images/laptop.png" },
  { name: "Monitor", icon: "🖥️", image: "/images/monitor.png" },
  { name: "Audio", icon: "🎧", image: "/images/audio.png" },
  { name: "Camera", icon: "📷", image: "/images/camera.png" },
];

const popularPrinters = [
  ["HP DeskJet 2300 All-in-One Printer series", "HP LaserJet 1018 Printer", "HP LaserJet P1008 Printer"],
  ["HP DeskJet GT 5820 All-in-One Printer series", "HP LaserJet P1007 Printer", "HP LaserJet Pro M202 series"],
  ["HP Ink Tank 310 series", "HP Laser 100 Printer series", "HP Laser MFP 1000 Printer series"],
  ["HP Ink Tank Wireless 410 series", "HP LaserJet 1020 Printer series", "HP LaserJet Pro MFP M226 series"],
  ["HP Smart Tank 580 All-in-One Printer", "HP Laser MFP 130 Printer series", "HP LaserJet M207-M212 Printer series"],
  ["HP Smart Tank 520 All-in-One series", "HP LaserJet Pro MFP M126 series", "HP LaserJet Tank MFP 1005 Printer series"],
  ["HP Smart Tank 510 Wireless All-in-One series", "HP LaserJet Pro MFP M128 series", "HP LaserJet Pro P1106/P1108 Printer series"],
  ["HP LaserJet M1005 Multifunction Printer series", "", "HP LaserJet Pro M1136 Multifunction Printer series"],
];

export default function Printers() {
  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);

  return (
    <div className=" min-h-screen bg-white text-[#1a1a1a]">
     <div className="container flex items-center py-8 space-x-4">
    {/* Step 1 - Active */}
    <div className="flex items-center text-gray-600 font-medium">
      <a href="javascript:void(0)" title="Identify" className="flex items-center space-x-2">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-black text-white ">1</span>
        <span className="text-black">Identify</span>
      </a>
    </div>

    {/* Arrow */}
    <span className="text-gray-400 text-sm"><SlArrowRight /></span>

    {/* Step 2 */}
    <div className="flex items-center text-gray-500">
      <a href="javascript:void(0)" title="Download" className="flex items-center space-x-2">
        <span className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 ">2</span>
        <span>Download</span>
      </a>
    </div>

    {/* Arrow */}
    <span className="text-gray-400 text-sm"><SlArrowRight /></span>

    {/* Step 3 */}
    <div className="flex items-center text-gray-500">
      <a href="javascript:void(0)" title="Install" className="flex items-center space-x-2">
        <span className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 ">3</span>
        <span >Install</span>
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
        <h1 className="text-xl leading-8 font-semibold mb-4 text-[#1c7a17]">
          Welcome to HP Software and Drivers
        </h1>

        {/* Device selector */}
        <div className="flex flex-col lg:flex-row bg-gray-50 border p-6 rounded-md gap-6">
          {/* Left: Device type buttons */}
          <div className="flex flex-row lg:flex-col gap-3">
            {deviceTypes.map((device, index) => (
              <button
                key={index}
                onClick={() => setSelectedDeviceIndex(index)}
                className={`flex items-center gap-2 px-4 py-2 border rounded-md text-sm font-medium ${
                  index === selectedDeviceIndex
                    ? "bg-[#165DBA] text-white"
                    : "bg-white text-[#165DBA] border-[#165DBA] hover:bg-[#e6f0fb]"
                }`}
              >
                <span>{device.icon}</span>
                {device.name}
              </button>
            ))}
          </div>

          {/* Right: Image and label */}
          <div className="flex-1 flex flex-col justify-center items-center text-center p-6">
            <h4 className="text-sm text-gray-600 mb-2">
              Examples of where to find your product name
            </h4>
            <img
              src={deviceTypes[selectedDeviceIndex].image}
              alt="Product example"
              className="w-full max-w-md rounded shadow-md"
            />
            <p className="text-sm mt-2 text-gray-700">
              {deviceTypes[selectedDeviceIndex].name} model shown
            </p>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-10 border p-6 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Let's identify your printer</h2>
          <p className="text-sm mb-4">
            Enter your serial number, product number or product name
          </p>
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full max-w-lg">
            <input
              type="text"
              className="w-full px-4 py-2 outline-none"
              placeholder="Example: HP OfficeJet 4630"
            />
            <button className="px-4 py-2 bg-[#165DBA] text-white text-sm font-medium hover:bg-[#0f4aa1] transition">
              🔍
            </button>
          </div>
        </div>

        {/* Popular Printers */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold mb-4">
            Or select your product from popular printers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 text-[#165DBA] text-sm">
            {popularPrinters.map((col, colIdx) => (
              <div key={colIdx} className="space-y-2">
                {col.map((printer, i) =>
                  printer ? (
                    <a
                      key={i}
                      href="#"
                      className="block hover:underline hover:text-[#0f4aa1]"
                    >
                      {printer}
                    </a>
                  ) : (
                    <span key={i} className="block h-5" />
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Windows 11 Help Box */}
        <div className="mt-16 flex flex-col md:flex-row items-center bg-[#f4f8fb] border rounded-md p-6 gap-6">
          <img
            src="/images/windows-support.png"
            alt="Windows 11 support"
            className="w-40 rounded-md"
          />
          <div className="flex-1 text-sm">
            <h4 className="font-semibold mb-1">Need Windows 11 help?</h4>
            <p className="text-gray-600">
              Check on compatibility, upgrades and available fixes from HP and Microsoft.
            </p>
          </div>
          <button className="bg-[#165DBA] text-white px-6 py-2 rounded hover:bg-[#0f4aa1] text-sm font-medium">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}
