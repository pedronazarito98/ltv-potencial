import styled from "styled-components";
import { Button } from "../../components/Button/Button";
import { ButtonAction } from "../Recommendations/StyledRecommendations";

export const ContainerDifference = styled.section`
  background-color: var(--text-color);

  width: 100%;
  padding: 60px;
  margin-top: 40px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: #fff;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  margin-top: 45px;
  padding: 0 66px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 560px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap-reverse;
    padding: 0;
  }

  @media (max-width: 425px) {
    img {
      width: 370px;
    }
  }
  @media (max-width: 365px) {
    img {
      width: 350px;
    }
  }
  @media (max-width: 320px) {
    img {
      width: 295px;
    }
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

export const FooterDifference = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 425px) {
    flex-direction: column;

    button {
      padding: 16px 72px;
      margin-bottom: 16px;
    }
  }
  @media (max-width: 360px) {
    
    button {
      padding: 16px 70px;
    }
    ${ButtonAction} {
      padding: 16px 70px;
    }
  }
  @media (max-width: 320px) {
    button {
      padding: 16px 45px;
    }
    ${ButtonAction} {
      padding: 16px 47px;
    }
  }
`;
