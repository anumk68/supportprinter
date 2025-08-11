import { useState, useEffect } from "react";
import Hpsacaraousel from "../assets/images/HPSA_Carousel.avif"
import LiveLensbannerpromo from  "../assets/images/LiveLens-banner-promo.avif"
import TeradiciCarausalBanner from "../assets/images/Teradici Carausal Banner v.2.avif"
const slides = [
  {
    img: Hpsacaraousel,
    title: "HP Support Assistant",
    subtitle: "Built-in support for your PCs and printers",
    button: "Download Now",
  },
  {
    img: LiveLensbannerpromo,
    title: "LiveLens Support",
    subtitle: "Real-time video support from HP agents",
    button: "Learn More",
  },
  {
    img: TeradiciCarausalBanner,
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
