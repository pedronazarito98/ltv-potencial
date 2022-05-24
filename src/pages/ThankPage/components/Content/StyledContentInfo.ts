import styled from "styled-components";
import { ButtonAction } from "../../../../view/Recommendations/StyledRecommendations";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  padding: 30px;
  margin-top: 46px;
  background-color: var(--text-body);
`;

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 400px;

  img {
    width: 150px;
    margin-bottom: 10px;
  }

  p {
    color: var(--text-color);
    font-size: 15px;
    margin: 10px 0;
  }
`;

export const ContainerImage = styled.div`
  img {
    border-radius: 24px;
  }

  @media (max-width: 425px) {
    img {
      width: 350px;
    }
  }
  @media (max-width: 375px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 320px) {
    img {
      width: 280px;
    }
  }
`;

export const FinishMessage = styled.div`
  margin: 52px auto 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-weight: normal;
    color: var(--text-color);
    text-align: center;
  }
  ${ButtonAction} {
    margin-top: 16px;
    background-color: var(--blue-100);
    &:hover {
      background-color: var(--blue-200);
    }
  }

  @media (max-width: 320px) {
    ${ButtonAction} {
      padding: 10px 43px;
    }
  }
`;
