import { Form } from "../../view/Form/Form";
import { ContainerMain } from "../Home/StyledHome";
import { ViewVideo } from "../../view/Video/Video";
import { Features } from "../../view/Features/Features";
import { Navbar } from "../../components/Navbar/Navbar";
import { Depositions } from "../../view/Depositions/Depositions";
import { DifferencePage } from "../../view/DifferenceLTV/DifferencePage";
import { Recommendations } from "../../view/Recommendations/Recommendations";
import { WhatsAppButton } from "../../components/WhatsAppButton/WppButton";

export function Homepage() {
  return (
    <>
      <Navbar />
      <ContainerMain>
        <Form />
        <ViewVideo />
        <DifferencePage />
        <Recommendations />
        <Features />
        <Depositions />
        <WhatsAppButton />
      </ContainerMain>
    </>
  );
}
