import { ContainerCard, WrapperContent } from "./StyledCard";

interface CardFeaturesProps {
  image: string;
  title: string;
  description: string;
}

export function CardFeatures({ image, title, description }: CardFeaturesProps) {
  return (
    <ContainerCard>
      <img src={image} alt="icon feature" loading="lazy" />
      <WrapperContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </WrapperContent>
    </ContainerCard>
  );
}
