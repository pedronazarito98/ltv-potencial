import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Home/Homepage";
import { Footer } from "./components/Footer/Footer";
import { SuccessPage } from "./pages/SuccessPage/SuccessPage";
import { HomepageTwo } from "./pages/HomeTwo/HomepageTwo";

export function Router() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/homeTwo" element={<HomepageTwo />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
