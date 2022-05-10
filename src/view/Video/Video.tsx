import {
  ContainerVideo,
  HeaderContainer,
  ContentContainer,
} from "./StyledVideo";

import { Button } from "../../components/Button/Button";
import { AiFillPlayCircle } from "react-icons/ai";

export function ViewVideo() {
  return (
    <ContainerVideo>
      <HeaderContainer>
        <AiFillPlayCircle color="white" />
        <h1> Assista ao vídeo</h1>
      </HeaderContainer>

      <ContentContainer>
        <iframe
          src="https://www.youtube.com/embed/oT06lkfUWSQ?controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </ContentContainer>
      <Button />
    </ContainerVideo>
  );
}
