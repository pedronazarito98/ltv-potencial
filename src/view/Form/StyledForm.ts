import styled from "styled-components";

interface WrapperInputProps {
  justify?: string;
  maxWidth?: number;
}

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 856px;
  margin: 32px auto;

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

export const FormularioWrapper = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin: 0 auto;
  padding: 1.25rem;
`;

export const WrapperInput = styled.div<WrapperInputProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ justify }) => justify && `${justify}`};

  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "305px")};
  margin: 8px;

  button {
    margin-left: 8px;
  }

  @media (max-width: 425px) {
    max-width: 302px;

  }
`;

export const FooterForm = styled.footer`
  margin: 0 104px;
  label {
    color: var(--text-color);
    font-weight: 500;
  }
  span {
    color: var(--text-color);

    margin: 8px 16px;
    font-size: 14px;
    display: inline-block;
  }

  @media (max-width: 425px) {
    margin: 16px 12px;
  }
`;
