import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Spectre from "../pages/products/spectre";
import Envy from "../pages/products/Envy";
import Pavilion from "../pages/products/Pavilion";
import Chromebooks from "../pages/products/chromebooks";
import PrinterHelp from "../pages/PrinterHelp";
import ContactAgent from "../pages/ContactAgent";
import SoftwareDrivers from "../pages/SoftwareDrivers";
import PrinterSetup from "../pages/printer_issues_pages/Printer_Setup";
import SelectProduct from "../pages/SelectProduct";
import PrintersContactHelp from "../pages/PrintersContactHelp";
import PrinterSupport from "../pages/PrinterSupport";
import ComputerSupport from "../pages/ComputerSupport";
import PrinterOffline from "../pages/printer_issues_pages/PrinterOffline";
import Signin from "../account setup/Signin";
import Createaccount from "../account setup/Createaccount";
import PrinterDrivers from "../pages/PrinterDrivers";
import DriversProduct from "../pages/DriversProduct";
import WirelessPrinterIssue from "../pages/printer_issues_pages/WirelessPrinterIssue";
import ScanningIssues from "../pages/printer_issues_pages/ScanningIssues";
import ColororBlackInkNotPrinting from "../pages/printer_issues_pages/ColororBlackInkNotPrinting";
import CartridgeIssues from "../pages/printer_issues_pages/CartridgeIssues";
import PrintjobStuckInQueue from "../pages/printer_issues_pages/PrintjobStuckInQueue";
import PaperJam from "../pages/printer_issues_pages/PaperJam";
import CarriageIsJammed from "../pages/printer_issues_pages/CarriageIsJammed";
import Faxissues from "../pages/printer_issues_pages/Faxissues";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/createaccount" element={<Createaccount />} />
      <Route path="/products/spectre" element={<Spectre />} />
      <Route path="/products/envy" element={<Envy />} />
      <Route path="/products/pavilion" element={<Pavilion />} />
      <Route path="/products/chromebooks" element={<Chromebooks />} />
      <Route path="/PrinterHelp" element={<PrinterHelp />} />
      <Route path="/contact" element={<ContactAgent />} />
      <Route path="/Softwaredrivers" element={<SoftwareDrivers />} />
      <Route path="/contact/select-product" element={<SelectProduct />} />
      <Route path="/contact/help/printer" element={<PrintersContactHelp />} />
      <Route path="/printer" element={<PrinterSupport />} />
      <Route path="/computer" element={<ComputerSupport />} />
      <Route path="/drivers/printers" element={<PrinterDrivers />} />
      <Route path="/drivers/products" element={<DriversProduct />} />

      {/* printer issue pages routes */}
      <Route
        path="/PrinterHelp/printer/WirelessPrinterIssue"
        element={<WirelessPrinterIssue />}
      />
      <Route
        path="/PrinterHelp/printer/printer-offline"
        element={<PrinterOffline />}
      />
      <Route
        path="/PrinterHelp/printer/Printer-Setup"
        element={<PrinterSetup />}
      />
      <Route
        path="/PrinterHelp/printer/Scanning-Issues"
        element={<ScanningIssues />}
      />
      <Route
        path="/PrinterHelp/printer/black-ink-not-printing"
        element={<ColororBlackInkNotPrinting />}
      />
      <Route
        path="/PrinterHelp/printer/ink-cartridge-issue"
        element={<CartridgeIssues />}
      />
      <Route
        path="/PrinterHelp/printer/print-job-stuck"
        element={<PrintjobStuckInQueue />}
      />
      <Route path="/PrinterHelp/printer/paper-jam" element={<PaperJam />} />
      <Route
        path="/PrinterHelp/printer/carriage-jam"
        element={<CarriageIsJammed />}
      />

      <Route
        path="/PrinterHelp/printer/fax-issues"
        element={<Faxissues />}
      />
    </Routes>
  );
}
