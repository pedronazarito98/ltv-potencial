import styled from "styled-components";

interface WrapperInputProps {
  justify?: string;
  maxWidth?: number;
}

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  h1 {
    font-size: 47px;
    font-weight: bold;
    color: var(--text-color);
    text-align: center;

    display: inline-block;
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }

  @media (max-width: 425px) {
    padding: 10px;
    
    h1 {
      font-size: 28px;
      margin: 8px;
    }
  }
`;

export const FormularioWrapper = styled.form<WrapperInputProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  margin: 0 auto;
  padding: 1.25rem;

  @media (max-width: 425px){
    align-items: flex-start;
  }
`;

export const WrapperInput = styled.div<WrapperInputProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: ${({ justify }) => justify && `${justify}`};

  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "305px")};
  margin: 8px;

  @media (max-width: 425px) {
    max-width: 377px;
    button {
      font-size: 15px;
      padding: 16px 131px;
    }
  }
  @media (max-width: 375px) {
    button {
      padding: 16px 121px;
    }
  }

  @media (max-width: 360px) {
    button {
      padding: 16px 115px;
    }
  }
  @media (max-width: 320px) {
    button {
      padding: 16px 94px;
    }
  }
`;

export const CapsuleField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 355px;

  p {
    margin: 0 8px;
    color: red;
  }
`;

export const FooterForm = styled.footer`
  width: 100%;
  max-width: 850px;
  label {
    font-weight: 500;
    color: var(--text-color);
  }
  span {
    font-size: 14px;
    margin: 4px 16px;
    display: inline-block;
    color: var(--text-color);
  }
  a {
    color: var(--text-color);
    &:hover {
      text-decoration: underline !important;
    }
  }
  p {
    color: red;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 697px;
  }

  @media (max-width: 425px) {
    margin: 16px 12px;
    span {
      margin: 4px 4px;
    }
  }
`;
