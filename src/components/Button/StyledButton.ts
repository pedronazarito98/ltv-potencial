import styled from 'styled-components';

interface StyledButtonProps {
  variant: "primary" | "secondary";
}

export const StyledButton = styled.button<StyledButtonProps>`
  color: #fff;
  border: 0;
  font-size: 16px;
  overflow: hidden;
  padding: 16px 40px;
  border-radius: 0.25rem;
  background: ${({ variant }) =>
    (variant === "primary" && `var(--blue-100)`) ||
    (variant === "secondary" && `var(--blue-200)`)};

  transition: all 0.25s;
  &:hover {
    background: ${({ variant }) =>
      (variant === "primary" && `var(--blue-200)`) ||
      (variant === "secondary" && `var(--blue-100)`)};
  }
`;