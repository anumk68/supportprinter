import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Spectre from "../pages/products/spectre";
import Envy from "../pages/products/Envy";
import Pavilion from "../pages/products/Pavilion";
import Chromebooks from "../pages/products/chromebooks";
import PrinterHelp from "../pages/PrinterHelp";
import ContactAgent from "../pages/ContactAgent";
import SoftwareDrivers from "../pages/SoftwareDrivers";
import Diag from "../pages/optional pages/Diag";
import ComputerSupport from "../pages/ComputerSuppport";
import PrinterSupport from "../pages/PrinterSupport"; // ✅ added import
import SelectProduct from "../pages/SelectProduct";
import Printers from "../pages/Printers.Jsx";
import PrinterOffline from "../pages/PrinterOffline";
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
      <Route path="/contact" element={<ContactAgent />} />
      <Route path="/Softwaredrivers" element={<SoftwareDrivers />} />
      <Route path="/Diag" element={<Diag />} />
      <Route path="/ComputerSupport" element={<ComputerSupport />} />
      <Route path="/PrinterSupport" element={<PrinterSupport />} />
      <Route path="/contact/SelectProduct" element={<SelectProduct/>}/>
      {/* <Route path="/drivers/printers" element={<Printers/>}/> */}
      <Route path="/softwaredrivers/printers" element={<Printers/>}/>
      <Route path="/PrinterOffline" element={<PrinterOffline/>}/>

    </Routes>
  );
}
