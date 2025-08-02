import React from 'react';
import { ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
const PrinterOffline = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white font-hpsimplifiedlight text-[clamp(14px,1.5vw,18px)] leading-[clamp(18px,2vw,21px)] text-black">
  
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-10 max-w-[1100px] mx-auto">
        
<div className="max-w-[1200px] mx-auto px-2 text-[#0096D6] text-base leading-[22px] font-hp-simplified pb-5 flex flex-wrap items-center gap-x-6 gap-y-1">
  <span onClick={() => navigate("/")} className="hover:underline cursor-pointer font-bold">
    Support home
  </span>
 
   <ChevronRight size={18} className="text-black-500" />
 
  <span onClick={() => navigate("/PrinterHelp")} className="hover:underline cursor-pointer font-bold">
    Printer issues
  </span>
 
<ChevronRight size={18} className="text-black-500" />
 
  <span className="text-black font-bold">Printer offline</span>
</div>
 
 
 
        <h1 className="text-xl sm:text-2xl md:text-3xl font-normal pb-6 text-center">Printer offline</h1>
 
        
        <div className="max-w-[1200px] mx-auto px-2">
          <p className="pb-4 text-left">
            You may see a “printer offline” error if your device can’t communicate with your printer. This can happen for a few different reasons but follow these simple steps and you should be back up and running.
          </p>
          <div className="w-full flex justify-center">
            <ul className="list-disc text-left inline-block space-y-3">
              <li>Turn off your printer and disconnect it from the power supply.</li>
              <li>Restart the device you want to print from and your internet router.</li>
              <li>Turn the printer back on and try to print again.</li>
            </ul>
          </div>
          <p className="pt-4 text-left">
            Check that the printer and the device you want to print from are on the same network. If you need it, you can{' '}
            <a href="#" className="text-[#0071bb] font-semibold hover:underline">find help with Wifi connections here</a>.
          </p>
        </div>
      </div>
 
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-8 pb-10 pt-10">
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-normal mb-4 text-[#1d1d1d]">HP Smart</h2>
          <p className="mb-4">
            The Diagnose & Fix tool in the HP Smart desktop app can solve issues and automatically maintain your printer’s health. To use Diagnose & Fix:
          </p>
          <ul className="list-disc ml-5 space-y-3">
            <li>Open or download the application on Windows or Mac</li>
            <li>For Windows, select the 🔧 (wrench) icon in the bottom left corner</li>
            <li>On Mac, tap the printer dropdown in the top menu bar</li>
            <li>Follow the onscreen instructions</li>
          </ul>
          <div className="pt-4">
            <a href="#" className="text-[#0071bb] font-semibold hover:underline">See full Diagnose and Fix instructions</a>
          </div>
          <div className="pt-4">
            <button className="bg-[#165dba] text-white text-base leading-[33px] font-semibold font-hp-simplified px-5 py-2.5 rounded">
              Get HP Smart
            </button>
 
            <p className="text-xs text-black-200 mt-3 max-w-[480px] italic">
              Requires Windows 10 or later, iOS 14 or later, Android 7.0 and later, or macOS 10.14 and later
            </p>
          </div>
 
 
 
        </div>
 
 
        <div className="flex-1 min-w-[250px]">
          <img
            src="/src/assets/images/dummy_image.png"
            alt="HP Smart App Screenshot"
            className="w-full h-auto object-contain rounded-md shadow-md"
          />
        </div>
      </div>
 
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <hr className="border-t border-gray-400 my-2" />
      </div>
 
<div className="py-10">
  <div className="max-w-[1000px] mx-auto px-4 text-center">
    <h2 className="text-lg sm:text-xl font-semibold mb-6">Still need help? Try these solutions.</h2>
 
    <div className="bg-white rounded-xl shadow-md px-6 py-5 max-w-[500px] mx-auto flex items-center gap-4">
      
      <div className="w-16 h-16 flex items-center justify-center bg-[#0096D6] rounded-full">
        <img
          src="/src/assets/images/virtual_image.png"
          alt="Virtual Assistant"
          className="w-10 h-10 object-contain"
        />
      </div>
 
      <div className="text-left flex-1">
        <h3
          className="text-[18px] leading-[22px] text-black"
          style={{ fontFamily: 'HPSimplified, sans-serif', fontWeight: 500 }}
        >
          Virtual Assistant
        </h3>
 
        <p
          className="text-[16px] leading-[22px] text-black mb-1"
          style={{ fontFamily: 'HPSimplifiedLight, sans-serif', fontWeight: 300 }}
        >
          Get guided help for offline printer issues from our automated virtual assistant.
        </p>
 
        <a
          href="#"
          className="text-[16px] leading-[22px] text-[#0071bb] hover:underline"
          style={{ fontFamily: 'HPSimplifiedLight, sans-serif', fontWeight: 500 }}
        >
          Start Virtual Assistant &gt;
        </a>
      </div>
    </div>
  </div>
</div>
 
 
 
 
 
    
      <div className="max-w-[1200px] mx-auto px-4">
        <p className="text-center font-normal mb-6">
          For more help with printer offline issues, visit:{" "}
          <a href="#" className="text-[#0071bb] font-semibold hover:underline">
            HP printer is offline or not responding (Windows, macOS)
          </a>
        </p>
      </div>
 
<div className="bg-gradient-to-br from-[#bae4db] to-[#a4cee9] min-h-[600px] flex items-center justify-center py-18">
  <div className="max-w-[1200px] w-full px-4 text-center">
    <h2 className="text-[36px] sm:text-[36px] leading-[43px] mb-8">Video tutorials</h2>
 
    <div className="flex flex-col sm:flex-row justify-center items-stretch sm:space-x-[12px] space-y-4 sm:space-y-0">
      {[1, 2].map((i) => (
        <div
          key={i}
          className="bg-white rounded-lg shadow p-4 text-center w-full max-w-[390px] h-[420px] flex flex-col"
        >
          <img
            src={`/src/assets/images/tutorial${i}.jpeg`}
            alt={`Tutorial ${i}`}
            className="mx-auto mb-4 rounded w-[370px] h-[180px] object-cover"
          />
 
          <div className="px-4">
            <h3
              className="text-[16px] leading-[23px] text-black mb-12"
              style={{
                fontFamily: 'HPSimplified, sans-serif',
                fontWeight: 600,
                height: '49px',
              }}
            >
              {i === 1
                ? 'How to Check the Use Printer Offline Setting in Windows 10'
                : 'How to resolve common print errors using Diagnose & Fix in HP Smart for Windows, macOS'}
            </h3>
 
            <p
              className="text-[16px] leading-[23px] text-[#767676]"
              style={{
                fontFamily: 'HPSimplified, sans-serif',
                fontWeight: 400,
                height: '69px',
              }}
            >
              {i === 1
                ? 'Learn how you can check the use printer offline setting in Windows 10.'
                : 'This video shows how to use the Diagnose & Fix feature in the HP Smart app for devices running Windows or macOS. This feature can assist in troubleshooting printer issues.'}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
 
 
 
 
 
<div className="bg-white py-14">
  <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    {["Contact HP Support", "Identify your printer", "Search our support articles"].map((title, idx) => (
      <div key={idx} className="flex flex-col items-center h-full">
     
        <div className="flex justify-center mb-4 h-[60px]">
          {idx === 0 ? (
            <img src="/src/assets/images/folder.png" alt="Support Icon" className="w-[48px] h-[48px] object-contain" />
          ) : idx === 1 ? (
            <img src="/src/assets/images/printer.png" alt="Printer Icon" className="w-[48px] h-[48px] object-contain" />
          ) : (
            <img src="/src/assets/images/folder.png" alt="Search Icon" className="w-[48px] h-[48px] object-contain" />
          )}
        </div>
 
        <h3 className="text-[#0071bb] font-semibold text-[20px] mb-2 min-h-[56px]">
          {title}
        </h3>
 
        
        <p className="text-[16px] text-[#000000] mb-4 px-4 min-h-[72px]">
          {idx === 0
            ? "Sign in or create an HP account to connect with a live agent (may require an active warranty)."
            : idx === 1
            ? "Enter your model name or serial number to find drivers and manuals specific to your device."
            : "Search by issue to find step-by-step guidance for diagnosing and solving most printer issues."}
        </p>
 
      
        {idx === 1 ? (
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              placeholder="Example: HU65BM18V, LaserJet ..."
              className="border border-gray-300 rounded px-3 py-2 text-sm w-[250px]"
            />
            <button className="bg-gray-400 text-white px-4 py-2 rounded text-sm">Submit</button>
          </div>
        ) : idx === 2 ? (
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="border border-gray-300 rounded-l px-3 py-2 text-sm w-[200px]"
            />
            <button className="bg-gray-300 rounded-r px-3 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m0 0A7 7 0 1115 5a7 7 0 010 14z" />
              </svg>
            </button>
          </div>
        ) : (
          <button className="bg-[#0071bb] text-white px-4 py-2 rounded hover:bg-[#005f99] text-sm">
            Contact us
          </button>
        )}
      </div>
    ))}
  </div>
</div>
 
    </div>
  );
};
 
export default PrinterOffline;
 
 