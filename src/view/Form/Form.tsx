import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { sendRequest } from "../../services/sendRequest";
import {
  CapsuleField,
  ContainerForm,
  FooterForm,
  FormularioWrapper,
  WrapperInput,
} from "./StyledForm";

interface FormProps {
  email: string;
  firstname?: string;
  acceptTerms?: boolean;
}

type FetchData = (
  email: string,
  firstname?: string,
  acceptTerms?: boolean
) => Promise<FormProps[]>;

export function Form() {
  const navigate = useNavigate();

  const portalId = "8759286";
  const formGuid = "a3660c40-51c8-441d-94ca-252070c438f3";

  const redirect = () => {
    return navigate("/thankyou");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();

  const submitHubspotForm: FetchData = async (email, firstname) => {
    try {
      const response = await sendRequest.sendEmail(portalId, formGuid, {
        fields: [
          {
            name: "firstname",
            value: firstname,
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
      }

      return error;
    }
  };

  const onSubmit = handleSubmit((data) => {
    const { email, firstname } = data;
    if (!email) return;
    const hubspot_response = submitHubspotForm(email, firstname);
    return hubspot_response;
  });

  return (
    <ContainerForm>
      <h1>Por que é importante calcular o LTV Potencial?</h1>

      <FormularioWrapper onSubmit={onSubmit} justify="center">
        <WrapperInput justify="center" maxWidth={1000}>
          <CapsuleField>
            <Input
              {...register("firstname", { required: true })}
              name="firstname"
              type="text"
              placeholder="Nome"
            />
            {errors?.firstname?.type === "required" && <p>Campo obrigatório</p>}
          </CapsuleField>

          <CapsuleField>
            <Input
              {...register("email", { required: true })}
              name="email"
              type="email"
              placeholder="E-mail coorporativo"
            />
            {errors?.email?.type === "required" && <p>Campo obrigatório</p>}
          </CapsuleField>

          <Button onClick={onSubmit} label="saiba mais" />
        </WrapperInput>

        <FooterForm>
          <input
            type="checkbox"
            {...register("acceptTerms", { required: true })}
            id="acceptTerms"
          />
          <label htmlFor="veirfy">
            {" "}
            Eu concordo em receber outras comunicações da Cinnecta.
          </label>
          {errors?.acceptTerms?.type === "required" && (
            <p>Aceite os termos de privacidade.</p>
          )}
          <span>
            Ao informar meus dados, concordo com a Política de Privacidade. Você
            pode alterar suas permissões de comunicação a qualquer tempo.
          </span>
        </FooterForm>
      </FormularioWrapper>
    </ContainerForm>
  );
}
