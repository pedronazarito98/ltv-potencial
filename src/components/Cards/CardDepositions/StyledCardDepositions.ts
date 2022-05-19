import styled from "styled-components";

export const CardDeposition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  margin: 0 auto;

  width: 100%;
  max-width: 474px;
  padding: 30px;

  border-radius: 8px;
  background-color: var(--text-color);


  @media (max-width: 768px) {
    max-width: 508px;
  }
  @media (max-width: 425px) {
    max-width: 401px;
  }

  @media (max-width: 320px) {
    max-width: 278px;
  }
  
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    color: var(--blue-200);
    font-size: 52px;
  }

  p {
    color: white;
    font-size: 16px;
    margin: 16px 0 0 8px;
  }
`;

export const FooterCard = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin: 32px 26px 0;

  color: white;

  span {
    color: white;
    font-weight: bold;
  }
`;

export const IconImage = styled.div`
  border: 4px solid var(--blue-200);
  border-radius: 50%;
  width: 81px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 16px;

  p{
    font-size: 14px;
    font-weight: bold;
  }

  img{
    width: 100px;
    margin-bottom: 8px;
  }
`;
