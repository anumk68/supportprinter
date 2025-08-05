// import Header from "../components/Header";
// import Footer from "../components/Footer";

// export default function MainLayout({ children }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="flex-grow">{children}</main>
//       <Footer />
//     </div>
//   ); 
// }


import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  const location = useLocation();

  // Define paths where Header and Footer should be hidden
  const hiddenRoutes = ["/signin", "/createaccount"];
  const isHidden = hiddenRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!isHidden && <Header />}
      <main className="flex-grow">{children}</main>
      {!isHidden && <Footer />}
    </div>
  );
}
