import styled from "styled-components";

export const SectionFeatures = styled.section`
  background-color: var(--text-color);

  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 60px;

  @media (max-width: 425px) {
    padding: 34px 16px 30px 16px;
  }
`;

export const TitleFeature = styled.h1`
  font-size: 32px;
  color: white;
  text-align: center;
  @media (max-width: 425px) {
    font-size: 24px;
  }
`;

export const WrapperCards = styled.div`
  display: flex;

  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 38px 0;
`;

export const FooterButtons = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 425px) {
    flex-direction: column;

    button {
      padding: 16px 72px;
      margin-bottom: 16px;
    }
  }
`;
