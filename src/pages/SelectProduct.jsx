import React from 'react';
import { useNavigate } from 'react-router-dom';
 
import cloudIcon from '../assets/images/Cloud_60.svg';
import printersIcon from '../assets/images/Printer.svg';
import laptopsIcon from '../assets/images/Laptop.svg';
import desktopsIcon from '../assets/images/desktop.png';
import monitorsIcon from '../assets/images/monitors.png';
import polyIcon from '../assets/images/poly.png';
 
const products = [
    { name: 'Subscriptions, apps, and services', icon: cloudIcon, route: '/subscriptions' },
    { name: 'Printers', icon: printersIcon, route: '/contact/help/printer' },
    { name: 'Laptops', icon: laptopsIcon, route: '/laptops' },
    { name: 'Desktops', icon: desktopsIcon, route: '/desktops' },
    { name: 'Monitors, mice and other hardware', icon: monitorsIcon, route: '/monitors' },
    { name: 'Poly products', icon: polyIcon, route: '/poly' },
];
 
export default function SelectProduct() {
    const navigate = useNavigate();
    const [serialNumber, setSerialNumber] = React.useState('');
 
    const handleClick = (route) => {
        navigate(route);
    };
 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (serialNumber.trim()) {
            console.log('Submitted serial number:', serialNumber);
        }
    };
 
    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            <div className="w-full text-center py-10">
                <h1 className="text-3xl text-black mb-4 px-4">
                    Which product are you contacting us about?
                </h1>
            </div>
 
            <div className="w-full flex-1 bg-gradient-to-r from-[#b4e3dd] to-[#8ed2eb] flex flex-col items-center py-10 px-4">
                <p className="text-2xl mb-8 text-center">
                    Select a product type to get started
                </p>
 
                <div className=" grid grid-cols-2  md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            onClick={() => handleClick(product.route)}
                            className="bg-white rounded-xl  shadow-md hover:shadow-xl cursor-pointer transition-transform duration-300 transform hover:scale-105 flex flex-col items-center justify-center p-6"
                        >
                            <img
                                src={product.icon}
                                alt={product.name}
                                className="w-20 h-20 mb-4 object-contain"
                            />
                            <p className="text-center text-blue-800 text-sm font-medium leading-snug">
                                {product.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
 
            <div className="w-full max-w-md px-4 min-h-70 flex items-center justify-center mb-10">
                <div className="bg-white p-4 rounded-lg w-full">
                    <p className="text-gray-800 text-base font-normal mb-2 text-center">
                        You can also enter your serial number here:
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full">
                        <input
                            type="text"
                            value={serialNumber}
                            onChange={(e) => setSerialNumber(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 flex-grow text-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                            placeholder="Examples: HU2658M1Bv"
                        />
                        <button
                            type="submit"
                            className="bg-[#ccc] hover:bg-[#bbb] text-white px-6 py-2 rounded text-sm font-medium transition-colors w-full sm:w-auto"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}