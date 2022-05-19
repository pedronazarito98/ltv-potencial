import { ContainerVideo, ContentContainer } from "./StyledVideo";

export function ViewVideo() {
  return (
    <ContainerVideo>
      <ContentContainer>
        <iframe
          frameBorder="0"
          allowFullScreen
          title="YouTube video player"
          src="https://www.youtube.com/embed/ypY5yZSfTwc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </ContentContainer>
    </ContainerVideo>
  );
}
