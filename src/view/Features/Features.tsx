import { useModal } from "../../hooks/useModal/useModal";
import { ModalForm } from "../../components/ModalForm/ModalForm";
import { dataCardFeatures } from "../../Mocks/DataCardFeatures/dataCard";
import {  FooterButtons, SectionFeatures, TitleFeature, WrapperCards } from "./StyledFeatures";
import { CardFeatures } from "../../components/Cards/CardFeatures/CardFeatures";
import { ButtonAction } from "../Recommendations/StyledRecommendations";

export function Features() {
  const { isOpen, onChangeModal } = useModal();

  return (
    <SectionFeatures>
      <TitleFeature>Com o cinnecta ltv você pode</TitleFeature>

      <WrapperCards>
        {dataCardFeatures.map(({ image, title, description }) => (
          <>
            <CardFeatures
              key={title}
              image={image}
              title={title}
              description={description}
            />
          </>
        ))}
      </WrapperCards>
      <FooterButtons>
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
      </FooterButtons>
    </SectionFeatures>
  );
}
