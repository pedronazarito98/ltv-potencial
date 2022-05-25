import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import {
  ContainerForm,
  FooterForm,
  FormularioWrapper,
  WrapperInput,
} from "./StyledModalForm";
import { useState } from "react";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { sendRequest } from "../../services/sendRequest";

interface FormProps {
  email: string;
  phone?: string;
  company?: string;
  jobtitle?: string;
  firstname?: string;
  acceptTerms?: boolean;
}

type FetchData = (
  email: string,
  phone?: string,
  company?: string,
  jobtitle?: string,
  firstname?: string,
  acceptTerms?: boolean
) => Promise<FormProps[]>;

export function CompleteForm() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const redirect = () => {
    return navigate("/success");
  };

  const portalId = "8759286";
  const formGuid = "fee1bbd7-d6b9-41a7-971e-36545a419ec9";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const submitHubspotForm: FetchData = async (
    email,
    firstname,
    company,
    jobtitle,
    phone
  ) => {
    try {
      setIsLoading(true);

      const response = await sendRequest.sendEmail(portalId, formGuid, {
        fields: [
          {
            name: "firstname",
            value: firstname,
          },
          {
            name: "jobtitle",
            value: jobtitle,
          },
          {
            name: "company",
            value: company,
          },
          {
            name: "phone",
            value: phone,
          },
          {
            name: "email",
            value: email,
          },
        ],
      });
      const { status } = response;
      if (status === 200) {
        toast.success("Obrigado por enviar o formulário.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          redirect();
        }, 1500);
        setIsLoading(false);
      }
    } catch (error) {
      if (error) {
        toast.error("Erro ao enviar o formulário, tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoading(false);
      }

      return error;
    }
  };

  const onSubmit = handleSubmit((data) => {
    const { email, firstname, jobtitle, company, phone } = data;
    if (!email) return;
    const hubspot_response = submitHubspotForm(
      email,
      firstname,
      jobtitle,
      company,
      phone
    );
    return hubspot_response;
  });

  return (
    <ContainerForm>
      <FormularioWrapper onSubmit={onSubmit}>
        <WrapperInput maxWidth={1000}>
          <Input
            {...register("firstname", { required: true })}
            name="firstname"
            type="text"
            placeholder="nome"
          />
          {errors?.firstname?.type === "required" && <p>Campo obrigatório</p>}

          <Input
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="e-mail corporativo"
          />
          {errors?.email?.type === "required" && <p>Campo obrigatório</p>}
        </WrapperInput>

        <WrapperInput maxWidth={1000}>
          <Input
            {...register("jobtitle", { required: true })}
            type="text"
            name="jobtitle"
            placeholder="cargo"
          />
          {errors?.jobtitle?.type === "required" && <p>Campo obrigatório</p>}
          <Input
            {...register("company", { required: true })}
            type="text"
            name="company"
            placeholder="empresa"
          />
          {errors?.company?.type === "required" && <p>Campo obrigatório</p>}
        </WrapperInput>

        <WrapperInput maxWidth={1000}>
          <InputMask
            mask="(99)99999-9999"
            {...register("phone", { required: true })}
            type="text"
            name="phone"
            placeholder="whatsApp"
          />
          {errors?.phone?.type === "required" && <p>Campo obrigatório</p>}
        </WrapperInput>

        <FooterForm>
          <input
            type="checkbox"
            {...register("acceptTerms", { required: true })}
            id="acceptTerms"
          />
          <label htmlFor="acceptTerms">
            {" "}
            Eu concordo em receber outras comunicações da Cinnecta.
          </label>
          {errors?.acceptTerms?.type === "required" && (
            <p>Aceite os termos de privacidade.</p>
          )}
          <span>
            Ao informar meus dados, concordo com a{" "}
            <a
              href="https://cinnecta.com/privacy-policy/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Política de Privacidade.
            </a>{" "}
            Você pode alterar suas permissões de comunicação a qualquer tempo.{" "}
          </span>
          <span>
            Ao clicar em "enviar" abaixo, você concorda que a Cinnecta armazene
            e processe as informações pessoais enviadas acima para fornecer o
            conteúdo solicitado.
          </span>
        </FooterForm>
        <Button onClick={onSubmit} label="enviar" disabled={isLoading} />
      </FormularioWrapper>
    </ContainerForm>
  );
}
