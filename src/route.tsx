import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./pages/Home/Homepage";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";

export function Router() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
