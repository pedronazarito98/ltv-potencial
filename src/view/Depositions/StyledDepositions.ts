import styled from "styled-components";

export const ContainerDeposition = styled.section`
  width: 100%;
  max-width: 1030px;
  margin: 30px auto 10px auto;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerEmpresas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  padding: 45px 0;

  max-width: 379px;

  span {
    font-size: 26px;
    color: var(--text-color);
    font-family: "Cabin", sans-serif;

    strong {
      font-family: "Cabin", sans-serif;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
    max-width: 579px;
  }

  @media (max-width: 320px) {
    padding: 30px 20px;
  }
`;

export const ContainerLogos = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 30px 0;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 320px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const WrapperLogo = styled.div`
  margin: 16px 8px;
`;
