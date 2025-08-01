import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Spectre from "../pages/products/spectre";
import Envy from "../pages/products/Envy";
import Pavilion from "../pages/products/Pavilion";
import Chromebooks from "../pages/products/chromebooks";
import PrinterHelp from "../pages/PrinterHelp";
import ContactAgent from "../pages/ContactAgent";
import SoftwareDrivers from "../pages/SoftwareDrivers";
import PrinterSetup from "../pages/Printer_Setup";
export default function AppRoutes() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
       {/* Laptops */}
        <Route path="/products/spectre" element={<Spectre />} />
        <Route path="/products/envy" element={<Envy />} />
        <Route path="/products/pavilion" element={<Pavilion />} />
        <Route path="/products/chromebooks" element={<Chromebooks />} />
        <Route path="/PrinterHelp" element={<PrinterHelp />} />
        <Route path="/Printer-Setup" element={<PrinterSetup/>}/>
        <Route path="/contact" element={<ContactAgent/>}/>
        <Route path="/Softwaredrivers" element={<SoftwareDrivers/>}/>
      </Routes>
 
  );
}
