import { Router } from "./route";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStyle } from "./styles/globalStyles";

export function App() {
  return (
    <>
      <ChakraProvider resetCSS={false}>
        <Router />
        <GlobalStyle />
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}
