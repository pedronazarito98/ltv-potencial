import styled from "styled-components";

interface WrapperInputProps {
  maxWidth?: number;
}

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  h1 {
    font-size: 47px;
    font-weight: bold;
    color: var(--text-color);
    text-align: center;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 28px;
      margin: 8px;
    }
  }
`;

export const FormularioWrapper = styled.form<WrapperInputProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  margin: 0 auto;

  button {

    margin: 5px auto;
    width: 100%;
    max-width: 330px;
  }

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const WrapperInput = styled.div<WrapperInputProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "305px")};

  p {
    margin: 0 8px;
    color: red;
  }

  input {
    background-color: #eaf1ff;
    border: 1px solid var(--text-color);
    border-radius: 3px;
    padding: 16px 4px 16px 18px;
    margin: 8px;

    width: 100%;
    max-width: 338px;

    &::placeholder {
      text-align: left;
      font-weight: 500;
      color: var(--text-color);
    }
  }

  @media (max-width: 425px) {
    max-width: 343px;
  }
`;

export const FooterForm = styled.footer`
  width: 100%;
  /* margin-right: 20px; */
  max-width: 368px;
  p {
    color: red;
    font-weight: bold;
  }
  label {
    color: var(--text-color);
    font-weight: 500;
  }
  span {
    color: var(--text-color);

    margin: 8px 0;
    font-size: 12px;
    display: inline-block;
  }

  @media (max-width: 425px) {
    margin: 16px 12px;
  }
`;
