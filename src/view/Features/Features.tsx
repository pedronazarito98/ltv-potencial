import { Button } from "../../components/Button/Button";
import { useModal } from "../../hooks/useModal/useModal";
import { ModalForm } from "../../components/ModalForm/ModalForm";
import { dataCardFeatures } from "../../Mocks/DataCardFeatures/dataCard";
import { CardFeatures } from "../../components/Cards/CardFeatures/CardFeatures";
import {
  FooterButtons,
  SectionFeatures,
  TitleFeature,
  WrapperCards,
} from "./StyledFeatures";

export function Features() {
  const { isOpen, onChangeModal } = useModal();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        <Button variant="secondary" onClick={scrollTop} label="entenda mais" />
      </FooterButtons>
    </SectionFeatures>
  );
}
