// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { SlArrowDown, SlArrowUp } from "react-icons/sl";



// export default function SupportNav() {
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [desktopMenuOpen, setDesktopMenuOpen]=useState(false);
//   const menuItems = [
//     { label: "Products", to: "/products", hasDropdown: true },
//     { label: "Software and Drivers", to: "/drivers" },
//     { label: "Diagnostics", to: "/diagnostics", hasDropdown: true },
//     { label: "Contact Us", to: "/contact" },
//     { label: "Business Support", to: "/business-support", hasDropdown: true },
//     { label: "My HP Account", to: "/account", hasDropdown: true },
//   ];

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav className="bg-black text-white text-[17px]">
//       {/* Desktop Nav */}
//       <ul className="hidden sm:flex items-center justify-center gap-6 px-6">
//         <li>
//           <Link
//             to="/support-home"
//             className={` py-3 ${
//               isActive("/support-home") ? "border-b-4 border-white " : ""
//             }`}
//           >
//             Support Home
//           </Link>
//         </li>
//         {menuItems.map((item, idx) => (
//           <li key={idx}>
//             <Link
//               to={item.to}
//               className={` flex items-center justify-center gap-2 py-3 ${
//                 isActive(item.to) ? "border-b-4 border-white " : ""
//               }`}
//             >
//               {item.label}{" "}
//               {item.hasDropdown && (
//                 <span className="text-white"><SlArrowDown /></span>:<span className="text-white"><SlArrowUp />
//               )}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Nav */}
//       <div className="sm:hidden">
//         <button
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           className="w-full flex items-center px-3 gap-3"
//         >
//           <span className=" flex g border-b-4 border-[#c4c3c3]  items-center py-4    font-medium">Support Home</span>
//           {mobileMenuOpen ? (
//             <IoIosArrowUp className="text-xl" />
//           ) : (
//             <IoIosArrowDown className="text-xl" />
//           )}
//         </button>

//         {mobileMenuOpen && (
//           <ul className=" space-y-5 pt-5 px-3  bg-[#f8f8f8] text-black text-[16px]">
//             {menuItems.map((item, idx) => (
//               <li key={idx}>
//                 <Link
//                   to={item.to}
//                   className={`flex items-center  gap-2 py-1 rounded hover:bg-gray-800 ${
//                     isActive(item.to) ? "" : ""
//                   }`}
//                 >
//                   {item.label}{" "}
//                   {item.hasDropdown && (
//                     <span className="text-black"><SlArrowDown /></span>
//                   )}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// }



import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function SupportNav() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Products",
      to: "/products",
      hasDropdown: true,
      submenu: [
        { label: "Printers", to: "/products/printers" },
        { label: "Laptops", to: "/products/laptops" },
      ],
    },
    {
      label: "Software and Drivers",
      to: "/drivers",
    },
    {
      label: "Diagnostics",
      to: "/diagnostics",
      hasDropdown: true,
      submenu: [
        { label: "Printer Test", to: "/diagnostics/printer" },
        { label: "PC Health Check", to: "/diagnostics/pc" },
      ],
    },
    {
      label: "Contact Us",
      to: "/contact",
    },
    {
      label: "Business Support",
      to: "/business-support",
      hasDropdown: true,
      submenu: [
        { label: "Enterprise", to: "/business-support/enterprise" },
        { label: "Small Business", to: "/business-support/smb" },
      ],
    },
    {
      label: "My HP Account",
      to: "/account",
      hasDropdown: true,
      submenu: [
        { label: "Profile", to: "/account/profile" },
        { label: "Settings", to: "/account/settings" },
      ],
    },
  ];

  const isActive = (path) => location.pathname === path;

  const isSubmenuActive = (submenu = []) => {
    return submenu.some((sub) => location.pathname === sub.to);
  };

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="bg-black text-white text-[17px]">
      {/* Desktop Nav */}
      <ul className="hidden sm:flex items-center justify-center gap-6 px-6 relative">
        <li>
          <Link
            to="/support-home"
            className={`pb-3 ${
              isActive("/support-home") ? "border-b-4 border-[#e0e0e0]" : ""
            }`}
          >
            Support Home
          </Link>
        </li>

        {menuItems.map((item, idx) => {
          const activeDropdown = item.hasDropdown && isSubmenuActive(item.submenu);
          return (
            <li key={idx} className="relative group">
              <div className="flex items-center space-x-1">
                {item.hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.label)}
                    className={`py-3 text-white ${
                      openDropdown === item.label || activeDropdown
                        ? "border-b-4 border-[#e0e0e0]"
                        : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`py-3 ${
                      isActive(item.to) ? "border-b-4 border-[#e0e0e0]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && (
                  <span className="text-white text-lg">
                    {openDropdown === item.label ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                )}
              </div>

              {/* Desktop Submenu */}
              {item.hasDropdown && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded w-48 z-50">
                  <ul className="py-2">
                    {item.submenu.map((sub, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={sub.to}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-4 py-2 hover:bg-gray-100 ${
                            isActive(sub.to) ? "bg-gray-100 font-medium" : ""
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Mobile Nav */}
      <div className="sm:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-full flex gap-3 px-4 items-center"
        >
          <span className="flex border-b-4 border-[#c4c3c3] items-center py-3 font-medium">
            Support Home
          </span>
          {mobileMenuOpen ? (
            <IoIosArrowUp className="text-xl cursor-pointer" />
          ) : (
            <IoIosArrowDown className="text-xl cursor-pointer" />
          )}
        </button>

        {mobileMenuOpen && (
          <ul className="space-y-5 text-[16px] bg-white text-black">
            {menuItems.map((item, idx) => {
              const isActiveSub = isSubmenuActive(item.submenu);
              return (
                <li key={idx}>
                  <div className="flex justify-between items-center hover:bg-gray-100">
                    <Link
                      to={item.to}
                      onClick={() => {
                        if (!item.hasDropdown) {
                          setMobileMenuOpen(false);
                          setOpenDropdown(null);
                        } else {
                          toggleDropdown(item.label);
                        }
                      }}
                      className={`flex-1 p-4 ${
                        isActive(item.to) || isActiveSub
                          ? "border-l-4 border-[#737373] font-medium text-black"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>

                    {item.hasDropdown && (
                      <span
                        className="text-black text-xl px-4"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleDropdown(item.label);
                        }}
                      >
                        {openDropdown === item.label ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {item.hasDropdown && openDropdown === item.label && (
                    <ul className="w-full px-4 text-[16px] text-black bg-[#dbdbdb] border-t-4 border-[#737373]">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            to={sub.to}
                            onClick={() => {
                              setOpenDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                            className={`block py-3 rounded cursor-pointer hover:bg-gray-300 ${
                              isActive(sub.to) ? "font-medium text-black" : ""
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
}
