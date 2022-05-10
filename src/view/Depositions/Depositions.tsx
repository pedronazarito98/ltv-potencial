import {
  ContainerDeposition,
  ContainerEmpresas,
  WrapperLogos,
} from "./StyledDepositions";

import imgLocaliza from "../../assets/logos/Localiza.png";
import imgHapVida from "../../assets/logos/Hapvida.png";
import imgBradesco from "../../assets/logos/Bradesco.png";
import imgNeon from "../../assets/logos/Neon_Versão principal.png";
import { CardDepositions } from "../../components/Cards/CardDepositions/CardDepositions";
import { dataDepositions } from "../../Mocks/DataDepositions/dataDepositions";

export function Depositions() {
  return (
    <ContainerDeposition>
      {dataDepositions.map(({ name, company, depoiment, imgDepositions }) => (
        <CardDepositions
          depoiment={depoiment}
          name={name}
          company={company}
          imgDepositions={imgDepositions}
        />
      ))}

      <ContainerEmpresas>
        <span>
          <strong>Empresas líderes no mercado</strong> que confiam na Cinnecta
        </span>

        <WrapperLogos>
          <img src={imgLocaliza} alt="imgLogo" />
          <img src={imgHapVida} alt="imgLogo" />
          <img src={imgBradesco} alt="imgLogo" />
          <img src={imgNeon} alt="imgLogo" />
        </WrapperLogos>
      </ContainerEmpresas>
    </ContainerDeposition>
  );
}
