import { SlArrowRight } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import TailwindCarousel from "../components/TailwindCarousel";

// Import all images
import SWDTile from "../assets/images/SWD_Tile.avif";
import PrinterNew from "../assets/images/Printer_new.avif";
import ComputerNew from "../assets/images/computer_new.avif";
import WindowsIcon from "../assets/images/windows icon.png";
import PolyIcon from "../assets/images/poly icon.png";
import ContentDiag from "../assets/images/Content_diag.svg";
import ContentCheckWarranty from "../assets/images/Content_checkwarranty.svg";
import ContentContact from "../assets/images/Content_contact.svg";
import PrinterIcon from "../assets/images/Printer.svg";
import LaptopIcon from "../assets/images/Laptop.svg";
import MonitorIcon from "../assets/images/Monitor.svg";


export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white text-[#1a1a1a] font-[Forma_DJR_UI]">
      <div className="py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-[40px] font-normal leading-[50px] mb-4">
            Welcome to HP Customer Support
          </h1>
          <p className="text-xl  text-gray-500 mb-6">How can we help?</p>
        </div>

        {/* Card Section */}
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div
            onClick={() => navigate("/Softwaredrivers")}
            className="border cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={SWDTile}
                alt="Software and Drivers"
                className="object-cover  w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <p className="text-xl font-[Forma_DJR_UI]">
                Software and Drivers
              </p>
              <SlArrowRight className="text-gray-600" />
            </div>
          </div>
          <div
            onClick={() => navigate("/PrinterSupport")}
            className="border cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={PrinterNew}
                alt="Printer Support"
                className="w-full  object-cover  h-auto transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <p className="text-xl font-[Forma_DJR_UI]">Printer Support</p>
              <SlArrowRight className="text-gray-600" />
            </div>
          </div>
          <div
            onClick={() => navigate("/ComputerSupport")}
            className="border cursor-pointer hover:shadow-lg transition-shadow"
          >
            <div className="overflow-hidden">
              <img
                src={ComputerNew}
                alt="Computer Support"
                className="w-full h-auto object-cover  transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <p className="text-xl font-[Forma_DJR_UI]">Computer Support</p>
              <SlArrowRight className="text-gray-600" />
            </div>
          </div>
        </div>

        {/* Other Product Support */}
        <div className="bg-[#ebf9ff] py-6 text-center  border-b">
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg font-[Forma_DJR_Micro]">
            <span className="text-[20px]">Other product Support:</span>
            <a
              href="#"
              className="text-[#0278ab] underline flex items-center gap-2"
            >
              <img
                src={WindowsIcon}
                alt="Windows"
                className="w-5 h-5"
              />
              Windows 11 Support
            </a>
            <a
              href="#"
              className="text-[#0278ab] underline flex items-center gap-2"
            >
              <img
                src={PolyIcon}
                alt="Poly"
                className="w-5 h-5"
              />
              Poly Support
            </a>
          </div>
        </div>

        {/* more support resources section */}
        <div className="container flex gap-20  py-20 text-[#000000] text-[18px]">
          <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
            {/* card-issue-1 */}
            <div
              onClick={() => navigate("/PrinterHelp")}
              class="w-[330px] sm:w-[250px] h-[220px] border border-black  cursor-pointer hover:bg-[#ddf2fc]"
            >
              <div class="flex items-center pt-10 pl-5 h-[120px]">
                <img
                  src={ContentDiag}
                  alt="Diagnostic Icon"
                  class="h-6"
                />
              </div>
              <div class="flex justify-between items-center px-4 py-4 border-t border-black">
                <p class="leading-[30px] text-start">
                  Use diagnostic tools to
                  <br />
                  find and fix issues
                </p>
                <span class="text-lg text-gray-600">
                  <SlArrowRight />
                </span>
              </div>
            </div>


             {/* card-issue-2 */}
            
<div class="w-[330px] sm:w-[250px] h-[220px] border border-black  cursor-pointer hover:bg-[#ddf2fc]">
              <div class="flex items-center pt-10 pl-5 h-[120px]">
                <img
                  src={ContentCheckWarranty}
                  alt="Diagnostic Icon"
                  class="h-6"
                />
              </div>
              <div class="flex justify-between items-center px-4 py-4 border-t border-black">
                <p class="leading-[30px] text-start">Check warranty status</p>
                <span class="text-lg text-gray-600">
                  <SlArrowRight />
                </span>
              </div>
            </div>


             {/* card-issue-3 */}
           <div class="w-[330px] sm:w-[250px] h-[220px] border border-black  cursor-pointer hover:bg-[#ddf2fc]">
              <div class="flex items-center pt-10 pl-5 h-[120px]">
                <img
                  src={ContentContact}
                  alt="Diagnostic Icon"
                  class="h-6"
                />
              </div>
              <div class="flex justify-between items-center px-4 py-4 border-t border-black">
                <p class="leading-[30px] text-start">
                  Contact an HP agent for
                  <br />
                  Support
                </p>
                <span class="text-lg text-gray-600">
                  <SlArrowRight />
                </span>
              </div>
            </div>


            <div className="ml-0 md:ml-20">
              <h3 class="mb-2 text-start">More Support Resources</h3>
              <ul class="text-[17px] text-[#0278ab]  font-thin leading-10 text-start ">
                <li>
                  <a href="#" class="underline hover:text-green-950 ">
                    Windows 11 Support Information
                  </a>
                </li>
                <li>
                  <a href="#" class="underline hover:text-green-950 ">
                    Register your product
                  </a>
                </li>
                <li>
                  <a href="#" class="underline hover:text-green-950 ">
                    Visit our Repair Center
                  </a>
                </li>
                <li>
                  <a href="#" class="underline hover:text-green-950 text-black">
                    Poly Collaboration Devices
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <hr />

        {/* Product Identification Section */}
        <div className="py-10 container ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-center sm:text-left mb-8">
            Identify your product for manuals and specific product information
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
            <div className="space-y-6">
              <div>
                <label className="block text-[16px] font-semibold  mb-2">
                  Enter your serial number, product number or product name
                </label>
                <div className="relative border border-gray-400">
                  <input
                    type="text"
                    placeholder="Examples: HU265BM18V, CN123A ...."
                    className="w-full p-2 text-base focus:outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="border border-black px-4 py-2 text-lg hover:bg-gray-100">
                  Or, let HP detect your product
                </button>
                <a
                  href="#"
                  className="text-lg text-black underline hover:text-blue-700"
                >
                  Find out more
                </a>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 text-[#0278ab] text-lg hover:underline"
              >
                <CgProfile className="h-6 w-6" /> Sign in to select a saved
                product
              </a>
            </div>
            <div className="border-l pl-6">
              <div className="flex flex-col gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={PrinterIcon}
                    alt="Printer"
                    className="w-10 h-10 cursor-pointer"
                  />
                  <span>Printer</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={LaptopIcon}
                    alt="Laptop"
                    className="w-10 h-10   cursor-pointer    "
                  />
                  <span>Laptop</span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={MonitorIcon}
                    alt="Monitor"
                    className="w-10 h-10 cursor-pointer"
                  />
                  <span>Desktop</span>
                </div>
              </div>
              <p className="text-base font-semibold mb-2">
                How to find a serial number for a printer
              </p>
              <ul className="text-[#0278ab] text-base space-y-4">
                <li>
                  <a href="#" className="underline">
                    Locate your product’s information label
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Watch a video
                  </a>
                </li>
                <li>
                  <a href="#" className="underline">
                    Samsung printer help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <TailwindCarousel />
      </div>
    </section>
  );
}
