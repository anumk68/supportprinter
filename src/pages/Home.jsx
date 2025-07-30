import { SlArrowRight } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate=useNavigate();

  function handleClick(){
    navigate("/PrinterHelp");
  }
  return (
    <section className="">
      <div className="text-center min-h-[122px] text-[40px] text-black mb-5 font-normal pt-[30px] leading-[50px] font-[Forma_DJR_UI]">
        <h1 className="text-5xl font-medium ">
          Welcome to HP Customer Support
        </h1>
        <p className="mb-6 text-gray-500 text-2xl py-3">How can we help?</p>

        {/* card section  */}
        <div className="flex flex-col sm:flex-row p-5 sm:p-0 items-center justify-center gap-10">
          <div class="bg-white flex  items-center cursor-pointer">
            <div class="border ">
              <div class="overflow-hidden">
                <img
                  src="/src/assets/images/SWD_Tile.avif"
                  alt="Scenic View"
                  class="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between border-t px-4 py-3 text-[23px]">
                <p className=" font-[Forma DJR UI]">Software and Drivers</p>
                <span className="font-semibold text-gray-600 text-[16px]">
                  <SlArrowRight />
                </span>
              </div>
            </div>
          </div>

          <div class="bg-white  flex  items-center cursor-pointer">
            <div class="border ">
              <div class="overflow-hidden">
                <img
                  src="/src/assets/images/Printer_new.avif"
                  alt="Scenic View"
                  class="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between border-t px-4 py-3 text-[23px]">
                <p className=" font-[Forma DJR UI]">Printer Support</p>
                <span className="font-semibold text-gray-600 text-[16px]">
                  <SlArrowRight />
                </span>
              </div>
            </div>
          </div>

          <div onClick={() =>navigate('/ComputerSupport')} class="bg-white flex  items-center cursor-pointer">
            <div class="border">
              <div class="overflow-hidden">
                <img
                  src="/src/assets/images/computer_new.avif"
                  alt="Scenic View"
                  class="w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="flex items-center justify-between border-t px-4 py-3 text-[23px]">
                <p className=" font-[Forma DJR UI]">Computer Support</p>
                <span className="font-semibold text-gray-600 text-[16px]">
                  <SlArrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* support section */}
        <div className="static text-center mt-10 w-full bg-[#ebf9ff] border-b font-[Forma DJR Micro]">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-14 items-center justify-center p-4  text-[20px] ">
            <span>Other product Support:</span>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <img src="/src/assets/images/windows icon.png" alt="window" />
              <span className="text-[#0278ab] underline leading-0.5"> Windows 11 Support </span>
            </div>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <img src="/src/assets/images/poly icon.png" alt="poly" />
              <span className="text-[#0278ab] underline leading-0.5">Poly Support</span>
            </div>
          </div>
        </div>




{/* more support resources section */}
<div class=" flex flex-wrap py-20 border-b  justify-center  gap-20   font-['Forma DJR UI'] text-[#000000] text-[22px]">

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div onClick={handleClick} class="w-[280px] h-[220px] border border-black  cursor-pointer hover:bg-[#ddf2fc]">
      <div class="flex items-center pt-10 pl-5 h-[120px]">
        <img src="/src/assets/images/Content_diag.svg" alt="Diagnostic Icon" class="h-6" />
      </div>
      <div class="flex justify-between items-center px-4 py-4 border-t border-black">
        <p class="leading-tight text-start">Use diagnostic tools to<br/>find and fix issues</p>
        <span class="text-lg text-gray-600"><SlArrowRight/></span>
      </div>
    </div>

    

<div class="w-[280px] h-[220px] border border-black  cursor-pointer hover:bg-[#ddf2fc]">
      <div class="flex items-center pt-10 pl-5 h-[120px]">
        <img src="/src/assets/images/Content_checkwarranty.svg" alt="Diagnostic Icon" class="h-6" />
      </div>
      <div class="flex justify-between items-center px-4 py-4 border-t border-black">
        <p class="leading-tight text-start">Check warranty status</p>
        <span class="text-lg text-gray-600"><SlArrowRight/></span>
      </div>
    </div>

<div class="w-[280px] h-[220px] border border-black  cursor-pointer hover:bg-[#ddf2fc]">
      <div class="flex items-center pt-10 pl-5 h-[120px]">
        <img src="/src/assets/images/Content_contact.svg" alt="Diagnostic Icon" class="h-6" />
      </div>
      <div class="flex justify-between items-center px-4 py-4 border-t border-black">
        <p class="leading-tight text-start">Contact an HP agent for<br/>Support</p>
        <span class="text-lg text-gray-600"><SlArrowRight/></span>
      </div>
    </div>

   

  </div>


  <div class="text-start font-[Forma DJR UI] ">
    <h3 class="mb-2 text-start">More Support Resources</h3>
    <ul class="text-[17px] text-[#0278ab]  font-thin leading-10 text-start ">
      <li><a href="#" class="underline hover:text-green-950 ">Windows 11 Support Information</a></li>
      <li><a href="#" class="underline hover:text-green-950 ">Register your product</a></li>
      <li><a href="#" class="underline hover:text-green-950 ">Visit our Repair Center</a></li>
      <li><a href="#" class="underline hover:text-green-950 text-black">Poly Collaboration Devices</a></li>
    </ul>
  </div>
</div>

 {/* product search section */}
<div class="w-full px-6 py-20  font-['Forma DJR UI']">
  <div class="max-w-7xl mx-auto">

    <h2 class="text-[30px] md:text-[40px] leading-1.5 text-start  text-black mb-20">
      Identify your product for manuals and specific product information
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-28">
      <div class="space-y-4">
        <div>
          <label class="block text-[18px] text-black text-start">Enter your serial number, product number or product name</label>
          <div class="relative border border-gray-400">
            <input
              type="text"
              placeholder="Examples: HU265BM18V, CN123A"
              class="w-full text-start pl-2 text-[20px] focus:outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center space-y-7 sm:gap-28 py-8 ">
          <button class="border border-black px-4 text-[20px] hover:bg-gray-100 cursor-pointer">
            Or, let HP detect your product
          </button>
          <a href="#" class="text-[20px] text-black underline font-medium hover:text-blue-700">Find out more</a>
        </div>
        <div class="pt-2">
          <a href="#" class="flex items-center gap-2 text-[#0278ab] text-[20px] hover:underline">
           <CgProfile className="h-10 w-10"/>
            Sign in to select a saved product
          </a>
        </div>
      </div>

      <div class="border-l border-black pl-6">
      
        <div class="flex gap-4 mb-4">
          <img src="/src/assets/images/Printer.svg" alt="Printer" class="w-10 h-10 cursor-pointer" />
          <img src="/src/assets/images/Printer.svg" alt="Laptop" class=" w-10 h-10 cursor-pointer" />
          <img src="/src/assets/images/Printer.svg" alt="Desktop" class="w-10 h-10 cursor-pointer" />
          <img src="/src/assets/images/Printer.svg" alt="Headset" class="w-10 h-10 cursor-pointer" />
          <img src="/src/assets/images/Printer.svg" alt="Monitor" class="w-10 h-10 cursor-pointer" />
        </div>


        <h3 class="text-[17px] font-semibold text-black text-start">
          How to find a serial number for a printer
        </h3>
        <ul class="text-[17px] text-[#0278ab] leading-10 text-start">
          <li><a href="#" class="underline">Locate your product’s information label</a></li>
          <li><a href="#" class="underline">Watch a video</a></li>
          <li><a href="#" class="underline">Samsung printer help</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
