import {
  ButtonAction,
  ContainerButton,
  ContainerRecommendations,
  WrapperImage,
  WrapperInfo,
} from "./StyledRecommendations";
import { useModal } from "../../hooks/useModal/useModal";
import imgPc from "../../assets/Mockup - Cinnecta LTV.png";
import { ModalForm } from "../../components/ModalForm/ModalForm";

export function Recommendations() {
  const { isOpen, onChangeModal } = useModal();

  return (
    <ContainerRecommendations>
      <WrapperInfo>
        <span>
          <strong>Cinnecta ltv: a plataforma de recomendação de ações </strong>
          que impulsiona o aumento de ticket e o tempo de vida do cliente na sua
          base.
        </span>

        <ContainerButton>
          <ModalForm
            onOpen={isOpen}
            onClick={onChangeModal}
            isClose={onChangeModal}
          />

          <ButtonAction
            href="https://www.youtube.com/watch?v=W4W8XsYxZKU"
            rel="noopener noreferrer"
            target="_blank"
          >
            entenda mais
          </ButtonAction>
        </ContainerButton>
      </WrapperInfo>

      <WrapperImage>
        <img src={imgPc} alt="Logo pc" loading="lazy" />
      </WrapperImage>
    </ContainerRecommendations>
  );
}
