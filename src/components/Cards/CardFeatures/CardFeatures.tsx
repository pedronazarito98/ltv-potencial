import { ContainerCard, WrapperContent } from "./StyledCard";

interface CardFeaturesProps {
  image: string;
  title: string;
  description: string;
}

export function CardFeatures({ image, title, description }: CardFeaturesProps) {
  return (
    <ContainerCard>
      <img src={image} alt="" />
      <WrapperContent>
        <h1>{title}</h1>
        <p>{description}</p>
      </WrapperContent>
    </ContainerCard>
  );
}
