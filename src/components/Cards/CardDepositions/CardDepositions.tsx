import { CardDeposition, ContentCard, FooterCard, IconImage, WrapperText } from "./StyledCardDepositions";


interface CardDepositionProps {
  depoiment: string;
  imgDepositions: string;
  name: string;
  company: string;
}

export function CardDepositions({depoiment,imgDepositions, name, company}:CardDepositionProps){
    return (
      <CardDeposition>
        <ContentCard>
          <h1>"</h1>
          <p>{depoiment}</p>
        </ContentCard>
        <FooterCard>
          <IconImage>
            <img src={imgDepositions} alt="imgDeposition" />
          </IconImage>
          <WrapperText>
            <h1>Porto</h1>
            <span>
              {name} <br /> {company}
            </span>
          </WrapperText>
        </FooterCard>
      </CardDeposition>
    );
}
