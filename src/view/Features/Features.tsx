import { Button } from "../../components/Button/Button";
import { CardFeatures } from "../../components/Cards/CardFeatures/CardFeatures";
import { dataCardFeatures } from "../../Mocks/DataCardFeatures/dataCard";
import { SectionFeatures, TitleFeature, WrapperCards } from "./StyledFeatures";

export function Features() {
  return (
    <SectionFeatures>
      <TitleFeature>Com o Cinnecta LTV você pode</TitleFeature>

      <WrapperCards>
        {dataCardFeatures.map(({ image, title, description }) => (
          <>
            <CardFeatures
              image={image}
              title={title}
              description={description}
            />
            
          </>
        ))}
      </WrapperCards>
      <div>
        <Button />
      </div>
    </SectionFeatures>
  );
}
