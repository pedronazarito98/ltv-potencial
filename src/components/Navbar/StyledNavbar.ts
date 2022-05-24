import styled from "styled-components";

interface NavbarProps {
  visible: boolean;
  visibleButton?: boolean;
}

export const ContainerNavbar = styled.nav<NavbarProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: ${({ visibleButton }) =>
    !visibleButton ? "center" : "space-between"};

  position: fixed;
  z-index: 99;
  top: ${({ visible }) => (visible ? "0" : "0px")};

  width: 100%;
  padding: 24px 67px;
  background-color: var(--background);
  box-shadow: -1px 0px 7px 0px #0000005c;

  img {
    height: 35px;
  }

  @media (max-width: 425px) {
    justify-content: center;

    button {
      margin-top: 20px;
    }
  }
`;
