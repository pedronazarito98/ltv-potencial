import { Depositions } from "../view/Depositions/Depositions";
import { Features } from "../view/Features/Features";
import { Form } from "../view/Form/Form";
import { Recommendations } from "../view/Recommendations/Recommendations";
import { ViewVideo } from "../view/Video/Video";
import { ContainerMain } from "./StyledHome";


export function Homepage (){
    return (
      <ContainerMain>
        <Form />
        <ViewVideo />
        <Depositions />
        <Recommendations />
        <Features/>
      </ContainerMain>
    );
}