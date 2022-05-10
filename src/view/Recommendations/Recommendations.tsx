import { Button } from "../../components/Button/Button";
import {
  ContainerRecommendations,
  WrapperImage,
  WrapperInfo,
} from "./StyledRecommendations";
import imgPc from "../../assets/Mockup - Cinnecta LTV.png";

export function Recommendations() {
  return (
    <ContainerRecommendations>
      <WrapperInfo>
        <span>
          <strong>A plataforma de recomendação de ações </strong>
          que impulsina geração de receita e tempo de vida do cliente na sua
          base.
        </span>
        <Button />
      </WrapperInfo>

      <WrapperImage>
        <img src={imgPc} alt="Logo pc" />
      </WrapperImage>
    </ContainerRecommendations>
  );
}
