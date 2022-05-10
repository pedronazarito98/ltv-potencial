import styled from "styled-components";

export const ContainerDeposition = styled.section`
  width: 100%;
  max-width: 950px;
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
  }

  @media (max-width: 768px) {
    max-width: 330px;
  }

  @media (max-width: 320px) {
    padding: 30px 20px;
  }
`;

export const WrapperLogos = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 30px 0;
  justify-content: space-around;
  align-content: flex-start;

  img {
    margin: 16px 16px 16px 0px;
  }
`;
