import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 40px;

  span {
    color: #707070;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin: 8px;
    font-size: 24px;
    color: var(--text-color);
  }
`;
