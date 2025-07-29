import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layout/MainLayout";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
     <MainLayout>
      <AppRoutes />
    </MainLayout>
    </BrowserRouter>
   
  );
}
