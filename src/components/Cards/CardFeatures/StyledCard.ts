import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  max-width: 490px;
  height: 150px;
  border: 1px solid var(--blue-200);
  border-radius: 16px;
  padding: 24px 16px;
  margin: 24px 46px;

  img {
    width: 100px;
  }

  @media (max-width: 1024px) {
    margin: 24px 30px;
    max-width: 382px;
  }

  @media (max-width: 768px) {
    margin: 16px 8px;
    max-width: 305px;
    height: 183px;
    img {
      width: 70px;
    }
  }
  @media (max-width: 320px) {
    height: 150px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: "Cabin", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: var(--blue-200);
    margin: 0 8px;
  }

  p {
    font-family: "Raleway", sans-serif;
    color: white;
    font-size: 16px;
    margin: 8px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 13px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;
