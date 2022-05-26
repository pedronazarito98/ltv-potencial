import { ButtonAction } from "./../../../../view/Recommendations/StyledRecommendations";
import styled from "styled-components";

export const ContainerTitleSuccess = styled.div`
  width: 100%;
  max-width: 660px;
  margin: 24px auto;

  text-align: center;

  color: var(--text-color);

  h1 {
    font-size: 42px;
    font-weight: bold;
  }

  span {
    font-family: 'Raleway', sans-serif;
    display: inline-block;
    margin: 16px 0 38px 0;
  }

  ${ButtonAction} {
    background-color: var(--blue-100);
    &:hover {
      background-color: var(--blue-200);
    }
  }

  @media (max-width: 425px) {
    padding: 10px;
    h1 {
      font-size: 28px;
    }

    span {
      font-size: 12px;
    }
  }
`;
