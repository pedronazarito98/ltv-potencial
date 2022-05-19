import styled from "styled-components";

export const StyledCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Cabin", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: var(--blue-200);
    margin: 0 8px;
  }

  p {
    font-family: "Raleway", sans-serif;
    color: white;
    font-size: 16px;
    margin: 8px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 13px;
    }
  }
`;
