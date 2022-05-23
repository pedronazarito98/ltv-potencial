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
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      type="submit"
      variant={variant}
      {...rest}
    >
      {label}
    </StyledButton>
  );
}