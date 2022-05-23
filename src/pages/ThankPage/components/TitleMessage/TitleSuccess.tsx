import { ContainerTitleSuccess } from "./StyledTitleMessage";
import { ButtonAction } from "../../../../view/Recommendations/StyledRecommendations";


export function TitleMessage(){
    return (
      <ContainerTitleSuccess>
        <h1>
          Agradecemos pelo seu interesse em saber mais sobre a nossa solução.
        </h1>
        <span>
          Enviamos um conteúdo para a sua caixa de entrada. Caso tenha alguma
          dúvida, fale com nossos especialistas.
        </span>
        <ButtonAction
          href="https://cinnecta.com/contato/"
          rel="noopener noreferrer"
          target="_blank"
        >
          entre em contato
        </ButtonAction>
      </ContainerTitleSuccess>
    );
}
