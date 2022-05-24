import {
  Container,
  WrapperInfo,
  ContainerImage,
  FinishMessage,
  WrapperContent,
} from "./StyledContentInfo";
import FotoEquipe from "../../../../assets/images/Foto-equipe.jpg";
import { ButtonAction } from "../../../../view/Recommendations/StyledRecommendations";
import Logo_Cinnecta from "../../../../assets/logos/LogoCinnecta.png";

export function ContentInfo() {
  return (
    <Container>
      <WrapperContent>
        <WrapperInfo>
          <img src={Logo_Cinnecta} alt="Logo Cinnecta" loading="lazy" />

          <p>
            A Cinnecta é uma empresa de inteligência de dados especialista no
            entendimento do comportamento de clientes.
          </p>
          <p>
            Nossa plataforma oferece recomendações personalizadas para maximizar
            o valor gerado e a longevidade da relação empresa x consumidor.
            Possuímos parcerias de Open Innovation com grandes empresas do
            Brasil e com a Universidade Federal de Viçosa - Campus Florestal.
          </p>
          <p>
            Em 2021, recebemos duas premiações GPTW: somos a 7ª melhor empresa
            para trabalhar no Brasil - na categoria até 99 funcionários - e a 4ª
            melhor empresa para trabalhar no segmento de Tecnologia da
            Informação. Ocupamos, também, a 2ª posição no Ranking 100 Open
            Startups -Big Data.
          </p>
        </WrapperInfo>
        <ContainerImage>
          <img src={FotoEquipe} alt="Foto da Equipe" loading="lazy" />
        </ContainerImage>
      </WrapperContent>

      <FinishMessage>
        <h1>Pessoas. Dados. Inovação. É isso que nos move.</h1>
        <ButtonAction
          href="https://cinnecta.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Conheça a Cinnecta
        </ButtonAction>
      </FinishMessage>
    </Container>
  );
}
