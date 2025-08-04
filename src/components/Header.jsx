import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import BottomNavBar from "./BottomNavBar";
import Profileicon from "../assets/images/Profile-icon.svg"
import hpLogo from "../assets/images/HP_logo.svg";

export default function Header() {
  // State for menu and search functionality
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panel, setPanel] = useState("root");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Refs for DOM elements
  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Sample search suggestions data (would typically come from API in real app)
  const allSuggestions = [
    "Printer setup",
    "Download drivers",
    "Contact support",
    "Warranty check",
    "HP Spectre x360",
    "ENVY laptop drivers",
    "Pavilion support",
    "Inkjet printer troubleshooting",
    "LaserJet error codes",
    "HP Smart app download",
    "Battery replacement",
    "Keyboard not working",
    "Screen flickering fix",
    "Windows 11 update issues",
    "Bluetooth connectivity problems"
  ];

  // Filter suggestions based on search text
  useEffect(() => {
    if (searchText.trim() === "") {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    } else {
      const filtered = allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    }
  }, [searchText]);

  // Toggle mobile search panel
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchText("");
    setSearchSuggestions([]);
    setShowSuggestions(false);
    
    if (!searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  // Clear search text
  const handleClearSearch = () => {
    setSearchText("");
    setSearchSuggestions([]);
    setShowSuggestions(false);
    searchInputRef.current?.focus();
  };

  // Select a suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchText(suggestion);
    setSearchSuggestions([]);
    setShowSuggestions(false);
    searchInputRef.current?.focus();
  };

  // Handle menu toggle for desktop
  const handleMenuToggle = (state) => setShowMegaMenu(state);
  const handleLinkClick = () => setShowMegaMenu(false);

  // Toggle mobile menu
  const toggleMobile = () => {
    setMobileOpen((p) => !p);
    setPanel("root");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileOpen(false);
        setPanel("root");
      }
    }
    
    if (mobileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileOpen]);

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        if (!event.target.closest('.search-icon')) {
          setSearchOpen(false);
          setSearchText("");
          setSearchSuggestions([]);
          setShowSuggestions(false);
        }
      }
    }
    
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  // Data for menus
  const commonTitle = ["Features", "PCs", "Print", "Commercial Solutions"];
  const exploreItems = [
    [
      "Hybrid Work",
      "Print Learn Center",
      "3D print",
      "Sustainable Impact",
      "Small & medium business",
      "Education",
      "Creator's Garage",
      "Work Relationship Index",
      "Copilot+ PCs",
    ],
    ["Another Item A", "Another Item B", "Another Item C"],
    ["Print Item 1", "Print Item 2"],
    ["Commercial A", "Commercial B"],
  ];

  const shopItems = [
    { to: "/products/spectre", label: "Spectre" },
    { to: "/products/envy", label: "ENVY" },
    { to: "/products/pavilion", label: "Pavilion" },
    { to: "/products/chromebooks", label: "Chromebooks" },
  ];

  const supportItems = [
    { to: "/support-home", label: "Support Home" },
    { to: "/drivers", label: "Software & Drivers" },
    { to: "/diagnostics", label: "Diagnostics" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="w-full font-[Segoe UI] text-[#1a1a1a] relative z-50">
      {/* Top Header */}
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-8 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-6 relative">
          <Link to="/">
            <img
               src={hpLogo}
              alt="HP Logo"
              className="h-10 sm:h-[50px] cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex gap-6 text-sm text-gray-700 font-medium text-[20px]">
            <div
              className="relative"
              onMouseEnter={() => handleMenuToggle(true)}
              onMouseLeave={() => handleMenuToggle(false)}
            >
<span className="hover:text-black cursor-pointer font-hpsimplifiedregular">Explore</span>
              {showMegaMenu && (
                <div className="absolute w-[650px] bg-white shadow-lg z-40">
                  <div className="grid grid-cols-3 gap-3 p-6">
                    {/* Laptops */}
                    <div className="font-hpsimplifiedlight">
                      <h4 className="mb-2">Laptops</h4>
                      <ul className="text-[18px] font-light space-y-1 text-gray-500 grid grid-cols-1 gap-3 p-5">
                        <li>
                          <Link to="/products/spectre" onClick={handleLinkClick}>
                            Spectre
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/envy" onClick={handleLinkClick}>
                            ENVY
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/pavilion" onClick={handleLinkClick}>
                            Pavilion
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/chromebooks" onClick={handleLinkClick}>
                            Chromebooks
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Printers */}
                    <div>
                      <h4 className="font-semibold mb-2">Printers</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>
                          <Link to="/products/laserjet" onClick={handleLinkClick}>
                            LaserJet
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/inkjet" onClick={handleLinkClick}>
                            InkJet
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/all-in-one" onClick={handleLinkClick}>
                            All-in-One
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/smart-tank" onClick={handleLinkClick}>
                            Smart Tank
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* Accessories */}
                    <div>
                      <h4 className="font-semibold mb-2">Accessories</h4>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>
                          <Link to="/products/monitors" onClick={handleLinkClick}>
                            Monitors
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/keyboards" onClick={handleLinkClick}>
                            Keyboards
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/mice" onClick={handleLinkClick}>
                            Mice
                          </Link>
                        </li>
                        <li>
                          <Link to="/products/bags" onClick={handleLinkClick}>
                            Bags
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/shop" className="hover:text-black">
              Shop
            </Link>
            <Link to="/support" className="hover:text-black">
              Support
            </Link>
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          {/* Desktop Search with suggestions */}
          <div className="hidden lg:flex items-center w-[399px] max-w-lg relative">
            <div className="w-full relative">
              <input
                type="text"
                placeholder="Search HP Support"
                className="w-full border border-gray-300 rounded-sm py-3 px-3 font-medium focus:outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              <TfiSearch className="absolute right-3 top-3.5 text-gray-500 cursor-pointer" />
              
              {showSuggestions && searchText && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-lg z-50 mt-1">
                  <ul className="py-1">
                    {searchSuggestions.map((suggestion, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                        >
                          <TfiSearch className="mr-2 text-gray-500 text-sm" />
                          <span className="truncate">{suggestion}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button className="bg-black text-white px-4 py-2 hover:opacity-90">
              Sign in
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="w-full  flex items-center   text-[#5a5a5a] gap-5 sm:hidden relative">
            {/* Mobile Search */}
            <div className="relative" ref={searchContainerRef}>
              <button 
                onClick={toggleSearch}
                className="search-icon"
              >
                <TfiSearch className="h-6 w-6 text-gray-700" />
              </button>

              {/* Mobile Search Panel */}
              {searchOpen && (
                <div className="fixed inset-0 mt-[73px] h-[42%] bg-[#eaeaea] shadow border-b border-b-gray-200 z-50 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Search</h2>
                    <button 
                      onClick={toggleSearch}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <RxCross1 className="h-6 w-6" />
                    </button>
                  </div>
                  
                  <div className="relative">
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      placeholder="Search HP Support"
                      className="w-full  bg-white rounded-[5px]  py-3 px-2 focus:outline-none focus:border-black"
                    />
                    {searchText && (
                      <button
                        onClick={handleClearSearch}
                        className="absolute right-10 top-3 text-gray-500"
                      >
                        ✕
                      </button>
                    )}
                    <button className="absolute right-2 top-3 text-gray-500">
                      <TfiSearch className="h-5 w-5" />
                    </button>
                  </div>
                  
                  {/* Mobile Search Suggestions */}
                  {searchText && searchSuggestions.length > 0 && (
                    <div className="mt-2 border border-gray-200 rounded-md shadow-lg">
                      <ul className="py-1">
                        {searchSuggestions.map((suggestion, index) => (
                          <li key={index}>
                            <button
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            >
                              <TfiSearch className="mr-2 text-gray-500" />
                              {suggestion}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Default suggestions when no input */}
                  {!searchText && (
                    <div className="mt-6">
                      <h3 className="text-sm font-medium text-gray-500 mb-2">SUGGESTED SEARCHES</h3>
                      <div className="flex flex-wrap gap-2">
                        {allSuggestions.slice(0, 4).map((item) => (
                          <button
                            key={item}
                            className="bg-white hover:bg-gray-200 rounded-full px-4 py-2 text-sm"
                            onClick={() => {
                              setSearchText(item);
                              searchInputRef.current?.focus();
                            }}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <img src={Profileicon} alt="Profile" />
            <div onClick={toggleMobile} className="cursor-pointer">
              {mobileOpen ? (
                <RxCross1 className="h-8 w-8" />
              ) : (
                <CiMenuBurger className="h-8 w-8" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav Bar */}
      <nav>
        <BottomNavBar/>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <>
          <div className="fixed z-0 inset-0">
            <div
              ref={mobileMenuRef}
              className="
                fixed z-50 top-[54px] overflow-y-auto right-0 w-[300px] max-h-[calc(100vh-70px)]
                bg-white shadow-xl rounded-sm overflow-hidden
              "
            >
              <div className="relative w-full h-full">
                <div
                  className={`
                    flex h-full transition-transform duration-300 ease-out
                    ${panel === "root" ? "translate-x-0" : "-translate-x-[50%]"}
                  `}
                  style={{ width: "200%" }}
                >
                  {/* ROOT PANEL */}
                  <div className="w-1/2 p-2">
                    <ul className="divide-y">
                      <li>
                        <button
                          onClick={() => setPanel("explore")}
                          className="w-full text-left px-4 py-3 flex justify-between items-center"
                        >
                          <span>Explore</span>
                          <span className="text-xl">›</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setPanel("shop")}
                          className="w-full text-left px-4 py-3 flex justify-between items-center"
                        >
                          <span>Shop</span>
                          <span className="text-xl">›</span>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => setPanel("support")}
                          className="w-full text-left px-4 py-3 flex justify-between items-center"
                        >
                          <span>Support</span>
                          <span className="text-xl">›</span>
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* SUB PANEL CONTAINER */}
                  <div className="w-1/2 h-full flex flex-col relative">
                    <div className="flex items-center justify-between px-4 py-3 border-b bg-white z-10">
                      <button
                        onClick={() => setPanel("root")}
                        className="text-xl"
                      >
                        ←
                      </button>
                      <h3 className="font-medium">
                        {panel === "explore"
                          ? "Explore"
                          : panel === "shop"
                          ? "Shop"
                          : "Support"}
                      </h3>
                      <span className="w-4" />
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-4 text-[16px] space-y-3">
                      {panel === "explore" && (
                        <>
                          {commonTitle.map((title, index) => (
                            <div key={index}>
                              <h1 className="text-lg font-semibold mb-2 text-black">
                                {title}
                              </h1>
                              <div className="space-y-2">
                                {exploreItems[index]?.map((label, idx) => (
                                  <button
                                    key={idx}
                                    onClick={toggleMobile}
                                    className="block w-full text-left"
                                  >
                                    {label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </>
                      )}

                      {panel === "shop" &&
                        shopItems.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={toggleMobile}
                            className="block"
                          >
                            {item.label}
                          </Link>
                        ))}

                      {panel === "support" &&
                        supportItems.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            onClick={toggleMobile}
                            className="block"
                          >
                            {item.label}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}