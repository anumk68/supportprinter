import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ChevronDown, ChevronUp, ChevronRight, Plus, X } from "lucide-react";
import MicrosoftWhite from "../assets/images/microsoft-white.png";
import { Link } from "react-router-dom";

const allVideos = [
  {
    title: "Installing HP Easy Start on HP LaserJet Printers in Mac OS",
    badge: "how to",
    image: "/src/assets/images/touch.avif",
  },
  {
    title: "How to set up your HP Printer with HP Smart",
    badge: "SHORT",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "How to Set Up an HP Printer using USB Connection in Windows 10 or 11",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "Fixing HP Drivers Package 5.1 Installation Failure in Mac OS v11 Big Sur",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title: "Update Printer Firmware | HP Printers",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title: "Print using Apple AirPrint with an HP Printer",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "How to Set Up an HP Printer using USB Connection in Windows 10 or 11",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "Fixing HP Drivers Package 5.1 Installation Failure in Mac OS v11 Big Sur",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "How to set up an HP printer on a wireless network with HP Smart for iOS devices",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "How To Connect a USB HP Printer Using a Full Feature Driver in Windows",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "How to set up a printer on a wireless network with HP Smart in Windows 11",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  {
    title:
      "How to set up your HP Printer with HP Smart & activate HP+ if offered (Android)",
    badge: "HOW TO",
    image: "/src/assets/images/touch.avif",
  },
  // Add more video items as needed
];
const itemsPerPage = 4;

const DriversProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allVideos.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleVideos = allVideos.slice(startIndex, startIndex + itemsPerPage);

  const [openMain, setOpenMain] = useState(true);
  const [openSubs, setOpenSubs] = useState({
    sub1: false,
    sub2: false,
    sub3: false,
  });

  const toggleSub = (key) => {
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
      {/* Steps */}
      <div className=" container mx-auto py-8 flex items-center font-formadjrui space-x-2 mb-6">
        <span className=" flex items-center space-x-1">
          <span className="w-6 h-6 flex items-center justify-center border bg-[#212121] border-black rounded-full text-sm text-white mx-3">
            1
          </span>
          <span className="text-[#212121] text-[18px] font-normal leading-[20px] font-[Forma DJR Micro]">
            Identify
          </span>
        </span>
        <ChevronRight size={18} />
        <span className="flex items-center space-x-1">
          <span className="w-6 h-6 flex items-center justify-center border bg-[#212121] border-black rounded-full text-sm text-white mx-3">
            2
          </span>
          <span className="text-[#212121] text-[18px] font-normal leading-[20px] font-[Forma DJR Micro]">
            Download
          </span>
        </span>
        <ChevronRight size={18} />
        <span className="flex items-center space-x-1">
          <span className="w-5 h-5 flex items-center justify-center text-[#737373] border border-[#737373] rounded-full text-sm mx-3">
            3
          </span>
          <span className="text-[18px] font-normal leading-[20px] font-[Forma DJR Micro] text-[#737373]">
            Install
          </span>
        </span>
      </div>

      {/* Section 2 */}

      <div className="container mx-auto px-4 py-10 md:px-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="/src/assets/images/c07804737.png"
              alt="productimg"
              className="w-60 md:w-72 lg:w-70"
            />
          </div>

          <div className="w-full text-center lg:text-left space-y-3">
            <h3 className="text-[24px] font-[400] leading-[32px]  text-[#1c7a17]">
              Welcome to Software and Drivers for
            </h3>
            <h2 className="text-[32px] font-normal leading-[40px] text-black">
              HP DeskJet 2300 All-in-One Printer series
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-2">
                <img
                  src="/src/assets/images/WrenchIcon.png"
                  alt="Support"
                  className="w-5 h-5"
                />
                <Link
                  to="/redirect"
                  className="text-sm font-normal leading-[20px] text-[#0278ab] 
 hover:underline tracking-[0.5px]"
                >
                  Get Product Support
                </Link>
              </div>
              <div className="flex items-center gap-2 mx-4">
                <img
                  src="/src/assets/images/ArrowRotateIcon.png"
                  alt="Change"
                  className="w-5 h-5 "
                />
                <Link
                  to="/SoftwareDrivers"
                  className="text-sm  leading-[20px] text-[#0278ab] tracking-[0.5px] hover:underline"
                >
                  Choose a different product
                </Link>
              </div>
              {/* <div className="flex items-center">
                <img
                  src="/src/assets/images/SPOSViewInStoreCart.png"
                  alt="Change"
                  className="w-7 h-5"
                />
                  <Link to="/redirect"
                 className="text-sm  leading-[20px] text-[#0278ab] tracking-[0.5px] hover:underline">
                  See comparable devices
                </Link>
              </div> */}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3 text-sm md:text-base">
              <span
                className="text-base font-normal leading-[24px] text-black font-[Forma DJR Micro]
"
              >
                Detected operating system:
              </span>
              <div className="flex items-center gap-2">
                <img
                  src="/src/assets/images/WindowIcon.png"
                  alt="OS Icon"
                  className="w-5 h-5"
                />
                <span className="text-base font-normal leading-[24px] text-black font-[Forma DJR Micro]">
                  Windows 10 (64-bit)
                </span>
              </div>

              <Link
                to="/redirect"
                className="text-sm font-normal leading-[20px] text-[#0278ab] font-[Forma DJR Micro]
 hover:underline"
              >
                Choose a different OS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 */}

      <div className="container mx-auto border-t border-b border-[#cccccc] py-6 px-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 border border-[#D06702] rounded-lg p-4">
          <div className="flex-1">
            <span className="text-[#212121] text-sm leading-[20px] font-bold font-[Forma DJR Micro]">
              HP Print and Scan Doctor is no longer maintained and should be
              removed due to potential security risks.
            </span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            <span className="text-[#212121] text-sm leading-[20px] font-bold font-[Forma DJR Micro]">
              Click here to learn more
            </span>
            <FaChevronRight className="bg-[#D06702] text-white rounded-full p-2 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Section 4 */}

      <div className="container mx-auto px-4 py-6 border-b border-[#cccccc]">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="w-full md:w-1/3">
            <img
              src="/src/assets/images/PrintUpg2_SWD.png"
              alt="Printer"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full md:w-2/3 p-6 text-center md:text-left">
            <h3 className=" md:text-2xl text-[24px] text-[#404040] leading-[32px] font-normal font-[Forma DJR Micro] mb-2">
              Shop our best printer deals
            </h3>
            <p className="text-base text-[#737373] leading-[24px] font-[Forma DJR Micro] mb-8 md:text-base">
              Great savings on select printers. Plus, get free shipping.
            </p>
            <button className="bg-[#0278ab] text-white px-6 py-2 rounded-xl text-sm sm:text-base font-medium">
              Browse Options
            </button>
          </div>
        </div>
      </div>

      {/* Section 5 */}

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-[24px] text-[#000] leading-[32px] font-normal font-[Forma DJR Micro] mb-6">
          Select your software and drivers below:
        </h2>

        <div className="border border-[#1c7a17] rounded-2xl p-6 md:p-8 bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 mb-4 px-5">
            <h3 className="text-[24px] text-[#000] leading-[32px] font-normal font-[Forma DJR Micro]">
              Install HP Smart app to complete setup and support
            </h3>
            <span className="bg-[#1c7a17] text-white text-sm px-4 py-1 rounded-2xl font-[600]">
              Recommended
            </span>
          </div>

          <h4 className="text-[16px] tracking-[1px] leading-[24px]  mb-3 px-5">
            Install HP Smart app to setup and use your Printer
          </h4>

          <ul className="list-disc list-inside space-y-2 text-[#404040] tracking-[1px] mb-4 px-5 ">
            <li>
              HP Smart will help you connect your printer, install driver, offer
              print, scan, fax, share files and Diagnose/Fix top issues.
              <a href="#" className="text-sky-700 hover:underline">
                Click here to learn how to setup your Printer successfully
              </a>
              (Recommended).
            </li>
            <li>
              Creating an HP Account and registering is mandatory for
              HP+/Instant-ink customers. It also helps in accessing assisted
              support options and more.
            </li>
          </ul>

          <h4 className="text-md md:text-lg text-[#404040] font-normal mb-2 px-5">
            NOTE:
          </h4>
          <ul className="list-disc list-inside space-y-2 text-[#404040] font-normal font-[Forma DJR Micro] mb-6 px-5 tracking-[1px]">
            <li>
              Disconnect from Virtual Private Network (VPN) connection before
              downloading.
            </li>
            <li>
              Creating an account on Microsoft Store to download HP Smart app is
              optional.
            </li>
          </ul>

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
                <span>Setup It now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Section 6 */}

      <div className="container mx-auto p-4 text-sm">
        <div className="border-b">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => setOpenMain(!openMain)}
              className="text-left font-semibold text-[#035c84] flex items-center gap-2"
            >
              {openMain ? <ChevronUp /> : <ChevronDown />}
              <span className="text-[18px] leading-[24px] font-bold font-[Forma DJR Micro] text-[#035c84]">
                All software and drivers
              </span>
            </button>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">|</span>
              <button className="text-[#adadad] hover:underline tracking-[1px]">
                Open all
              </button>
              <span className="text-gray-400">|</span>
              <button className="text-[#0278ab] hover:underline tracking-[1px]">
                Collapse all
              </button>
            </div>
          </div>

          {openMain && (
            <div>
              <div>
                <button
                  onClick={() => toggleSub("sub1")}
                  className="w-full text-left font-medium py-2 flex justify-start items-center text-[#035c84]"
                >
                  <span>{openSubs.sub1 ? <ChevronUp /> : <ChevronDown />}</span>
                  <span className="text-[18px] font-normal leading-[24px] text-[#035c84] tracking-[0.5px]">
                    Installation Software and Driver-Includes print, scan,
                    latest features, and solutions (2)
                  </span>
                </button>
                {openSubs.sub1 && (
                  <div className="w-full bg-white px-4 py-6 md:px-6 lg:px-10">
                    <div className="hidden md:grid grid-cols-12 gap-2 pb-3 border-b border-gray-300">
                      <div className="col-span-4 text-sm font-semibold text-gray-600"></div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        Version
                      </div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        File size
                      </div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        Release date
                      </div>
                      <div className="col-span-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-4">
                      <div className="md:col-span-4 flex items-start gap-2">
                        {/* <button onClick={() => toggleSub("underSub")}
                          className="w-full text-leftvfont-medium py-2 flex jusify-start items-center text-blue-600"
                          >
                          <span>{openSubs.underSub}</span>
                          
                        </button> */}
                        <span className="text-[#0076BB]">
                          {openSubs.sub1 ? <Plus /> : <X />}
                        </span>
                        <span className="text-lg font-bold leading-[24px] text-black tracking-[0.5px]">
                          HP Easy Start Printer Setup Software (Internet
                          connection required for driver installation)
                        </span>
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        17.1.16
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        21.9 MB
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        Jun 23, 2025
                      </div>

                      <div className="md:col-span-2 flex md:justify-end">
                        <button className="bg-[#0076BB] hover:bg-[#005fa3] text-white text-sm font-medium py-2 px-5 rounded-md transition duration-200 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 14a1 1 0 011-1h3v-5a1 1 0 112 0v5h3a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  //
                )}
              </div>

              {/* Sub 2 */}
              <div>
                <button
                  onClick={() => toggleSub("sub2")}
                  className="w-full text-left font-medium py-2 flex justify-start items-center cursor-pointer text-[#035c84]"
                >
                  <span>{openSubs.sub2 ? <ChevronUp /> : <ChevronDown />}</span>
                  <span className="text-[18px] font-normal leading-[24px] text-[#035c84] tracking-[0.5px]">
                    Installation Software and Full/Basic Driver-Supports print
                    and scan functionality only
                  </span>
                </button>
                {openSubs.sub2 && (
                  <div className="w-full bg-white px-4 py-6 md:px-6 lg:px-10">
                    <div className="hidden md:grid grid-cols-12 gap-2 pb-3 border-b border-gray-300">
                      <div className="col-span-4 text-sm font-semibold text-gray-600"></div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        Version
                      </div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        File size
                      </div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        Release date
                      </div>
                      <div className="col-span-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-4">
                      <div className="md:col-span-4 flex items-start gap-2">
                        <span className="text-[#0076BB]">
                          {openSubs.sub1 ? <ChevronUp /> : <ChevronDown />}
                        </span>
                        <span className="text-lg font-bold leading-[24px] text-black tracking-[0.5px]">
                          HP DeskJet 2300 All-in-One Print and Scan Driver and
                          Accessories
                        </span>
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        17.1.16
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        21.9 MB
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        Jun 23, 2025
                      </div>

                      <div className="md:col-span-2 flex md:justify-end">
                        <button className="bg-[#0076BB] hover:bg-[#005fa3] text-white text-sm font-medium py-2 px-5 rounded-md transition duration-200 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 14a1 1 0 011-1h3v-5a1 1 0 112 0v5h3a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sub 3 */}
              <div>
                <button
                  onClick={() => toggleSub("sub3")}
                  className="w-full text-left font-medium py-2 flex justify-start items-center cursor-pointer text-[#035c84]"
                >
                  <span>{openSubs.sub3 ? <ChevronUp /> : <ChevronDown />}</span>
                  <span className="text-[18px] font-normal leading-[24px] text-[#035c84] tracking-[0.5px]">
                    Printer Firmware-Keeps your printer updated with latest
                    fixes
                  </span>
                </button>
                {openSubs.sub3 && (
                  <div className="w-full bg-white px-4 py-6 md:px-6 lg:px-10">
                    <div className="hidden md:grid grid-cols-12 gap-2 pb-3 border-b border-gray-300">
                      <div className="col-span-4 text-sm font-semibold text-gray-600"></div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        Version
                      </div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        File size
                      </div>
                      <div className="col-span-2 text-sm font-semibold text-gray-600">
                        Release date
                      </div>
                      <div className="col-span-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pt-4">
                      <div className="md:col-span-4 flex items-start gap-2">
                        <span className="text-[#0076BB]">
                          {openSubs.sub1 ? <ChevronUp /> : <ChevronDown />}
                        </span>
                        <span className="text-lg font-bold leading-[24px] text-black tracking-[0.5px]">
                          HP DeskJet/Ink Advantage 2300 All-in-One Printer
                          series Firmware Update
                        </span>
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        17.1.16
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        21.9 MB
                      </div>

                      <div className="md:col-span-2 text-sm text-gray-700 md:text-left">
                        Jun 23, 2025
                      </div>

                      <div className="md:col-span-2 flex md:justify-end">
                        <button className="bg-[#0076BB] hover:bg-[#005fa3] cursor-pointer text-white text-sm font-medium py-2 px-5 rounded-md transition duration-200 flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 14a1 1 0 011-1h3v-5a1 1 0 112 0v5h3a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 7 Related Video */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-medium mb-6">Related Videos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleVideos.map((video, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-md shadow hover:shadow-lg transition"
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-48 object-cover rounded-md "
              />
              <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white bg-black bg-opacity-60 rounded-full p-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded capitalize">
                {video.badge}
              </div>
              <p className="mt-2 font-[Forma_DJR_Micro] text-[16px] font-semibold leading-[24px] px-2 text-[#404040]">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-end mt-8 space-x-2">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="text-gray-500 hover:text-black disabled:opacity-30 cursor-pointer"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.707 14.707a1 1 0 01-1.414 0L7 10.414a1 1 0 010-1.414L11.293 4.293a1 1 0 011.414 1.414L9.414 10l3.293 3.293a1 1 0 010 1.414z" />
            </svg>
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-8 h-8 text-sm rounded cursor-pointer ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-gray-500 hover:text-black disabled:opacity-30 cursor-pointer"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7.293 4.293a1 1 0 011.414 0L13 8.586a1 1 0 010 1.414L8.707 14.707a1 1 0 01-1.414-1.414L10.586 10 7.293 6.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default DriversProduct;
