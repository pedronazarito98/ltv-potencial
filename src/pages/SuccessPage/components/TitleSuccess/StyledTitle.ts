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
    display: inline-block;
    margin-top: 16px;
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
