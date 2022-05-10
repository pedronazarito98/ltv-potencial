import styled from "styled-components";
import { ContainerDeposition } from "../Depositions/StyledDepositions";

export const ContainerRecommendations = styled.section`
  width: 100%;
  max-width: 950px;
  margin: 0 auto 30px auto;

  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-evenly;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  max-width: 507px;
  padding: 30px;

  span {
    font-size: 26px;
    color: var(--text-color);
  }

  button {
    margin: 26px 0;
  }

  @media (max-width: 768px) {
    max-width: 405px;
  }

  @media (max-width: 425px) {
    button {
      width: 100%;
    }
  }
`;

export const WrapperImage = styled.div`
  img {
    width: 400px;
  }
  @media (max-width: 768px) {
    img {
      width: 280px;
    }
  }
`;
