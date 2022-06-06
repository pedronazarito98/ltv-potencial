import styled from "styled-components";

export const ContainerRecommendations = styled.section`
  width: 100%;
  margin: 4.063rem auto;

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
  max-width: 31.688rem;
  padding: 1.875rem;

  span {
    font-size: 1.625rem;
    font-family: "Cabin", sans-serif;
    color: var(--text-color);
  }

  button {
    margin: 1.625rem 0;
  }

  @media (max-width: 768px) {
    max-width: 25.313rem;
  }

  @media (max-width: 425px) {
    button {
      width: 100%;
    }
  }
`;

export const WrapperImage = styled.div`
  img {
    width: 25rem;
  }
  @media (max-width: 768px) {
    img {
      width: 17.5rem;
    }
  }
`;

export const ButtonAction = styled.a`
  color: #fff;
  border: 0;
  font-size: 1rem;
  overflow: hidden;
  padding: 0.875rem 2.5rem;
  border-radius: 0.25rem;
  background: var(--blue-200);
  margin: 1.625rem 1.875rem;
  transition: all 0.25s;

  font-family: "Raleway", sans-serif;
  &:hover {
    background: var(--blue-100);
  }

  @media (max-width: 768px) {
    margin: 0.25rem 0.5rem;
  }
  @media (max-width: 425px) {
    padding: 0.625rem 4.5rem;
    margin: 0;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    padding: 1rem 1.5rem;
    margin-right: .95rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    button {
      margin-right: 0;
      padding: 1rem 3.75rem;
      margin-bottom: 1rem;
    }
  }
`;
