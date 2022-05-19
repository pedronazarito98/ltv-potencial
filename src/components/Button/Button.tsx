import { StyledButton } from "./StyledButton";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
}

export function Button({
  disabled,
  onClick,
  label,
  variant='primary',
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type="submit"
      variant={variant}
    >
      {label}
    </StyledButton>
  );
}