import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import {
  ContainerForm,
  FooterForm,
  FormularioWrapper,
  WrapperInput,
} from "./StyledForm";

export function Form() {
  return (
    <ContainerForm>
      <h1>Quais os clientes com maior potencial em geração de valor?</h1>

      <FormularioWrapper>
        <WrapperInput justify="center">
          <Input placeholder="Seu nome" />
          <Input placeholder="Empresa" />
        </WrapperInput>

        <WrapperInput justify="center">
          <Input placeholder="Digite seu e-mail coorporativo" />
          <Input placeholder="Seu cargo" />
        </WrapperInput>

        <WrapperInput justify="flex-start" maxWidth={629}>
          <Input placeholder="WhatsApp" />
          <Button />
        </WrapperInput>

        <FooterForm>
          <input type="checkbox" name="verify" id="verify" />
          <label htmlFor="veirfy">
            {" "}
            Eu concordo em receber outras comunicações da Cinnecta.
          </label>
          <span>
            Ao informar meus dados com a Politica de Privacidade. Você pode
            alterar suas permissões de comunicação a qualquer momento.{" "}
          </span>
          <span>
            Ao clicar em "enviar" abaixo, você concorda que a Cinnecta armazene
            e processe as informações pessoais enviadas acima para fornecer o
            conteúdo solicitado.
          </span>
        </FooterForm>
      </FormularioWrapper>
    </ContainerForm>
  );
}
