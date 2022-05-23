import styled from "styled-components";

export const ContainerRecommendations = styled.section`
  width: 100%;
  /* max-width: 950px; */
  margin: 65px auto;

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
    font-family: "Cabin", sans-serif;
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

export const ButtonAction = styled.a`
  color: #fff;
  border: 0;
  font-size: 16px;
  overflow: hidden;
  padding: 14px 40px;
  border-radius: 0.25rem;
  background: var(--blue-200);
  margin: 26px 30px;
  transition: all 0.25s;

  font-family: "Raleway", sans-serif;
  &:hover {
    background: var(--blue-100);
  }

  @media (max-width: 768px) {
    margin: 4px 8px;
  }
  @media (max-width: 425px) {
    padding: 10px 72px;
    margin: 0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    padding: 16px 24px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    button {
      padding: 16px 24px;
      margin: 8px 0;
    }
  }
`;
