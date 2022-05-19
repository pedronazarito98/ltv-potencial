import {
  ContainerContent,
  ContainerDifference,
  WrapperCard,
  FooterDifference,
} from "./StyledDifference";
import { CardInfo } from "./components/CardInfo";
import { useModal } from "../../hooks/useModal/useModal";
import gifDifference from "../../assets/gif/DifferenceLTV.gif";
import { ModalForm } from "../../components/ModalForm/ModalForm";
import { ButtonAction } from "../Recommendations/StyledRecommendations";
import { dataDifference } from "../../Mocks/DataDifference/dataDifference";

export function DifferencePage() {
  const { isOpen, onChangeModal } = useModal();

  return (
    <ContainerDifference>
      <h1>LTV Observado x LTV Previsto x LTV Potencial </h1>

      <ContainerContent>
        <img src={gifDifference} alt="Difference LTV" />
        <WrapperCard>
          {dataDifference.map(({ title, content }) => (
            <CardInfo key={title} titleCard={title} contentCard={content} />
          ))}
        </WrapperCard>
      </ContainerContent>
      <FooterDifference>
        <ModalForm
          onOpen={isOpen}
          onClick={onChangeModal}
          isClose={onChangeModal}
        />
        <ButtonAction
          href="https://www.youtube.com/watch?v=ewKXX5oLuto"
          rel="noopener noreferrer"
          target="_blank"
        >
          entenda mais
        </ButtonAction>
      </FooterDifference>
    </ContainerDifference>
  );
}
