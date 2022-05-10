import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Homepage } from "./pages/Homepage";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <>
      <Navbar />
      <Homepage />
      <Footer/>
      <GlobalStyle />
    </>
  ); 
}