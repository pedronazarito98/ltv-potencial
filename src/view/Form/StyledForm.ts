import styled from "styled-components";

interface WrapperInputProps {
  justify?: string;
  maxWidth?: number;
}

export const ContainerForm = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;

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
  justify-content: ${({ justify }) => justify && `${justify}`};

  width: 100%;
  margin: 0 auto;
  padding: 1.25rem;
`;

export const WrapperInput = styled.div<WrapperInputProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: ${({ justify }) => justify && `${justify}`};

  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "305px")};
  margin: 8px;
  button {
    margin: 0 8px;
  }

  @media (max-width: 425px) {
    max-width: 302px;
    button{
      padding: 16px 90px;
    }
  }
  @media (max-width: 320px) {
    button{
      padding: 16px 70px;
    }
  }
`;


export const CapsuleField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 355px;

  p{
    margin: 0 8px;
    color:red;
  }
`;




export const FooterForm = styled.footer`
  margin: 0 75px;
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
