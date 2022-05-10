import styled from "styled-components";

export const ContainerVideo = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  border-radius: 16px;
  background: rgb(2, 21, 100);
  background: linear-gradient(
    56deg,
    rgba(2, 21, 100, 1) 13%,
    rgba(15, 15, 142, 1) 72%
  );

  display: flex;
  flex-direction: column;
  padding: 40px 64px;

  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 425px) {
    max-width: 350px;
  }

  @media (max-width: 320px) {
    max-width: 280px;
    padding: 40px 26px;
    align-items: center;
  }

  button {
    max-width: 200px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  color: white;

  margin-bottom: 16px;
  svg {
    font-size: 32px;
    margin-right: 16px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 839px;
  margin-bottom: 8px;

  iframe {
    width: 100%;
    max-width: 839px;
    height: 350px;
  }
`;
