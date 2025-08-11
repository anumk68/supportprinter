import React, { useState, useEffect, useRef } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import HpSmart from "../../assets/images/hp_smart.avif";
import VirtualAgent from "../../assets/images/Virtual_Agent.avif";
import poster1 from "../../assets/images/poster.jpeg";
import poster2 from "../../assets/images/poster-1.jpeg";
import MicrosoftWhite from "../../assets/images/microsoft-white.png";

const ScanningIssues = () => {
  const navigate = useNavigate();

  const tutorials = [
    {
      title: "How to Check the Use Printer Offline Setting in Windows 10",
      image: poster1,
      description:
        "Learn how you can check the use printer offline setting in Windows 10.",
    },
    {
      title:
        "How to resolve common print errors using Diagnose & Fix in HP Smart for Windows, macOS",
      image: poster2,
      description:
        "This video shows how to use the Diagnose & Fix feature in the HP Smart app for devices running Windows or macOS. This feature can assist in troubleshooting printer issues.",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const hasOpened = useRef(false); // <- This will persist across renders

  useEffect(() => {
    let interval;
    if (isLoading) {
      hasOpened.current = false; // Reset when loading starts
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            if (!hasOpened.current) {
              window.open("https://webonix.tech/", "_blank");
              hasOpened.current = true;
            }
            setIsLoading(false);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
    setProgress(0);
  };

  return (
    <>
      <div className=" bg-white font-hpsimplifiedlight text-[clamp(14px,1.5vw,18px)] leading-[clamp(18px,2vw,21px)] text-black overflow-x-hidden">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 pt-10 max-w-[1100px] mx-auto">
          <div className="max-w-[1200px] mx-auto px-2  text-base leading-[22px] font-hp-simplified pb-5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span
              onClick={() => navigate("/")}
              className="hover:underline cursor-pointer font-bold text-[#0096D6]"
            >
              Support home
            </span>

            <ChevronRight size={18} className="text-black-500" />

            <span
              onClick={() => navigate("/PrinterHelp")}
              className="hover:underline cursor-pointer font-bold text-[#0096D6]"
            >
              Printer issues
            </span>

            <ChevronRight size={18} className="text-black-500" />

            <span className="text-black font-bold">Scann Isuues</span>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal pb-6 text-center">
            Scann Isuues
          </h1>
          <div className=" px-2">
            <p className="pb-4 text-left">
              Is your HP scanner not working? You may experience a range of
              scanner symptoms or error messages, such as:
            </p>
            <div className="w-full flex items-center">
              <ul className="list-disc text-left inline-block space-y-3">
                <li>Computer can't communicate or connect to scanner</li>
                <li>Computer can't find HP Scan</li>
                <li>HP printer will not scan to computer or email</li>
                <li>Scan button not working</li>

                <li>Scanner keeps disconnecting or freezing</li>
                <li>Computer not found on scanner</li>
              </ul>
            </div>
            <p className="pt-4 text-left">
              Use our HP Smart app to resolve scanner issues. You can also get
              guided help with our automated Virtual Assistant, or follow the
              manual troubleshooting steps provided below.
            </p>
          </div>
        </div>

        <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-8 pb-10 pt-10">
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-black ">
              HP Smart
            </h2>
            <p className="mb-4">
              The Diagnose & Fix tool in the HP Smart desktop app can solve
              issues and automatically maintain your printer’s health. To use
              Diagnose & Fix:
            </p>
            <ul className="list-disc ml-5 space-y-3">
              <li>Open or download the application on Windows or Mac</li>
              <li>
                For Windows, select the 🔧 (wrench) icon in the bottom left
                corner
              </li>
              <li>On Mac, tap the printer dropdown in the top menu bar</li>
              <li>Follow the onscreen instructions</li>
            </ul>
            <div className="pt-4">
              <a
                href="#"
                className="text-[#0071bb] font-semibold hover:underline"
              >
                See full Diagnose and Fix instructions
              </a>
            </div>
            <div className="pt-4">
              <button
                className="flex items-center gap-2 bg-[#0278ab] text-white mx-5 px-4 py-2 rounded-xl text-sm sm:text-base font-medium cursor-pointer tracking-[1px]"
                onClick={handleClick}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{progress}%</span>
                  </>
                ) : (
                  <>
                    <img src={MicrosoftWhite} alt="Microsoft Logo" />
                    <span>Get Printer Smart</span>
                  </>
                )}
              </button>

              <p className="text-xs text-black-200 mt-3 max-w-[480px] italic">
                Requires Windows 10 or later, iOS 14 or later, Android 7.0 and
                later, or macOS 10.14 and later
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px]">
            <img
              src={HpSmart}
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
            <h2 className="text-lg sm:text-xl font-semibold mb-6">
              Still need help? Try these solutions.
            </h2>

            <div className="bg-white rounded-xl shadow-md px-6 py-5 max-w-[500px] mx-auto flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center bg-[#0096D6] rounded-full">
                <img
                  src={VirtualAgent}
                  alt="Virtual Assistant"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="text-left flex-1">
                <h3
                  className="text-[18px] leading-[22px] text-black"
                  style={{
                    fontFamily: "HPSimplified, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Virtual Assistant
                </h3>

                <p
                  className="text-[16px] leading-[22px] text-black mb-1"
                  style={{
                    fontFamily: "HPSimplifiedLight, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  Get guided help for offline printer issues from our automated
                  virtual assistant.
                </p>

                <a
                  href="#"
                  className="text-[16px] leading-[22px] text-[#0071bb] hover:underline"
                  style={{
                    fontFamily: "HPSimplifiedLight, sans-serif",
                    fontWeight: 500,
                  }}
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
            <a
              href="#"
              className="text-[#0071bb] font-semibold hover:underline"
            >
              HP printer is offline or not responding (Windows, macOS)
            </a>
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#bae4db] to-[#a4cee9] min-h-[600px] flex items-center justify-center py-18">
          <div className=" px-4 text-center">
            <h2 className="text-[36px] sm:text-[36px] leading-[43px] mb-8">
              Video tutorials
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:space-x-[12px] space-y-4 sm:space-y-0 ">
              {tutorials.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 text-center w-full max-w-[390px] h-[440px] flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={`Tutorial ${index + 1}`}
                    className="mx-auto mb-4 rounded w-[370px] h-[180px] object-cover"
                  />

                  <div className="px-4">
                    <h3
                      className="text-[16px] leading-[23px] text-black mb-12"
                      style={{
                        fontFamily: "HPSimplified, sans-serif",
                        fontWeight: 700,
                        height: "49px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p className="text-[16px] leading-[23px] text-[#767676] font-hpsimplifiedregular">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-300 mt-10" />

      <div className="bg-white ">
        <h1 className="text-center pt-10 text-xl md:text-2xl  ">
          For more help with scanning issues, visit:{" "}
          <span className="text-[#0096D6] cursor-pointer">
            HP printers - Scanner not found or connected (Windows, macOS)
          </span>
          .
        </h1>
      </div>
    </>
  );
};

export default ScanningIssues;
