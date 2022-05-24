import styled from "styled-components";

export const ContainerVideo = styled.section`
  width: 100%;
  margin: 0 auto;
  max-width: 1030px;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  padding: 40px 64px;

  @media (max-width: 768px) {
    max-width: 700px;
  }

  @media (max-width: 425px) {
    max-width: 683px;
    padding: 38px 24px;
  }

  @media (max-width: 320px) {
    max-width: 280px;
    padding: 40px 0;
    align-items: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1087px;
  margin-bottom: 8px;

  iframe {
    width: 100%;
    max-width: 939px;
    height: 507px;
    border-radius: 28px;
  }
  @media (max-width: 768px) {
    iframe {
      max-width: 542px;
      height: 308px;
    }
  }

  @media (max-width: 425px) {
    iframe {
      height: 209px;
    }
  }
  @media (max-width: 375px) {
    iframe {
      height: 178px;
    }
  }

  @media (max-width: 320px) {
    iframe {
      height: 159px;
    }
  }
`;
