import {
  ContainerContent,
  ContainerDifference,
  WrapperCard,
  FooterDifference,
} from "./StyledDifference";
import { CardInfo } from "./components/CardInfo";
import { useModal } from "../../hooks/useModal/useModal";
import gifDifference from "../../assets/gif/DifferenceLTV.gif";
import { ModalForm } from "../../components/ModalForm/ModalForm";
import { dataDifference } from "../../Mocks/DataDifference/dataDifference";
import { Button } from "../../components/Button/Button";

export function DifferencePage() {
  const { isOpen, onChangeModal } = useModal();
  const scrollTop = () =>{   window.scrollTo({top: 0, behavior: 'smooth'});};

  return (
    <ContainerDifference>
      <h1>LTV Observado x LTV Previsto x LTV Potencial </h1>

      <ContainerContent>
        <img src={gifDifference} alt="Difference LTV" />
        <WrapperCard>
          {dataDifference.map(({ title, content }) => (
            <CardInfo key={title} titleCard={title} contentCard={content} />
          ))}
        </WrapperCard>
      </ContainerContent>
      <FooterDifference>
        <ModalForm
          onOpen={isOpen}
          onClick={onChangeModal}
          isClose={onChangeModal}
        />
        <Button  variant='secondary' onClick={scrollTop} label="entenda mais" />
      </FooterDifference>
    </ContainerDifference>
  );
}
