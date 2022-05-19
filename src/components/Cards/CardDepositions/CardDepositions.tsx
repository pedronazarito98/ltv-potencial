import {
  CardDeposition,
  ContentCard,
  FooterCard,
  IconImage,
  WrapperText,
} from "./StyledCardDepositions";

interface CardDepositionProps {
  depoiment: string;
  imgDepositions: string;
  name: string;
  office: string;
  company: string;
}

export function CardDepositions({
  depoiment,
  imgDepositions,
  name,
  office,
  company,
}: CardDepositionProps) {
  return (
    <CardDeposition>
      <ContentCard>
        <h1>"</h1>
        <p>{depoiment}</p>
      </ContentCard>
      <FooterCard>
        <IconImage>
          <img src={imgDepositions} alt="imgDeposition" loading="lazy" />
        </IconImage>
        <WrapperText>
          <img src={company} alt="Logo empresa" loading="lazy" />
          <p>
            {name} <br /> {office}
          </p>
        </WrapperText>
      </FooterCard>
    </CardDeposition>
  );
}
