import {
  Container,
  ContainerMore,
  ContainerVideo,
  WrapperImage,
  WrapperVideoplayer,
} from "./StyledMoreInfo";

import imgGuiaLtv from "../../../../assets/logos/MockupGuiaLTV.png";

export function MoreInfo() {
  return (
    <Container>
      <ContainerVideo>
        <h1>Enquanto isso</h1>
        <span>
          veja o que <strong>Eduardo </strong>e{" "}
          <strong>Ricardo Ferreira</strong>, fundadores da Cinnecta, explicam
          neste vídeo sobre as funcionalidades da plataforma cinnecta ltv.
        </span>

        <WrapperVideoplayer>
          <iframe
            src="https://www.youtube.com/embed/ewKXX5oLuto"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </WrapperVideoplayer>
      </ContainerVideo>

      <ContainerMore>
        <a
          href="https://materiais.cinnecta.com/hubfs/Guia%20do%20LTV%20Potencial.pdf?utm_source=landing-page&utm_medium=why%20cinnecta%20ltv&utm_campaign=lancamento-ltv"
          rel="noopener noreferrer"
          target="_blank"
        >
          Confira mais informações
        </a>
        <span>
          sobre como potencializar o LTV e utilizar o indicador para impulsionar
          suas campanhas neste material.
        </span>
        <WrapperImage>
          <img src={imgGuiaLtv} alt="Guia LTV" loading="lazy" />
        </WrapperImage>
      </ContainerMore>
    </Container>
  );
}
