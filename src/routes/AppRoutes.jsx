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
import SelectProduct from "../pages/SelectProduct";
import PrintersContactHelp from "../pages/PrintersContactHelp";
import PrinterSupport from "../pages/PrinterSupport";
import ComputerSupport from "../pages/ComputerSupport";
import PrinterOffline from "../pages/PrinterOffline";
import Signin from "../account setup/Signin";
import Createaccount from "../account setup/Createaccount";
import PrinterDrivers from "../pages/PrinterDrivers";
import DriversProduct from "../pages/DriversProduct";
export default function AppRoutes() {
  return (
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/createaccount" element={<Createaccount/>}/>
        <Route path="/products/spectre" element={<Spectre />} />
        <Route path="/products/envy" element={<Envy />} />
        <Route path="/products/pavilion" element={<Pavilion />} />
        <Route path="/products/chromebooks" element={<Chromebooks />} />
        <Route path="/PrinterHelp" element={<PrinterHelp />} />
        <Route path="/Printer-Setup" element={<PrinterSetup/>}/>
        <Route path="/contact" element={<ContactAgent/>}/>
        <Route path="/Softwaredrivers" element={<SoftwareDrivers/>}/>
        <Route path="/contact/select-product" element={<SelectProduct/>}/>
        <Route path="/contact/help/printer" element={<PrintersContactHelp/>}/>
        <Route path="/printer" element={<PrinterSupport/>}/>
        <Route path="/computer" element={<ComputerSupport/>}/>
        <Route path="/PrinterHelp/printer/printer-offline" element={<PrinterOffline/>}/>
        <Route path="/drivers/printers" element={<PrinterDrivers/>}/>
        <Route path="/drivers/products" element={<DriversProduct/>}/>
      </Routes>
 
  );
}
