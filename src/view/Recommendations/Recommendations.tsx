import {
  ContainerButton,
  ContainerRecommendations,
  WrapperImage,
  WrapperInfo,
} from "./StyledRecommendations";
import { useModal } from "../../hooks/useModal/useModal";
import imgPc from "../../assets/Mockup - Cinnecta LTV.png";
import { ModalForm } from "../../components/ModalForm/ModalForm";
import { Button } from "../../components/Button/Button";

export function Recommendations() {
  const { isOpen, onChangeModal } = useModal();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

          <Button
            variant="secondary"
            onClick={scrollTop}
            label="entenda mais"
          />
        </ContainerButton>
      </WrapperInfo>

      <WrapperImage>
        <img src={imgPc} alt="Logo pc" loading="lazy" />
      </WrapperImage>
    </ContainerRecommendations>
  );
}
