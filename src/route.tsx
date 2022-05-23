import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Home/Homepage";
import { Footer } from "./components/Footer/Footer";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";
import { HomepageTwo } from "./pages/HomeTwo/HomepageTwo";
import { ThankPage } from "./pages/ThankPage/ThankPage";

export function Router() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ltv/success" element={<SuccessPage />} />
        <Route path="/ltv/thankyou" element={<ThankPage />} />
        <Route path="/ltv/homeTwo" element={<HomepageTwo />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
