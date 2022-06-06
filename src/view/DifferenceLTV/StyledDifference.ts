import styled from "styled-components";

export const ContainerDifference = styled.section`
  background-color: var(--text-color);

  width: 100%;
  padding: 3.75rem;
  margin-top: 2.5rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  > h1 {
    color: #fff;
    font-family: "Cabin", sans-serif;
    font-size: 2rem;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  margin-top: 2.813rem;
  padding: 0 4.125rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 35rem;
  }

  @media (max-width: 1024px) {
    img {
      width: 28.75rem;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap-reverse;
    padding: 0;
  }

  @media (max-width: 425px) {
    img {
      width: 23.125rem;
    }
  }
  @media (max-width: 365px) {
    img {
      width: 21.875rem;
    }
  }
  @media (max-width: 320px) {
    img {
      width: 18.438rem;
    }
  }
`;

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 31.25rem;
`;

export const FooterDifference = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
    margin-right: 1.25rem;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    button {
      margin-right: 0;
      padding: 1rem 3.75rem;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 320px) {
    button {
      padding: 1rem 2.5rem;
    }
  }
`;
