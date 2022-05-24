import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-evenly;

  width: 100%;
  margin: 50px auto;

  @media (max-width: 425px) {
    width: 80%;
  }
`;

export const ContainerVideo = styled.div`
  width: 100%;
  max-width: 480px;

  color: var(--text-color);

  h1 {
    font-size: 32px;
  }

  span {
    display: inline-block;
    margin-top: 8px;
    font-size: 15px;
    font-weight: lighter;
    font-family: "Raleway", sans-serif;
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const WrapperVideoplayer = styled.div`
  width: 100%;
  margin-top: 30px;

  iframe {
    border-radius: 24px;
    width: 100%;
    max-width: 468px;
    height: 262px;
  }

  @media (max-width: 375px) {
    iframe {
      height: 184px;
    }
  }
`;

export const WrapperImage = styled.div`
  img {
    width: 407px;
  }

  @media (max-width: 425px) {
    img {
      width: 280px;
    }
  }
`;

export const ContainerMore = styled.div`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  color: var(--text-color);

  a{
    color: var(--text-color);
    font-size: 32px;
    font-weight: 600;
    font-family: 'Cabin',sans-serif;
  }

  span {
    display: inline-block;
    margin-top: 8px;
    font-size: 14px;
    font-weight: lighter;
    font-family: "Raleway", sans-serif;
    color: var(--text-color);

  }
`;
