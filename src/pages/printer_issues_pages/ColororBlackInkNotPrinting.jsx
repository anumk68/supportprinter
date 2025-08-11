import chat from "../../assets/images/VA_Chat.svg";
import virtualassistant from "../../assets/images/virtualAgent.svg";
import printer from "../../assets/images/Printer_60 1.svg";
import folder from "../../assets/images/folder.svg";
import Search from "../../assets/icons/search_new.png"

const ColororBlackInkNotPrinting = () => {
 


  return (
    <div className="container max-w-7xl font-hpsimplifiedlight">
      <div className="text-lg text-[#0096D6] py-4 ml-6 font-[600]">
        <span className="hover:underline cursor-pointer">Support home</span>
        <span className="mx-2 text-black">{">"}</span>
        <span className="hover:underline cursor-pointer">Printer issues</span>
        <span className="mx-2 text-black">{">"}</span>
        <span className="text-black">
          Color or black ink not printing
        </span>
      </div>

      <h1 className="text-2xl md:text-4xl text-center mt-8 mb-6">
        Color or Black Ink not printing
      </h1>

      <div className="px-[100px] text-[18px]">
        <p className=" mb-6 ">
          Is your color or black ink not working on HP printer? You may
          experience that the printer output is missing black or color ink, or
          the printer page is blank or has very little ink.
        </p>

        <p className=" mb-12 max-w-4xl">
          The fastest way to resolve color or black ink not printing or other
          ink-related issues for your specific product using our Virtual
          Assistant.
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
              Get guided help for printer issues from our automated virtual{" "}
              <br /> assistant
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
            <h4 className="font-bold text-[18px] text-black mb-1">
              Virtual Assistant
            </h4>
            <p className="text-[16px] leading-tight">
              I can help you with wireless printer issues, or any additional
              issues.
            </p>
            <button className="text-[#0071C5] text-[16px] font-semibold mt-2 hover:underline">
              Start Virtual Assistant &gt;
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#c6ece0] to-[#a1d2e7] py-16 px-4">
        <h3 className="text-center text-3xl font-semibold text-black mb-10">
          Video tutorials
        </h3>

        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="p-5">
            <h4 className="font-bold text-lg mb-2 text-black">
              How to connect an HP printer to a wireless network using Wi-Fi
              Protected Setup
            </h4>
            <p className="text-gray-700 text-sm">
              Learn how to connect an HP printer to a wireless network using
              Wi-Fi Protected Setup. Some HP printers come with a feature called
              Wi-Fi Protected Setup...
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className=" flex items-center justify-center">
                <img
                  src="src/assets/images/contact.png"
                  alt=""
                  className="h-15"
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#165DBA] mb-4">
              Contact HP Support
            </h3>
            <p className=" mb-4">
              Sign in or create an HP account to connect with a live agent (may
              require an active warranty).
            </p>
            <button className="bg-[#0071C5] text-white px-4 py-2 rounded-md hover:bg-[#005fa3] transition">
              Contact us
            </button>
          </div>

          <div className="bg-white p-6 text-center">
            <div className="flex flex-col items-center mb-4">
              <div className=" flex mb-2">
                <img src={printer} alt="" />
              </div>
              <h3 className="text-xl font-bold text-[#165DBA]">
                Identify your printer
              </h3>
            </div>

            <p className="mb-2">
              Enter your model name or serial number to find drivers and manuals
              specific to your device.
            </p>
            <p className=" text-[16px] mb-4">
              Example: HUS5BN1BV, LaserJet ...
            </p>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter model or serial number"
                className="w-full border rounded-md px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="bg-[#cccccc] text-white px-3 py-1 rounded-md hover:bg-[#005fa3] transition w-full sm:w-auto">
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
              Search by issue to find step-by-step guidance for diagnosing and
              solving most printer issues.
            </p>
            <p className=" mb-4">What can we help you with?</p>
            <div className="flex items-centermt-2">
              <input
                type="text"
                placeholder="Search support articles"
                className="flex-1 border rounded-sm px-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <img
                src={Search}
                alt="search"
                className="h-10 w-5 bg-[#cccccc] hover:bg-[#005fa3] transition  sm:w-auto px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ColororBlackInkNotPrinting;
