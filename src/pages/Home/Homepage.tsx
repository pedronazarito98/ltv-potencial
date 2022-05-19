import { Form } from "../../view/Form/Form";
import { ContainerMain } from "./StyledHome";
import { ViewVideo } from "../../view/Video/Video";
import { Features } from "../../view/Features/Features";
import { Navbar } from "../../components/Navbar/Navbar";
import { Depositions } from "../../view/Depositions/Depositions";
import { DifferencePage } from "../../view/DifferenceLTV/DifferencePage";
import { Recommendations } from "../../view/Recommendations/Recommendations";

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
      </ContainerMain>
    </>
  );
}
