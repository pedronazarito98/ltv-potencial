import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  /* max-width: 1440px; */
  margin: 130px auto 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 320px) {
    margin: 168px auto 0 auto;
  }
  @media (max-width: 425px) {
    margin: 178px auto 0 auto;
  }
`;
