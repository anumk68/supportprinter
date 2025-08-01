import { useState, useEffect } from "react";

const slides = [
  {
    img: "/src/assets/images/HPSA_Carousel.avif",
    title: "HP Support Assistant",
    subtitle: "Built-in support for your PCs and printers",
    button: "Download Now",
  },
  {
    img: "/src/assets/images/LiveLens-banner-promo.avif",
    title: "LiveLens Support",
    subtitle: "Real-time video support from HP agents",
    button: "Learn More",
  },
  {
    img: "/src/assets/images/Teradici Carausal Banner v.2.avif",
    title: "Teradici Remote Support",
    subtitle: "Enterprise-grade remote desktop infrastructure",
    button: "Explore",
  },
];

export default function HPStyledCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative container mt-10">
        <div className="">
            <p className="px-0 text-[25px]  sm:text-[30px] md:text-[40px] leading-[30px] text-center sm:text-start  text-black mb-8">Enter a topic to search our knowledge library</p>
            
 <div className=" sm:w-1/2">

          <div className="relative border border-gray-400 mb-8 sm:mb-16">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full text-start pl-2 text-[15px]   focus:outline-none"
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
                strokeLinecap = "round"
                strokeLinejoin = "round"
                d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
          </div>
        </div>

        </div>
      <div className="flex relative">
        {/* Slider */}
        <div className="w-full relative c overflow-hidden h-[280px]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                i === index
                  ? "translate-x-0 opacity-100 z-10"
                  : "translate-x-full opacity-0 z-0"
              }`}
            >
              <img
                src={slide.img}
                alt={`Slide ${i}`}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay */}
              <div className="absolute top-[20%] left-10 text-white max-w-md">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="text-[20px] mt-1 leading-7">{slide.subtitle}</p>
                <button className="bg-white text-black text-sm font-medium px-6 py-2 border border-gray-600 hover:bg-gray-100 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Controls - Right side stacked */}
        <div className=" flex-col hidden sm:block justify-center ml-6 space-y-3">
          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + slides.length) % slides.length)
            }
            className="border border-gray-600 w-10 h-10 flex items-center justify-center text-lg hover:bg-gray-100 transition"
          >
            ❮
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
            className="border border-gray-600 w-10 h-10  flex items-center justify-center text-lg hover:bg-gray-100 transition"
          >
            ❯
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center sm:justify-start items-center mt-6 space-x-3 px-6 ">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[1px] bg-black w-14 cursor-pointer transition-all duration-200 ${
              index === i ? "bg-black h-[8px]" : "bg-black/30"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
