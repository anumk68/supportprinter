import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (index) => {
    setOpenSection((prev) => (prev === index ? null : index));
  };

  return (
    <footer className="bg-black text-white text-[15px] font-sans py-5 border-gray-200 mt-10">
      {/* Country Selector */}
      <div className="container mx-auto px-4 sm:px-0  w-full flex items-center space-x-3 pb-3">
        <span className="font-semibold">Country/Region:</span>
        <a href="#" className="flex items-center space-x-2 hover:underline">
          <img src="/src/assets/images/india.webp" alt="India" className="w-5 h-4" />
          <span>India</span>
        </a>
      </div>

      {/* Footer Columns with Mobile Dropdown */}
      <div className="container mx-auto py-10 border-t grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {footerData.map((section, index) => (
          <div key={index} className="border-b  border-gray-200 md:border-none">
            <div
              className="flex justify-between items-center  cursor-pointer md:cursor-default"
              onClick={() => isMobile && toggleSection(index)}
            >
              <h4 className="font-semibold text-white px-4 cursor-pointer mb-0 sm:mb-4  pb-3 md:pb-0">{section.title}</h4>
              {isMobile && (
                <span className="ml-2 px-4 cursor-pointer">
                  {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </div>
            <ul
              className={`overflow-hidden w-full transition-all duration-300 ease-in-out ${
                isMobile
                  ? openSection === index
                    ? "max-h-96 mt-2 opacity-100 "
                    : "max-h-0 opacity-0"
                  : "block mt-2 opacity-100"
              }`}
            >
              {section.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="block hover:underline py-3 sm:py-1 px-4 bg-white md:bg-black md:text-white text-black"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Stay Connected */}
        <div className="px-4 ">
          <h4 className="font-semibold mb-2">Stay Connected</h4>
          <div className="flex space-x-4 mt-9">
            <a href="http://www.facebook.com/HPindia" target="_blank" rel="noreferrer">
              <FaFacebookF className="w-5 h-5 hover:text-blue-600 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/hp_india" target="_blank" rel="noreferrer">
              <FaInstagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
            </a>
            <a href="http://www.twitter.com/hpindia" target="_blank" rel="noreferrer">
              <FaTwitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
            </a>
            <a href="https://youtube.com/@hpindiavideos?si=QkEJ95v1TXbS6At6" target="_blank" rel="noreferrer">
              <FaYoutube className="w-5 h-5 hover:text-red-500 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Links */}
      <div className="container mx-auto  bg-black py-4 border-t border-gray-300">
        <div className="flex flex-wrap px-4 sm:px-0 space-x-2 space-y-2">
          {privacyLinks.map((link, index) => (
            <span key={index} className="flex items-center">
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
              {index < privacyLinks.length - 1 && <span className="mx-1">|</span>}
            </span>
          ))}
        </div>
        <p className="mt-2 px-4 sm:px-0">
          ©2025 HP Development Company, L.P. The information contained herein is subject to change without notice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

// Sample Data Arrays
const footerData = [
  {
    title: "About Us",
    links: [
      { label: "About Us", href: "https://www.hp.com/in-en/hp-information.html" },
      { label: "Contact HP", href: "https://www.hp.com/in-en/contact-hp/contact.html", external: true },
      { label: "Careers", href: "https://jobs.hp.com" },
      { label: "Investor relations", href: "https://investor.hp.com/home/default.aspx" },
      { label: "Sustainable impact", href: "https://www.hp.com/in-en/sustainable-impact.html" },
      { label: "Newsroom", href: "https://www.hp.com/us-en/newsroom.html" },
      { label: "Tech Takes", href: "https://www.hp.com/in-en/shop/tech-takes" },
    ],
  },
  {
    title: "Ways to buy",
    links: [
      { label: "Shop online", href: "https://store.hp.com/in-en/default/" },
      { label: "HP World: Brand exclusive stores", href: "https://www.hpworldstores.in/" },
      { label: "Call an HP rep", href: "https://www.hp.com/in-en/contact-hp/shopping.html" },
      { label: "Find a reseller", href: "https://locator.hp.com/in/en/" },
      { label: "HP Promotions", href: "https://h41201.www4.hp.com/WMCF.Web/in/en/landing/" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support", href: "https://support.hp.com/in-en/" },
      { label: "Download drivers", href: "https://support.hp.com/in-en/drivers" },
      { label: "Support & troubleshooting", href: "https://support.hp.com/in-en/" },
      { label: "Community", href: "https://h30434.www3.hp.com/" },
      { label: "Authorized service providers", href: "https://support.hp.com/in-en/service-center" },
      { label: "Check repair status", href: "https://gncpgslbpro1.houston.hp.com/Cso_Status/CsoStatus.aspx?lc=en&cc=in" },
      { label: "Featured links", href: "https://cs-apj.ext.hp.com/digital-support/region_page/digital_in.html" },
    ],
  },
  {
    title: "HP Partners",
    links: [
      { label: "HP Amplify Partner Program", href: "https://www.hp.com/in-en/solutions/hp-amplify-partner-program.html" },
      { label: "HP Partner Portal", href: "https://partner.hp.com/login" },
      { label: "Developers", href: "https://developers.hp.com/" },
    ],
  },
];

const privacyLinks = [
  { label: "Recalls", href: "https://www.hp.com/in-en/hp-information/recalls.html" },
  { label: "Product recycling", href: "https://www.hp.com/us-en/hp-information/sustainable-impact/planet-product-recycling.html#filters_product_recycling=region-asia|country-india" },
  { label: "Accessibility", href: "https://www.hp.com/us-en/hp-information/accessibility-aging.html" },
  { label: "India CSR Policy", href: "https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c08374460" },
  { label: "India Entity Annual Return", href: "https://www.hp.com/in-en/hp-information/annual-returns.html" },
  { label: "Privacy", href: "http://www.hp.com/in-en/privacy/privacy-central.html" },
  { label: "Terms of use", href: "https://www.hp.com/in-en/terms-of-use.html" },
  { label: "Cookie Preferences", href: "javascript:;" },
];

