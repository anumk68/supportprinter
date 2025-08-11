import { useState } from "react";
import chat from "../../assets/images/VA_Chat.svg"
import virtualassistant from "../../assets/images/virtualAgent.svg"
import printer from "../../assets/images/Printer_60 1.svg";
import { BsPlusCircle, BsXCircle } from "react-icons/bs";
import folder from "../../assets/images/folder.svg"
import { SlPhone } from "react-icons/sl";
import Search from "../../assets/icons/search_new.png"


const WirelessPrinterIssue = () => {
    const [openStep, setOpenStep] = useState(null);

const toggleStep = (index) => {
  setOpenStep((prev) => (prev === index ? null : index));
};
  return (
        <div className="container max-w-7xl font-hpsimplifiedlight">
            <div className="text-lg text-[#0096D6] py-4 ml-6">
                <span className="hover:underline cursor-pointer">Support home</span>
                <span className="mx-2 text-black">{'>'}</span>
                <span className="hover:underline cursor-pointer">Printer issues</span>
                <span className="mx-2 text-black">{'>'}</span>
                <span className="text-black font-medium">Wireless printer issues</span>
            </div>
 
            <h1 className="text-2xl md:text-4xl text-center mt-8 mb-6">
                Wireless printer issue
            </h1>
 
           
            <div className='px-[100px] text-[18px]'>
                <p className=" mb-6 ">
                Troubleshooting HP wireless printer? A range of common wireless printing problems can impact your printer connectivity such as:
            </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 list-disc pl-5">
                <ul className="list-disc pl-5 space-y-1">
                    <li>Can't connect to HP wireless printer</li>
                    <li>Can't find HP wireless printer on network</li>
                    <li>Flashing blue light on the wireless printer</li>
                </ul>
 
                <ul className="list-disc pl-5 space-y-1">
                    <li>Error printing from HP wireless printer</li>
                    <li>Error setting up the wireless printer</li>
                </ul>
 
            </div>
             <p className=" mb-12 max-w-4xl">
                Learn how to fix HP wireless printer problems and related issues quickly and easily with our automated HP Virtual Assistant.
            </p>
            </div>
        
 
            <div className="max-w-7xl mx-auto px-4 py-12">
                 <div className="flex gap-4 mb-4">
                            <div className="w-14 h-14 bg-[#0096D6] rounded-full flex items-center justify-center">
                               <img src={virtualassistant} alt="" />
                            </div>
                        </div>
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                       
                        <h2 className="text-3xl ">Virtual Assistant</h2>
 
                        <p className="text-gray-700 mb-3 text-[22px] leading-relaxed">
                            Get guided help for printer issues from our automated virtual <br /> assistant
                        </p>
 
                        <button className="bg-[#0071C5] text-white px-4 py-1 rounded-md hover:bg-[#005fa3] transition">
                            Start now
                        </button>
                    </div>
 
                    <div className="flex justify-center">
                        <img
                            src={chat}
                            alt="Virtual Assistant chat"
                            className="w-full max-w-md rounded shadow-md"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-white py-12 px-4">
                <h3 className="text-center text-2xl font-semibold mb-6">
                    Still need help? Try these solutions.
                </h3>
 
                <div className="max-w-xl mx-auto bg-[#F5F7F8] p-6 rounded-lg shadow-sm flex gap-4 items-center">
                    <div className="w-14 h-14 bg-[#0096D6] rounded-full flex items-center justify-center">
                        <img
                            src={virtualassistant}
                            alt="Virtual Assistant chat"
                            className="w-full max-w-md"
                        />
                    </div>
                    <div>
                        <h4 className="font-bold text-[18px] text-black mb-1">Virtual Assistant</h4>
                        <p className="text-[16px] leading-tight">
                            I can help you with wireless printer issues, or any additional issues.
                        </p>
                        <button className="text-[#0071C5] text-[16px] font-semibold mt-2 hover:underline">Start Virtual Assistant &gt;</button>
                    </div>
                </div>
            </div>
 
            <div className="bg-gradient-to-r from-[#c6ece0] to-[#a1d2e7] py-16 px-4">
                <h3 className="text-center text-3xl font-semibold text-black mb-10">Video tutorials</h3>
 
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
                   
                    <div className="p-5">
                        <h4 className="font-bold text-lg mb-2 text-black">
                            How to connect an HP printer to a wireless network using Wi-Fi Protected Setup
                        </h4>
                        <p className="text-gray-700 text-sm">
                            Learn how to connect an HP printer to a wireless network using Wi-Fi Protected Setup. Some HP printers come with a feature called Wi-Fi Protected Setup...
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 text-center">
                        <div className="flex justify-center mb-4 h-18">
                            <div className=" flex items-center justify-center">
                                <SlPhone className='w-20 h-10 text-gray-500'/>

                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-[#165DBA] mb-4">Contact HP Support</h3>
                        <p className=" mb-4">
                            Sign in or create an HP account to connect with a live agent (may require an active warranty).
                        </p>
                        <button className="bg-[#0071C5] text-white px-4 py-2 rounded-md hover:bg-[#005fa3] transition cursor-pointer">
                            Contact us
                        </button>
                    </div>
 
                    <div className="bg-white p-6 text-center">
                        <div className="flex flex-col items-center mb-4">
                            <div className=" flex mb-2">
                                <img src={printer} alt="printer" />
                            </div>
                            <h3 className="text-xl font-bold text-[#165DBA]">Identify your printer</h3>
                        </div>
 
                        <p className="mb-2">
                            Enter your model name or serial number to find drivers and manuals specific to your device.
                        </p>
                        <p className=" text-[16px] mb-4">Example: HUS5BN1BV, LaserJet ...</p>
 
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Enter model or serial number"
                                className="w-full border rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
 
                        <button className="bg-[#cccccc] text-white px-3 py-1 rounded-md hover:bg-[#005fa3] transition w-full sm:w-auto cursor-pointer">
                            Submit
                        </button>
                    </div>
 
                    <div className="bg-white  p-6 text-center">
                        <div className=" flex justify-center mx-auto mb-5 mt-2">
                           <img src={folder} alt="" />
                        </div>
                        <h3 className="text-xl font-bold text-[#165DBA] mb-4">
                            Search our support articles
                        </h3>
                        <p className=" mb-1">
                            Search by issue to find step-by-step guidance for diagnosing and solving most printer issues.
                        </p>
                        <p className=" mb-4">What can we help you with?</p>
                        <div className="flex items-centermt-2">
                            <input
                                type="text"
                                placeholder="Search support articles"
                                className="flex-1 border rounded-sm px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <img src={Search} alt="" className='h-10  bg-[#cccccc] hover:bg-[#005fa3] transition w-full sm:w-auto px-3 py-2 cursor-pointer'/>
                           
                        </div>
                    </div>
 
                </div>

                <div className="max-w-7xl mx-auto mt-10">
                     <h3 className="text-3xl  font-bold text-gray-800 mb-6 text-center">
      Self-guided troubleshooting for wireless printer issue
    </h3>
  <div className="bg-white p-6 rounded-lg cursor-pointer ">
   
    {[{
      title: "Step 1: Uninstall and reinstall the HP driver and software",
      content: (
        <div className="text-gray-700 text-[15px] leading-relaxed mt-2 space-y-2">
          <p>
            Some HP software components might have installed incorrectly. Remove and reinstall the software to clear issues.
          </p>
          <ol className="list-decimal list-inside space-y-1 tracking-[0.5px]">
            <li>Disconnect the USB cable from the printer, if necessary.</li>
            <li>Open Control Panel in Windows.</li>
            <li>Click "Uninstall a program" under Programs.</li>
            <li>Select the HP printer software and uninstall it.</li>
            <li>Ensure printer is turned on, with paper and cartridges loaded.</li>
            <li>Go to <a href="https://123.hp.com" className="text-blue-600 underline">123.hp.com</a> to download drivers.</li>
            <li>Follow setup instructions using HP Smart or full software package.</li>
          </ol>
          <p>Try printing again. If unresolved, continue to Step 2.</p>
        </div>
      )
    },
    {
      title: "Step 2: Troubleshoot the printer connection",
      content: (
        <div className="text-gray-700 text-[15px] leading-relaxed mt-2">
          Use built-in tools like Windows Troubleshooter or HP Print and Scan Doctor to identify and resolve connectivity problems.
        </div>
      )
    }].map((step, index) => (
      <div key={index} className="border-t border-gray-300 py-4">
        <button
          onClick={() => toggleStep(index)}
          className="flex justify-between items-center w-full text-left"
        >
          <h4 className="font-semibold text-[22px] text-gray-800 ">{step.title}</h4>
          <span className="text-blue-600 text-xl cursor-pointer">
            {openStep === index ? <BsXCircle /> : <BsPlusCircle />}
          </span>
        </button>
        {openStep === index && <div>{step.content}</div>}
      </div>
    ))}
  </div>
</div>
            </div>
        </div>
  )
}
export default WirelessPrinterIssue