import { StyledCardInfo } from "./StyledCardInfo";

interface CardInfoProps {
  titleCard: string;
  contentCard: string;
}

export function CardInfo({ titleCard, contentCard }: CardInfoProps) {
  return (
    <StyledCardInfo>
      <h1>{titleCard}</h1>
      <p>{contentCard}</p>
    </StyledCardInfo>
  );
}
