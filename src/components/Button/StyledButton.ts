import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #fff;
  border: 0;
  font-size: 16px;
  overflow: hidden;
  padding: 16px 40px;
  border-radius: 0.25rem;
  background: var(--blue-100);

  transition: all 0.25s;
  &:hover {
    background: var(--blue-200);
  }
`;